import axios from 'axios';

// call /all endpoint for Supergroup challenge

export function handler(event, context, callback) {

  const category = event.queryStringParameters.category
    ? `${event.queryStringParameters.category}`
    : '';
  const after = event.queryStringParameters.after
    ? `&after=${event.queryStringParameters.after}`
    : '';
  const url = `https://www.reddit.com/r/all/${category}.json?sort=new${after}`;

  
  axios.get(url)
    .then(response => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response.data),
      })
    })
}
