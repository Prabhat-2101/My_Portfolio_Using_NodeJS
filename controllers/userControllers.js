const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public'))) 
const data = require('../public/data/jsondata.js');

const fetchHomeData = (req,res)=>{
    res.json({
        'project':data.projects.slice(0,3),
        'coding':data.codingSkills.slice(0,3),
        'tech':data.techSkills.slice(0,3),
    });
}

const fetchAllProjects = (req,res)=>{
    res.json(data.projects);
}

const fetchAllSkills = (req,res)=>{
    res.json({"tech":data.techSkills,"coding":data.codingSkills});
}

const fetchContactDetails = (req,res)=>{
    res.json(data.contact);
}

module.exports = {fetchHomeData,fetchAllProjects,fetchAllSkills,fetchContactDetails}