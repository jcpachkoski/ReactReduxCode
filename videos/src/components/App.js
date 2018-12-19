import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    // We set the initial search term when the component first displays.
    this.onSearchTermSubmit('scuba diving Palau');
  }

  // Note: A callback to this method, onSearchTermSubmit, gets passed via props to the SearchBar.
  // OnSearchSubmittedCallback is the prop thats holds/points to this method.  We could have named
  // it anything we wanted but I used past tense and callback in the name to make it self-explanatory.
  // When a search term is entered in the SearchBar and enter is pressed to submit it, this method
  // is called with the searchTerm and the API is called to get data. Afterwards, setState is called,
  // below, which changes the state of this App component.  The change in state causes this App component
  // and the children components to re-render.
  onSearchTermSubmit = async searchTerm => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    });

    // Prevents the bug where the channels page picture was loading, which does not have a video to play or a videoId.
    // This was causing a black screen to load and an error when pressing play.  This addes a variable that creates an
    // array of responses that only have a videoId as well. This cleans up the state and removes any responses that don't have a videoId.
    // Now if you search for channels their channel display won't pop up, only their videos will, thus removing the bug of loading up a
    // non-playable "video" in the iframe.
    const setSelectedVideo = response.data.items.filter(item => {
      if(item.id.videoId !== undefined){
        return item.id.videoId;
      } else{
        return false;
      }
    });
    
    // Note that, initially, the component will display with the first video found since we set
    // selectedVideo: response.data.items[0]
    this.setState({
      videos: response.data.items.filter(item => item.id.videoId !== undefined),
      selectedVideo: setSelectedVideo[0]
    });
  };

  // Note: A callback to this method, onVideoSelect, gets passed via props to the VideoList and then to each VideoItem.
  // onVideoSelectedCallback is the prop thats holds/points to this method.  We could have named
  // it anything we wanted but I used past tense and callback in the name to make it self-explanatory.
  // When a video item is selected, the video is passed to this method.
  // When setState is called, the state of this App component changes and this component and children components re-render.
  // Since the VideoDetail component is tied to this.state.selectedVideo it puts the selected video on the page in an iframe.
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  // I did the research for semantic-ui, so the videos application will look good on both desktop and mobile devices.
  // Be sure to make the grid stackable, below.
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmittedCallback={this.onSearchTermSubmit} />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelectedCallback={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
