// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let stack = [];
    let tagRegex = /<\?\w+>/g;
    let match;

    while ((match = tagRegex.exec(html)) !== null) {
        const tag = match[1];
        const isClosing = match[0][1] === '/';
        if (!isClosing) {
            stack.push(tag);
        } else {
            if (!stack.length || stack[stack.length - 1] !== tag) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}
console.log(checkValidHTML("<html><head><title>My Title</title></head></html>")); 