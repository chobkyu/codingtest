import { useEffect, useState,MouseEvent  } from 'react'

export const Third = () => {
    const [modalFlag, setModalFlag] = useState<boolean>(false);
    const [backgroundClickFlag, setBackGroundClickFlag] = useState<boolean>(true);
  
    useEffect(() => {
      const escKeyModalClose = (e:any) => {
        if (e.key === 'Escape') {
          setModalFlag(false); 
        } 
      }; // esc key를 눌렀을 때 Modal 창 close
      window.addEventListener('keydown', escKeyModalClose); // 위에 만들어 놓은 escKeyModalClose를 keydown했을 때 이벤트로 등록한다. 즉, esc를 눌렀을 때 modal창 종료
      return () => window.removeEventListener('keydown', escKeyModalClose); // 위의 이벤트를 제거
    }, [modalFlag]);
  
  
    const handleBackgroundClick = (event:MouseEvent<HTMLDivElement>) => {
      if ((event.target as HTMLDivElement).className === 'modal' && backgroundClickFlag) {
        setModalFlag(false);
      }
    };
  
    const handleSaveButton = () => {
      setBackGroundClickFlag(!backgroundClickFlag)
      setModalFlag(!modalFlag);
    }
  
    return (
        <div className='container'>
            <h3>세번째 문제</h3>
            <button type="button" onClick={() => setModalFlag(!modalFlag)} className="btn btn-primary">
                Launch demo modal
            </button>
            <input type='checkbox' id='check' checked={backgroundClickFlag} onClick={() => setBackGroundClickFlag(!backgroundClickFlag)}></input>
            <label >배경 클릭 시 모달 창 닫히게 </label>
            {modalFlag ?
                <div className="modal" onClick={handleBackgroundClick} >
                    <div className="modal-content">
                        <span className="close" onClick={() => setModalFlag(!modalFlag)}>&times;</span>
                        <h2>Modal title</h2>
                        <hr />
                        <p>Woo-hoo, you're reading this text in a modal!</p>
                        <hr />
                        <button onClick={() => setModalFlag(!modalFlag)} className="close-btn">Close</button>
                        <button onClick={handleSaveButton} className="save-btn">Save changes</button>
                    </div>
                </div>
                : null}

        </div>

    )
}