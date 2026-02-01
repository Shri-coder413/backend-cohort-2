const express =  require('express')

const app =  express()

app.get('/',(req, res)=>{
  res.send("Hello World!..")
})

app.get('/about', (req, res) => {
  res.send("This is About Page")
})

app.get('/home', (req, res) => {
  res.send("This is Home Page")
})


app.listen('3000', (req, res)=>{
  console.log("Server is running At localhost:3000");
})