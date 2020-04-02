import axios from 'axios';

// call comments endpoint

export function handler(event, context, callback) {

  const category = event.queryStringParameters.category;
  const id = event.queryStringParameters.id;
  const url = `https://www.reddit.com/r/${category}/comments/${id}/.json`;
  
  axios.get(url)
    .then(response => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response.data),
      })
    })
}
