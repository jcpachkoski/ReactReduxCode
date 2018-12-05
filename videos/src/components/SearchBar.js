import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  
  onFormSubmit = event => {
    event.preventDefault();

    // Here, we pass the search term to the parent (App component).
    // The passed in prop from the parent named, onSearchSubmittedCallback,
    // holds a pointer to the function onSearchTermSubmit in the parent (App component).
    // The name of the property passed in could have been anything I wanted.  I used
    // onSearchSubmittedCallback to make it self-explanatory.
    this.props.onSearchSubmittedCallback(this.state.term);
  };
  
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
