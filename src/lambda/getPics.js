import axios from 'axios';

// call /pics endpoint for Assembly challenge

export function handler(event, context, callback) {

  const url = `https://www.reddit.com/r/pics/.json?jsonp=`;
  
  axios.get(url)
    .then(response => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response.data),
      })
    })
}
