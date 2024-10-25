const express = require('express')
const app = express();
const dotenv = require('dotenv')
app.use(express.static('./public'))
dotenv.config()
const PORT = process.env._PORT;
const {fetchHomeData,fetchAllProjects,fetchAllSkills,fetchContactDetails} = require('./controllers/userControllers');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
app.get('/',fetchHomeData);

app.get('/about',fetchAllSkills);

app.get('/projects',fetchAllProjects)

app.get('/contact',fetchContactDetails);

app.get('/:routename',(req,res)=>{
    res.send(`Path ${req.params.routename} not found`);
})

app.listen(PORT, () => {
    console.log(`Server is Running on PORT No.  ${PORT}.`)
})