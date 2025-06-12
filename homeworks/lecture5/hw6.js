/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    return getJSON(url).then((response) => results.push(response));
  }
  // implement your code here
  for (const url of urls) {
    try {
      fetchOne(url);
    } catch (e) {
      throw new Error(e);
    }
  }
  return results;
}

const https = require("https");

function getJSON(url) {
  // copy from hw5.js
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        "User-Agent": "request",
      },
    };
    const request = https.get(url, options, (response) => {
      if (response.statusCode !== 200) {
        response.resume();
        reject(
          new Error(
            `Did not get an OK from the server. Code: ${response.statusCode}`
          )
        );
      }

      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        try {
          // When the response body is complete, we can parse it and log it to the console
          resolve(JSON.parse(data));
        } catch (e) {
          // If there is an error parsing JSON, log it to the console and throw the error
          throw new Error(e.message);
        }
      });
    });
    request.on("error", (err) => {
      reject(`Encountered an error trying to make a request: ${err.message}`);
    });
  });
}

// test your code
const urls = [
  "https://api.github.com/search/repositories?q=javascript",
  "https://api.github.com/search/repositories?q=react",
  "https://api.github.com/search/repositories?q=nodejs",
];

console.log(sequencePromise(urls));
