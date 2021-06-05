const express=require('express')
const app =express();

//Path for setting views directory
const path=require('path')

//UUID

const {v4:uuidv4} =require('uuid')

//method-override for update and delete

const methodoverride=require('method-override')
app.use(methodoverride('_method'))

//req body parsing middleware
app.use(express.urlencoded({extended:true}))
//Set ejs and create a views directory
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');

// Pretend like DATABASE data 

const tweets=[
    {  
         id:uuidv4(),
        username:"Divya",
        tweet   :"Amazing photography"
    },
       {
             id:uuidv4(),
        username:"Teddy",
        tweet   :"Most beautiful places to visit"
    },
      {
            id:uuidv4(),
        username:"Mathew",
        tweet   :"Sunrise and sunsets are amazing"
    },
      {
            id:uuidv4(),
        username:"Deepthi",
        tweet   :"Indeed beautiful"
    },
      {
            id:uuidv4(),
        username:"Ehaan",
        tweet   :"Amused...Waterfall views "
    },
  {
        id:uuidv4(),
        username:"Kelvin",
        tweet   :"Jaw drawing Scenary "
    },

]
//Base route==>READ
app.get('/tweets',(req,res)=>{ 
   res.render('Tweets/basic',{tweets})
})
//---------------------------------------------------
//CREATE
app.get('/tweets/create',(req,res)=>{
    res.render('Tweets/create')
})
app.post('/tweets',(req,res)=>{
    const {username,tweet}=req.body
    tweets.push({username,tweet,id:uuidv4()})
    //Redirect to basic route once the tweet is created
    //redirect status code:302
    res.redirect('/tweets')
})

//Show details about particular tweet 
//Basically how to select one particular tweet using id
app.get('/tweets/:id',(req,res)=>{
  const{id}=  req.params;
  const tweet=tweets.find(t=>t.id ===id)
  res.render('Tweets/show',{tweet})
})
//Form interface to Update

app.get('/tweets/:id/edit',(req,res)=>{
  const{id}=  req.params;
  const tweet=tweets.find(t=>t.id ===id)
  res.render('Tweets/edit',{tweet})
})

//Update one particular tweet like if i wanna update /edit my tweet
app.patch('/tweets/:id',(req,res)=>{
  const{id}=  req.params;
  const foundtweet=tweets.find(t=>t.id ===id)
 const newTweet= req.body.tweet
 foundtweet.tweet=newTweet
  res.redirect('/tweets')
})



app.listen(8000,()=>{
   console.log("listening on the Port 8000") 
})
