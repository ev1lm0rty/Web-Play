const express = require('express')
const app = express()


app.use(express.static('./public'))


// 404 Page
app.all('*' , (req , res) => {
  res.status(404).send("<h1>404, page not found</h1>")
}
)

// Start Server
app.listen(5000 , () => {
  console.log("Server Started")
}
)
