const express = require('express');

const app = express();

app.use(express.json())

const notes=[]

app.post("/notes", (req, res)=>{

  notes.push(req.body)

  res.status(201).json({
    message:"Note Created Successfully"
  })
})

app.get("/notes", (req, res)=>{
  res.status(200).json({
    notes:notes
  })
})

app.delete("/notes/:idx", (req, res)=>{
  const idx = req.params.idx
  delete notes[idx]
  res.status(200).json({
    message:"Note Deleted Successfully"
  })
})

app.patch("/notes/:idx", (req, res)=>{
  const idx = req.params.idx

  notes[idx].title = req.body.title
  notes[idx].description = req.body.description

  res.status(200).json({
    message:"Note Updated Successfully"
  })
})

modile.exports = app