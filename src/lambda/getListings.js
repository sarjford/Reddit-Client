import axios from "axios"

export function handler(event, context, callback) {

  const endpoint = event.queryStringParameters.endpoint
  const category = event.queryStringParameters.category
    ? `${event.queryStringParameters.category}`
    : ''
  const count = event.queryStringParameters.count
    ? `&count=${event.queryStringParameters.count}`
    : ''
  const after = event.queryStringParameters.after
    ? `&after=${event.queryStringParameters.after}`
    : ''
  const url = `https://www.reddit.com/r/${endpoint}/${category}.json?sort=new${count}${after}`

  console.log('ENDPOINT ', url)
  
  axios.get(url)
    .then(response => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response.data),
      })
    })
}
