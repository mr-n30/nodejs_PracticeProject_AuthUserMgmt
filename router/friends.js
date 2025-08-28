const express = require('express');

const router = express.Router();

let friends = {
  "johnsmith@gamil.com": { "firstName": "John", "lastName": "Doe", "DOB": "22-12-1990" },
  "annasmith@gamil.com": { "firstName": "Anna", "lastName": "smith", "DOB": "02-07-1983" },
  "peterjones@gamil.com": { "firstName": "Peter", "lastName": "Jones", "DOB": "21-03-1989" }
};


// GET request: Retrieve all friends
router.get("/", (req, res) => {

  // Update the code here

  res.status(200).send(friends)//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email", (req, res) => {
  // Update the code here
  if (typeof friends[req.params.email] === 'undefined') return res.send('Not found')
  return res.send(friends[req.params.email])
});


// POST request: Add a new friend
router.post("/", (req, res) => {
  const { email, firstName, lastName, DOB } = req.body

  if ([email, firstName, lastName, DOB].some(item => typeof item === 'undefined'))
    return res.send('Missing parameters')

  // Add user to object
  friends[email] = { [firstName]: firstName, [lastName]: lastName, [DOB]: DOB }
  return res.send("User created!")
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here

  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports = router;
