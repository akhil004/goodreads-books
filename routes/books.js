const { Books } = require("../models/books");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send(Books);
});

router.post("/",async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  
});

router.put("/:id",  async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message)
});





module.exports = router;
