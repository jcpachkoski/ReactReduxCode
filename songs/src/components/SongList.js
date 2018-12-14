import React, { Component } from 'react';
import { connect } from 'react-redux';
// Since this is a named export we use  curly braces around it.
// If it was and export default, we would not use the curly braces.
import { selectSong } from '../actions';

// To update state in the Redux store, we have to call an action creator.
// Hence, we call this.props.selectSong(song) which is an action creator.
// The connect can also be used to get action creators to this component, so
// we pass the action creator to the connect function. below, as an object
// { selectSong: selectSong } which can be shortened to just { selectSong }
// connect then passes the action creator selectSong into our component as props.
class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// The returned object shows up as props in this component SongList as this.props.songs
// Note that this function gets called with the state in the Redux store whenever onClick is
// checked, which shows our redux store was updated with the selected song if you console logged
// the state, here.
const mapStateToProps = state => {
  return { songs: state.songs };
};

// We use connect and pass in mapStateToProps and the component SongList.
// We also pass in an action creator, selectSong, so we can change the state of the Redux store.
// The action creator will show up in props as this.props.selectSong
// connect passes the seleect song action creator into the dispatch function.
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
