const express=require('express')
const app =express();

//Path for setting views directory
const path=require('path')

//req body parsing middleware
app.use(express.urlencoded({extended:true}))
//Set ejs and create a views directory
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');

// Pretend like DATABASE data 

const tweets=[
    {
        username:"Divya",
        tweet   :"Amazing photography"
    },
       {
        username:"Teddy",
        tweet   :"Most beautiful places to visit"
    },
      {
        username:"Mathew",
        tweet   :"Sunrise and sunsets are amazing"
    },
      {
        username:"Deepthi",
        tweet   :"Indeed beautiful"
    },
      {
        username:"Ehaan",
        tweet   :"Amused...Waterfall views "
    },
  {
        username:"Kelvin",
        tweet   :"Jaw drawing Scenary "
    },

]
//Base route
app.get('/tweets',(req,res)=>{
    
   res.render('Tweets/basic',{tweets})
})
app.listen(8000,()=>{
   console.log("listening on the Port 8000") 
})