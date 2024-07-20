import { useEffect, useState, MouseEvent } from 'react'

function Third ()  {
    const [modalFlag, setModalFlag] = useState<boolean>(false);
    const [backgroundClickFlag, setBackGroundClickFlag] = useState<boolean>(true);

    useEffect(() => {
        const escKeyModalClose = (e: any) => {
            if (e.key === 'Escape') {
                setModalFlag(false);
            }
        }; // esc key를 눌렀을 때 Modal 창 close
        window.addEventListener('keydown', escKeyModalClose); 

        //스크롤 제어
        if (modalFlag) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('keydown', escKeyModalClose);
            document.body.style.overflow = 'unset';
        };
    }, [modalFlag]);

    // modal 창 외부 클릭 시 제거
    const handleBackgroundClick = (event: MouseEvent<HTMLDivElement>) => {
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
                        <div className='btn-container'>
                            <button onClick={() => setModalFlag(!modalFlag)} className="close-btn">Close</button>
                            <button onClick={handleSaveButton} className="save-btn">Save changes</button>

                        </div>
                    </div>
                </div>
                : null}

        </div>

    )
}

export default Third