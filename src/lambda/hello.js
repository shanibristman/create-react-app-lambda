
// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
import index from './index'
export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters)
  callback(null, {
    statusCode: 200,
    // body: JSON.stringify({ msg: 'Hello, World!shani' }),
    body : index
  })

}
