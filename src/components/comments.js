
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './listingContainer.scss';

// comments view - popup when clicking on a post
// fetch posts, set state with those posts, handle loading state
// and indicate empty results state
const Comments = (props) => {

  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noComments, setNoComments] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = () => {
      const url = `/.netlify/functions/getComments?category=${props.subreddit}&id=${props.id}`;
      setLoading(true);
      axios.get(url)
        .then((data) => {
          setCommentData(data.data[1].data.children);
          setLoading(false);
          if (data.data[1].data.children.length === 0) {
            setNoComments(true);
          }
        })
        .catch(event => {
          return event
        });

      return function cleanup() {
        abortController.abort();
      }
    }
    fetchData();
  }, []);

  return (
    <div className="comments-view">
      <div className="comments-view__inner">

        <button onClick={props.setShowComments.bind(null, false)}>&#215;</button>

        <div className="header">
          <span>r/{props.subreddit}</span>
          <span> &#8226; </span>
          <span>Posted by {props.author}</span>
          <h2>{props.title}</h2>
        </div>

        <Media
          video={props.video}
          image={props.image}
        />

        <div className="discussion">
          {loading && <p className="loading">Loading comments...</p>}
          {noComments && <p className="loading">No comments have been submitted yet.</p>}
          {commentData.map((child) => (
            <SingleComment
              commentChild={child.data}
              key={child.data.id}
            />)
            )
          }
        </div>
      </div>
    </div>
  )
}


// recursively render nested comment tree in comments view
const SingleComment = (props) => {

  const hasChildren = typeof props.commentChild.replies === 'object';
  
  return (
    <div className="single-comment">
      <h4>{props.commentChild.author}</h4>
      <p>{props.commentChild.body}</p>

      {hasChildren &&
        props.commentChild.replies.data.children.map((child) =>
          <SingleComment
            commentChild={child.data}
            key={child.data.id}
          />
      )}
    </div>
  )
}


// render media type in comments view
const Media = (props) => {
  // video
  if (props.video) {
    return (
      <video width="320" height="240" controls>
        <source src={props.video} type="video/mp4"/>
      </video>
    )
  // gif
  } else if (props.image && props.image.indexOf('gif') > -1) {
    return (
      <video width="320" height="240" controls>
        <source src={props.image.replace('gifv', 'mp4')} type="video/mp4"/>
      </video>
    )
  // news story/external link
  } else if (props.image && props.image.indexOf('jpg') === -1 && props.image.indexOf('png') === -1) {
    return (
      <a href={props.image} target="_blank">
        <strong>Visit External Link</strong>
      </a>
    )
  // image
  } else if (props.image) {
    return <img src={props.image}></img>;
  } else {
    return null;
  }
}


export default Comments;