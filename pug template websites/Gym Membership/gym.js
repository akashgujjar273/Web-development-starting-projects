// express module ko import krlo
const express= require("express")
//express ki app bna lo harry k tut mvariable app h 
const akash=express();
const port=80
const fs = require("fs");
const path = require("path");


//################ EXPRESS K CODE
// pehle vala /static url h dusre vala folder h static
akash.use('/static',express.static('static'))
// data jo form m fill hua h use lene k liye code
//ye ek middleware h y madat krta h form k data ko express tuk lane m
akash.use(express.urlencoded())


//################ PUG K CODE
// Set the template engine as pug
akash.set('view engine', 'pug')//view engine pug set ho gya h ab .pug file bna skte h

// Set the views directory
akash.set('views', path.join(__dirname))

 
// ENDPOINTS
// html ko use krne k liye pug as a html serve krne k liye
akash.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'gym website', "content": con}
    // send normal use hota h render template engine m
    // params ko bhj rhe h index.pug m
    res.status(200).render('index.pug', params);
})

akash.post('/', (req, res)=>{
    console.log(req.body)
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    
    // req.body yani form ki info outputwrite variable m dalna
    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);

 

})


// START THE SERVER
akash.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});