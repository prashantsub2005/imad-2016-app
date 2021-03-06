var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
        'articleone' : {
        title: 'Article One',
        heading: 'Article One',
        date: '10th October, 2016',
        content:`<p>
                   This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.</p>
               <hr/>
               
               <p>This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.</p>`
    },
        'articletwo' : {
            title: 'Article Two',
            heading: 'Article Two',
            date: '10th October, 2016',
            content:`<p>
                   This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.</p>
               <hr/>
               
               <p>This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.</p>`},
        'articlethree' : {
            title: 'Article Three',
            heading: 'Article Three',
            date: '10th October, 2016',
            content:`<p>
                   This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.</p>
               <hr/>
               
               <p>This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.This is the content for my article.</p>`}
};

function createTemplate (data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate =`
    
<html>
   <head>
       <title>
           ${title}
       </title>
       <meta name='viewport' content='width=device=width, initial-scale=1'/>
       <link href="/ui/style.css" rel="stylesheet" />
       </head> 
  <body>
       <div class='container'>
       <div>
           <a href='/'>Home</a>
        </div>
       <hr/>
       <h3> ${heading}</h3>
       <div>${date}</div>
       <div>
           ${content}
           
       </div>
       </div>
  </body>
  
</html>

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name/', function (req, res) {   //    /submit-name?name=xxxxxx
    //Get the current name from the request
    var name = req.query.name;
    
    names.push(name);
    //JSON: Javascript Object Notation
    
    res.send(JSON.stringify(names)); 
});

app.get('/:articleName', function (req, res) {
    // articleName == articleone
    // rticles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/Vulture.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Vulture.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
