import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [modalFlag, setModalFlag] = useState<boolean>(false);


  useEffect(() => {
    const escKeyModalClose = (e:any) => {
      if (e.key === 'Escape') {
        setModalFlag(false); 
      } 
    }; // esc key를 눌렀을 때 Modal 창 close
    window.addEventListener('keydown', escKeyModalClose); // 위에 만들어 놓은 escKeyModalClose를 keydown했을 때 이벤트로 등록한다. 즉, esc를 눌렀을 때 modal창 종료
    return () => window.removeEventListener('keydown', escKeyModalClose); // 위의 이벤트를 제거
  }, [modalFlag]);


  return (
    <>
      <button type="button" onClick={() => setModalFlag(!modalFlag)} className="btn btn-primary">
        Launch demo modal
      </button>

      {modalFlag ?
        <div className="modal" >
          <div className="modal-content">
            <span className="close" onClick={() => setModalFlag(!modalFlag)}>&times;</span>
            <h2>Modal title</h2>
            <p>Woo-hoo, you're reading this text in a modal!</p>
            <button onClick={() => setModalFlag(!modalFlag)} className="close-btn">Close</button>
            <button onClick={() => setModalFlag(!modalFlag)} className="save-btn">Save changes</button>
          </div>
        </div>
        : null}
    </>
  )
}


export default App
