 const express= require('express'),
engines= require('consolidate'),
hbs=require('handlebars');

var app= express();
 fs.req('fs');
app.engine('hbs',engines.handlebars);

app.set('views','./views');
app.set('view engine','hbs');
app.use(express.static('public'));

app.listen(1234);



var visitas= "",
Inicio=0;
var holi;
fs.readFile('visitas.txt', function read(err,data){

    if (err){
       throw err;
    }
    holi=data;
});

app.get('/',(req,res)=>{


res.render("Inicio");

});


app.get('/Uno',(req,res)=>{


    res.render("Uno");
    
    });


 app.get('/Dos',(req,res)=>{


        res.render("Dos");
        
        });    

