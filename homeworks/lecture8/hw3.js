/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
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
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', './view');


app.get('/', (req, res) =>{
    res.send('this is the home page');
});

app.get('/about', (req, res) =>{
    res.send('this is the about page');
});

app.get('/home.html', (req, res) =>{
   const {name, age} = req.query;
   res.render('home', {name, age}); 
});

app.get('/create-post', (req,res) => {
    const {name, age} = req.body;
    const query = new URLSearchParams({name, age}).toString();
    res.redirect(`/home.?${query}`);
});

app.use((req, res) => {
    res.status(404).send('this is the 404 page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})