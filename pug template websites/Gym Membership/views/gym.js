// express module ko import krlo
const express= require("express")
//express ki app bna lo harry k tut mvariable app h 
const akash=express();
const port=80
const path = require("path");


//################ EXPRESS K CODE
// pehle vala /static url h dusre vala folder h static
akash.use('/static',express.static('static'))



//################ PUG K CODE
// Set the template engine as pug
akash.set('view engine', 'pug')//view engine pug set ho gya h ab .pug file bna skte h

// Set the views directory
akash.set('views', path.join(__dirname, 'views'))

 
// ENDPOINTS
// html ko use krne k liye pug as a html serve krne k liye
akash.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    // send normal use hota h render template engine m
    // params ko bhj rhe h index.pug m
    res.status(200).render('index2.pug', params);
})

// START THE SERVER
akash.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
