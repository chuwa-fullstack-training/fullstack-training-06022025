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
router.post("/company", async (req, res) => {
  try {
    const company = new Company({
      ...req.body,
      _employees: [],
    });
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all companies
router.get("/company", async (req, res) => {
  try {
    const companies = await Company.find().select("-__v");
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get a company by id
router.get("/company/:id", async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).select("-__v");
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Update a company by id
router.patch("/company/:id", async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select("-__v");

    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a company by id
router.delete("/company/:id", async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);

    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }

    // Delete all employees of this company
    await Employee.deleteMany({ _company: company._id });

    res.status(200).json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
