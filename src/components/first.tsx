import {  useState } from "react";

export const First = () => {
    const [number, setNumber] = useState<number>(0);
    const [square, setSquare] = useState<string[][]>([]);
    const drawSquare = (num: number) => {
        console.log(number)
        const arr = Array.from(new Array(num), () => new Array(num).fill('O'));


        for (let i = 0; i < num; i++) {
            arr[0][i] = 'X';
            arr[num - 1][i] = 'X';

            arr[i][0] = 'X';
            arr[i][num - 1] = 'X';

            arr[i][i] = 'X';
            arr[num - i - 1][i] = 'X'
        }

        setSquare(arr)
    }

    return (
        <div className="container">
            <h3>첫번째 문제</h3>
            <label>숫자를 입력해주세요</label>
            <div>
                <input type="text" value={number} onChange={(e) => {
                    const value = e.target.value;
                    setNumber(value === '' ? 0 : parseInt(value));
                }} />
                <button onClick={() => drawSquare(number)}>입력</button>
            </div>
            {square.map((row, rid) => (
                <div key={rid}>
                    {row.map((col, cid) => (
                        <span key={cid}>{col}</span>
                    ))}
                </div>
            ))}
        </div>
    )
}