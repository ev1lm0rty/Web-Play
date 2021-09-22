const express = require('express');
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000 ; 

// Set a static folder
app.use(express.static(path.join(__dirname , "public")));

const members = {"a" : "b", "c" : "d"}
app.get('/api/members' , (req , res) => {
  res.json(members);
}
);

// Start server
app.listen(PORT , () => {
  console.log("Server Started");
  }
);
