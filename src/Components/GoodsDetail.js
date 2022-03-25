import React, { useState } from 'react'
import axios from 'axios'

function GoodsDetail() {
    const [num, setNumber] = useState('hi');
    const [arr, setArr] = useState([]);
   
    return (
        <div>
            {num}
            <input onChange={ (e)=> { setNumber(e.target.value)}}/>
            <button onClick={ () => {Post(num)}}>보내기</button>
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

function Post(msg) {
    console.log(msg);
    axios.post("/post",{ data : {
        companyName : "귤농장", 
        toDo : "귤따기", 
        workTime : "8시간", 
        pay : "1000"
    }
       
    })
    .then( (res)=>{
        alert(res.data);
    })
    .catch( (res)=> {
        alert("실패욤");
    })
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