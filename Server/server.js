const express = require("express");
const mongoose =require ("mongoose");
const userRoutes = require ("./routes/auth-route");
const bodyParser = require("body-parser")


const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));







//database connection 

mongoose.connect('mongodb+srv://ernez:9731323697313236@cluster0.oxqtz.mongodb.net/TmnDatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

  app.get('/',(req,res)=>{
    res.send("test1 ");
})
app.use('/api/auth', userRoutes);



app.listen(3000,console.log("server up to running"));
