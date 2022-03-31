import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CompayList() {
    const [comList, setComList] = useState([]);

    useEffect( ()=>{
        axios.get("/get")
        .then( (res)=>{
            console.log(res)
            setComList(res.data)
        })
        .catch()
    },[])

    return (
        <div>
            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                    <th></th>
                    <th>농장 이름</th>
                    <th>농장 위치</th>
                    <th>할 일</th>
                    <th>일할 시간</th>
                    <th>급여</th>
                    <th>농장 소개</th>
                    </tr>
                </thead>
                <tbody>
                    <Tbody comList={comList}/>
                </tbody>
               
            </Table>
        </div>
    )
}

function Tbody(params) {
    const history = useNavigate();
    return(
        
        params.comList.map( (e,i)=>{
            return(
                <tr key={i} onClick={ ()=>{ history(`/detail/${e.companyNameNum}`) }}>
                    <td>{e.companyNameNum}</td>
                    <td>{e.companyName}</td>
                    <td>{e.companyAddress}</td>
                    <td>{e.toDo}</td>
                    <td>{e.workTime}</td>
                    <td>{e.pay}</td>
                    <td>{e.companyIntro}</td>
                </tr>
            )
        })
        
    )
}

export default CompayList;