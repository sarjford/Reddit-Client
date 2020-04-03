import React, { Component } from 'react';
import axios from 'axios';

import Listing from './listing';
import Search from './search';

import "./listingContainer.scss"


// container that holds all the posts returned in the API
class ListingContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      listingData: [],
      showComments: false,
      showSearchResults: false
    }

    this.pagination = null;
    this.data = [];
  }

  componentDidMount() {
    this.loadMoreListings();
  }

  // call two different endpoints depending on which page calls user is on
  fetchListings = () => {
    let url;
    if (this.props.endpoint === 'pics') {
      url = `/.netlify/functions/getPics`;
    } else {
      url = `/.netlify/functions/getListings?category=${this.props.category}&after=${this.pagination}`;
    }

    axios.get(url)
      .then(( data ) => {
        this.pagination = data.data.data.after;
        this.data = this.data.concat(data.data.data.children);
        window.data = this.data;

        if (this.props.endpoint === 'pics') {
          this.setState({
            listingData: this.state.listingData.concat(data.data.data.children),
            showSearchResults: true
          });
        } else {
          this.setState({
            listingData: this.state.listingData.concat(data.data.data.children),
            showSearchResults: false
          });
        }
      })
      .catch(e => {
        return e
      });
  }

  // infinite scroll - uses intersection API to detect when bottom of
  //the page is in the viewport, loads more posts
  loadMoreListings = () => {
    let bottomBoundary = document.getElementById('page-bottom-boundary');
    let observer = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && !this.state.showSearchResults) {
          this.fetchListings();
        }
      });
    });
    observer.observe(bottomBoundary);
  }
  
  // handler for search submission; filters data to match input value and sets state with matching posts
  submitSearch = (term) => {
    let target = term.toLowerCase();
    this.setState({
      listingData: this.data.filter((listing) => listing.data.title.toLowerCase().indexOf(target) > -1),
      showSearchResults: true
    })
  }

  render() {
    return (
      <div>
        <Search 
          submitSearch={this.submitSearch}
          page={this.props.category}
        />

        <ul>
          {this.state.listingData.map((listing, index) => (
            <Listing
              title={listing.data.title}
              comments={listing.data.permalink}
              thumbnail={listing.data.thumbnail}
              text={listing.data.selftext}
              author={listing.data.author}
              subreddit={listing.data.subreddit}
              category={this.props.category}
              id={listing.data.id}
              key={index}
              video={listing.data.is_video
                ? listing.data.media.reddit_video.fallback_url
                : null}
              image={listing.data.preview
                ? listing.data.url
                : null}
            />)
          )}
        </ul>
        <div id="page-bottom-boundary" className="bottom-boundary">
          {!this.state.showSearchResults && <p className="tile">Loading posts...</p>}
        </div>
      </div>
    )
  }
}

export default ListingContainer;
