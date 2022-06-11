const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');
const {default: mongoose} = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const assignmentMW = function (req,res,next){
    var currentDate = new Date();

      var dateTime =currentDate.getDate() + "/ "
                       + (currentDate.getMonth()+1) + "/ "
                       +currentDate.getFullYear()+ "/ "
                       +currentDate.getHours()+ ": "
                       +currentDate.getMinutes()+ " :"
                       +currentDate.getSeconds();
        
       let ip=req.ip
       let url=req.originalUrl
       console.log(`${dateTime} ${ip} ${url}`)   
       
       next();

  }

  app.use(assignmentMW)


mongoose.connect("mongodb+srv://LalitaMahule:lali123456789@cluster0.ypjvt.mongodb.net/AuthorBook?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
.then( () => console.log("MongoDB is connected"))
.catch ( ( err => console.log(err)))
app.use('/', route);



    


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
