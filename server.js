const express = require('express');
const hbs = require('hbs');

var app =express();

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.get('/',(req, res)=>{
// res.send('<h1>Hello User</h1>');
res.send({
    name:'Andrew',
    likes:{
        1: 'sibin',
        2:'joseph'
    }
});

});
app.get('/about',(req,res)=>{
    res.render('About.hbs',{
        pageTitle: 'About',
        year: new Date().getFullYear()
    });
});

app.listen(3000);