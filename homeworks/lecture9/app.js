const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models/employee');
const Company = require('./models/company');
const { constrainedMemory } = require('process');

const app = express()
// const port = 3000

app.use(express.json())

mongoose.connect('mongodb+srv://training:shangan@fullstack-training.gw3nkbl.mongodb.net/companyDB?retryWrites=true&w=majority&appName=Fullstack-Training', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.log('Error connecting to MongoDB Atlas:', err);
});

app.post('/company', async (req, res) => {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
});

app.get('/company', async (req, res) => {
    const companies = await Company.find();
    res.json(companies);
});

app.get('/company/:id', async (req, res) => {
    const company = await Company.findById(req.params.id);
    res.json(company);
});

app.put('/company/:id', async (req, res) => {
    const compant = await Company.findByIdAndUpdate(req.params.id, req.body, {new: true});
})

app.delete('/company/:id', async (req, res) => {
    await Company.findByIdAndDelete(req.params.id);
    res.json({message: 'Company deleted'});
    res.sendStatus(204);
})

app.get('/company/:id/employees', async (req, res) => {
    const employees = await Employee.find({company: req.params.id});
    res.json(employees);
});

app.post('/emplyees', async (req,res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(202).json(employee);
});

app.get('/employees', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

app.get('/employees/:id', async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
});

app.put('/employees/:id', async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true});
});

app.delete('/employees/:id', async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({message: 'Employee deleted'});
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

    
