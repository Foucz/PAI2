var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Message} = require('./models/message');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/messages',(req,res)=>{
    var message = new Message({
      text: req.body.text,
      user: req.body.user
    });

    message.save().then((doc) =>{
      res.send(doc);
    }, (e)=>{
      res.status(400).send(e);
    });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
})
