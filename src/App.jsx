import { useState } from 'react'

function App({notes}) {
  const [Notes,setNotes] = useState(notes)
  // console.log(notes)
  const addNote=(e)=>{
    e.preventDefault()
    console.log('button clicked', event.target)

  }
  const newNote = (e) => {
    setNotes(e.target.value)
  }
  return (
    <>
    <h1>Notes</h1>
    <ul>
      {
        Notes.map((Note)=>{
          // console.log(note)
          return <li key={Note.id}>{Note.content}</li>
        })
      }
      <form>
        <input />
        <button value>Add Note</button>
      </form>
    </ul>  
    </>
  )
}

export default App
