import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [modalFlag, setModalFlag] = useState<boolean>(false);
  return (
    <>
      <button type="button" onClick={() => setModalFlag(!modalFlag)} className="btn btn-primary">
        Launch demo modal
      </button>

      {modalFlag ?
      <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setModalFlag(!modalFlag)}>&times;</span>
        <h2>Modal title</h2>
        <p>Woo-hoo, you're reading this text in a modal!</p>
        <button onClick={() => setModalFlag(!modalFlag)} className="close-btn">Close</button>
        <button onClick={() => setModalFlag(!modalFlag)} className="save-btn">Save changes</button>
      </div>
    </div>
      :null}
    </>
  )
}

export default App
