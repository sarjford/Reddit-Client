import React, { useState } from 'react';

import Comments from './comments';

import "./listingContainer.scss"


const Listing = (props) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <li className="tile">
      <button onClick={() => setShowComments(true)}>
        <div className="gray-column"></div>
          <div className="wrapper">
            <div className="header">
              <span>r/{props.subreddit}</span>
              <span> &#8226; </span>
              <span>Posted by {props.author}</span>
            </div>
            <div className="content">
              <h3>{props.title}</h3>
              {props.thumbnail.indexOf('http') > -1
                && <img src={props.thumbnail} alt="feafeawe"/>}
            </div>
          </div>
      </button>

      {showComments && 
        <Comments 
          subreddit={props.subreddit}
          id={props.id}
          subreddit={props.subreddit}
          author={props.author}
          title={props.title}
          setShowComments={setShowComments}
          mediaType={props.mediaType}
          media={props.media}
          video={props.video}
          image={props.image}
        />
      }

    </li>
  )
}

export default Listing;