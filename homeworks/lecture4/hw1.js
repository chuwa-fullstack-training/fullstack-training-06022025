// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    //should be regular expression
                //<  //\match the end tag   word boundary
    const regex = /<\/?([a-zA-Z][a-zA-Z0-9])\b[^>]*>/g;
                        //first char                 match all tag of input strings
    
    const stack = [];
    let match;  

    while((match = regex.exec(html)) !== null){
        const fullTag = match[0]; //<tagName>
        const tagname = match[1]; // tagName
         //a start tag
        if(fullTag[1] !== '/'){
            stack.push(tagname);
        }else{
            if (stack.length === 0 || stack.pop() !== tagName) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
    
