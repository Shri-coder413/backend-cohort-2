const express = require('express')
const app = express()

const notes = [
  // {
  //   title:"title_test 1",
  //   description:"description_1"
  // }
]

app.use(express.json())

//accepting the requested notes from Front-End (User)
app.post("/notes", (req, res)=>{
  notes.push(req.body)

  console.log("notes added successfully..");

  res.send(notes)
})

//displays the notes on Front-End (user screen)
app.get("/notes", (req, res)=>{
  console.log("notes are showing succussfully..");

  res.send(notes)
})

//Deleteing the note by passing dynamic index (user choice)
app.delete("/notes/:idx", (req, res)=>{

  const idx = req.params.idx

  delete notes[idx]

  res.send(`note-${idx} is deleted ${notes[idx]}`)
})

//without colon(:)idx params will not works
app.patch("/notes/:idx", (req, res)=>{
  const idx = req.params.idx
  notes[idx].title = req.body.title
  notes[idx].description = req.body.description

  res.send("Note updated successfully")
})

module.exports = app