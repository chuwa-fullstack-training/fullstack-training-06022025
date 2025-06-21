/**
 * HTTP Status Code:
 * 200 OK
 * 201 Created
 * 202 Accepted
 * 400 Bad request
 * 404 Not found
 * 500 Internal Server Error
 */

const express = require("express");
const router = express.Router();
const { Company, Employee } = require("../schema");

// Create a new company
router.post("/api/create-company", async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).send(company);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get a company by id
router.get("/api/get-company/:id", async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
  } catch (error) {
    res.status(500).send(error);
  }
});
