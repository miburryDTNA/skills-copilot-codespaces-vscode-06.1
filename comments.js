// Create web server
// 1. Create a web server
// 2. Create a router
// 3. Create a route handler
// 4. Start the server
// 5. Create a route for comments
// 6. Create a route for a single comment
// 7. Create a route for a new comment
// 8. Create a route for updating a comment
// 9. Create a route for deleting a comment

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const comments = require('./data/comments');
const contacts = require('./data/contacts');
const vehicles = require('./data/vehicles');
const products = require('./data/products');

const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(morgan('dev'));

// 5. Create a route for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// 6. Create a route for a single comment
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment._id === id);
  res.json(comment);
});

// 7. Create a route for a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  const nextId = comments.length + 1;
  newComment._id = nextId;
  comments.push(newComment);
  res.json(newComment);
});

// 8. Create a route for updating a comment
app.put('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment._id === id);
  comment.body = req.body.body;
  res.json(comment);
});

// 9. Create a route for deleting a comment
app.delete('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const commentIndex = comments.findIndex(comment => comment._id === id);
  comments.splice(commentIndex, 1);
  res.json(comments);
});

// 10. Create a route for contacts
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

// 11. Create a route for