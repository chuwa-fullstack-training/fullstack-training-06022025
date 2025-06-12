// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  // implement your solution here
  let regex = /<\/?[a-z0-9][a-z0-9]*[^>]*>/g;
  let matches = html.match(regex);
  matches = matches.map((item) => item.replace(/</, "").replace(/>$/, ""));
  //   console.log(matches);
  let stack = [];
  for (let tag of matches) {
    if (tag[0] !== "/") {
      stack.push(tag);
    } else {
      const top = stack[stack.length - 1];
      if (tag.slice(1) === top) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  console.log(stack.length === 0);
  return stack.length === 0;
}

let html = "<html><head><title>My Title</title></head></html>";
checkValidHTML(html);
html = "<html><head><title>My Title</title></head></head></html>";
checkValidHTML(html);
html = "<html><head><title>My Title</title></head></html";
checkValidHTML(html);
html = "<html><head><title>My Title</title></head></html>";
checkValidHTML(html);
