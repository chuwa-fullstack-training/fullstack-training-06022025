// change http request into promise-based function

const { error } = require('console');
const https = require('https');
const { resolve } = require('path');

// function httpsRequest(url) {
//   const options = {
//     headers: {
//       'User-Agent': 'request'
//     }
//   };
//   const request = https.get(url, options, response => {
//     if (response.statusCode !== 200) {
//       console.error(
//         `Did not get an OK from the server. Code: ${response.statusCode}`
//       );
//       response.resume();
//     }

//     let data = '';
//     response.on('data', chunk => {
//       data += chunk;
//     });
//     response.on('end', () => {
//       try {
//         // When the response body is complete, we can parse it and log it to the console
//         console.log(JSON.parse(data));
//       } catch (e) {
//         // If there is an error parsing JSON, log it to the console and throw the error
//         throw new Error(e.message);
//       }
//     });
//   });
//   request.on('error', err => {
//     console.error(
//       `Encountered an error trying to make a request: ${err.message}`
//     );
//   });
// }

function getJSON(url) {
  // implement your code here
  const options = {
    headers: {
      'User-Agent': 'request'
    }
  };

  return new Promise(
    ((resolve, reject) => {
      https.get(url, options, response => {
        if (response.statusCode !== 200) {
          reject(new Error(`Did not get an OK from the server. Code: ${response.statusCode}`)
          );
          response.resume();
          return;
        }
        let data = '';

        response.on('data', chunk => {
          data += chunk;
        });

        response.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed);
          } catch (e) {
            reject(new Error(`Failed to parse JSON: ${e.message}`));
          }
        });
      }).on('error', err => {
        reject(new Error(`Request failed: ${err.message}`));


      })
    }))

}



getJSON('https://api.github.com/search/repositories?q=javascript')
  .then(response => console.log(response.items.length)) // output: 30
  .catch(err => console.log(err)); // if you remove options from https.get parameters, might see an error
