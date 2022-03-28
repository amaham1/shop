import React, { useState } from 'react'
import axios from 'axios'

function GoodsDetail() {
    const [num, setNumber] = useState('hi');
    const [arr, setArr] = useState([]);
   
    return (
        <div>
            {num}
            <input onChange={ (e)=> { setNumber(e.target.value)}}/>
            <button onClick={ () => {Get(setArr)}}>가져오기</button>
            {
                arr.map ( (e,i)=>{
                    return (
                        <h4 key={i}> {e.Name} </h4>
                    )
                })
            }
        </div>
    )
}

function Get(setNumber) {
    axios.get("/get")
    .then( (res)=>{
        console.log(res)
        console.log(res.data)
        let arr = res.data;
        console.log("arr", arr)
        setNumber(arr);
    })
    .catch( (res)=>{
        console.log(res)
    })
}
export default GoodsDetail;