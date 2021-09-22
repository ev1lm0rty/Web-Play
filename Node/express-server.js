const express = require('express');
const app = express();

// Home Page
app.get('/', (req , res)=>{
  res.send("Home Page")
})

// About page 
app.get('/about' , (req , res)=>{
  res.send("About Page")
}
)

// 404 page
app.all('*' , (req , res) => {
  res.status(404).send("404 page not found")
}
)

app.listen(5000 , ()=> {
  console.log("server started")
})
