import { useState } from 'react'
import './App.css'
import { Hello } from './Hello'

function App() {
  const [name, setName] = useState<string>('Gérald')
  const [newName, setNewName] = useState<string>('')

  const onValidate = () => {
    setName(newName)
    setNewName('')
  }

  return (
    <>
      <Hello name={name}>
       Nice to meet you!
      </Hello>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={onValidate}>Validate</button>
      <h3>This is a subtitle</h3>
    </>
  )
}

export default App
