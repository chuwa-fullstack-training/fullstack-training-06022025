/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 *
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3002;
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (method === "GET") {
    if (url === "/") {
      res.end("this is the home page");
    } else if (url === "/about") {
      res.end("this is the about page");
    } else if (url.startsWith("/home.html")) {
      fs.readFile(path.join(__dirname, "home.html"), (err, html) => {
        if (err) {
          res.end("error");
        } else {
          // Parse query parameters if they exist
          const index = url.indexOf("?");
          let data = "";
          if (index !== -1) {
            const str = url.slice(index + 1);
            const obj = querystring.parse(str);
            data = `
              <div>
                <h1>Submitted Data:</h1>
                <div>Title: ${obj.title || ""}</div>
                <div>Content: ${obj.content || ""}</div>
              </div>
            `;
          }

          res.writeHead(200, { "Content-Type": "text/html" });
          const newHtml = html.toString().replace("</form>", `</form>${data}`);
          res.write(newHtml);
          res.end();
        }
      });
    } else {
      res.end("this is the 404 page");
    }
  } else if (method === "POST") {
    if (url === "/create-post") {
      let body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();

        const postData = querystring.parse(parsedBody);
        // Redirect to home.html with query string
        res.statusCode = 302;
        res.setHeader(
          "Location",
          `/home.html?title=${encodeURIComponent(
            postData.title
          )}&content=${encodeURIComponent(postData.content)}`
        );

        res.end(parsedBody);
      });
    } else {
      res.end("this is the 404 page");
    }
  } else {
    res.end("Unsupported method");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
