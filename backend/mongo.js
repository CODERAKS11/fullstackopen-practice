const mongoose = require('mongoose')

// if (process.argv.length<3) {
//   console.log('give password as argument')
//   process.exit(1)
// }


const password = "MiSRM3IhaVY1gv73"

const url =
  `mongodb+srv://amarjeetakskumar:MiSRM3IhaVY1gv73@notes-fullstackopen.qqukv.mongodb.net/?retryWrites=true&w=majority&appName=notes-fullStackOpen`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'JS is easy',
  important: false,
})

// note.save().then(result => {
//   console.log('note saved!')
  
// })

Note.find({important: true}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })