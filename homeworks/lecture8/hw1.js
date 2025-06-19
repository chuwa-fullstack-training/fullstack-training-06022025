/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/api/parsetime", (req, res) => {
  const isoTime = req.query.iso;
  const date = isoTime ? new Date(isoTime) : new Date();
  res.json({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  });
});

router.get("/api/unixtime", (req, res) => {
  const isoTime = req.query.iso;
  const date = isoTime ? new Date(isoTime) : new Date();

  res.json({
    unixtime: date.getTime(),
  });
});

router.get("/:dir/:ext", (req, res) => {
  const dir = req.params.dir === "current" ? "." : req.params.dir;
  const ext = "." + req.params.ext;
  fs.readdir(dir, (error, files) => {
    if (error) {
      return res.status(303).send(error);
    } else {
      const allFiles = files.filter((item) => path.extname(item) === ext);
      res.send(allFiles.join("\n"));
    }
  });
});

module.exports = router;
