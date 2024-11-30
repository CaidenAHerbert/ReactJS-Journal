import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {

  const [title, setTitle] = useState(''); //state for current title
  const [content, setContent] = useState(''); //state for current content
  const [notes, setNotes] = useState([]); //state for all notes
  
  return (
    <div>

    </div>
  )
}

export default App

