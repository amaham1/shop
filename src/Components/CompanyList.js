import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function CompayList() {
    const [comList, setComList] = useState([]);

    useEffect( ()=>{
        axios.get("/get")
        .then( (res)=>{
            setComList(res.data)
        })
        .catch()
    },[])

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th></th>
                    <th>업체명</th>
                    <th>할 일</th>
                    <th>일할 시간</th>
                    <th>급여</th>
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
    return(
        
        params.comList.map( (e,i)=>{
            return(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.Name}</td>
                </tr>
            )
        })
        
    )
}

export default CompayList;