import React, { useState, useEffect } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import DaumPostcode from 'react-daum-postcode';

function CompanyAdd() { 
    
    const [form, setForm] = useState( {
      companyName : "", 
      companyAddress : "",
      toDo : "", 
      workTime : "", 
      pay : "",
      companyIntro : ""
    });

    const [address, setAddress] = useState('');
   
    const inputChange = (e) => { 
      const { name, value }  = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    };

    const post = () => {
      axios.post("/post", form)
      .then( (res)=>{
        console.log(res)
        alert(res.data);
      })
      .catch( (res)=> {
          alert(res);
      })
    }

    const [viewModal, setViewModal] = useState(false);
    const modal = (isOpen) => {
      isOpen ==="open" ?  setViewModal(true) :  setViewModal(false);
    }
    
    const DaumPost = () => {
      const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        modal("close")
        setAddress(fullAddress)
        setForm({
          ...form,
          companyAddress: fullAddress
        })
      }
      return (
        <div>
          <DaumPostcode
            onComplete={handleComplete}
          />
        </div>
      );
    }

    return (
        <div>
          {/* 주소검색 */
              viewModal === true ?
              <Modal.Dialog style={ {position : "absolute",  marginLeft : 50}} >
                <DaumPost/>
                <Modal.Footer>
                  <Button variant="secondary" onClick={ ()=>modal("close")}>닫기</Button>
                </Modal.Footer>
              </Modal.Dialog>
              :
              null
          }
          <Form style={ {margin : "10px"}}>
            {/* 농장 이름,농장 위치 */}
            <Form.Group className="col-md-4">
              <Form.Label>농장 이름</Form.Label>
              <Form.Control type="text" placeholder="농장 이름" name="companyName" onChange={inputChange}/>
              <Form.Label>농장 위치</Form.Label>
              <Form.Control type="text" defaultValue={address} placeholder="농장 위치"/>
              <Button variant="warning" onClick={ ()=>modal("open")}>주소 검색</Button>
            </Form.Group>
            {/* 할 일, 일할 시간, 급여 */}
            <Form.Group className="col-md-4">
              <Form.Label>할 일</Form.Label>
              <Form.Control type="text" placeholder="할 일" name="toDo" onChange={inputChange} />
              <Form.Label>일할 시간</Form.Label>
              <Form.Control type="text" placeholder="일할 시간" name="workTime" onChange={inputChange} />
              <Form.Label>급여</Form.Label>
              <Form.Control type="text" placeholder="급여" name="pay" onChange={inputChange} />
            </Form.Group>
            {/* 농장 소개 */}
            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
              <Form.Label>농장 소개</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="농장 소개" name="companyIntro" onChange={inputChange} />
            </Form.Group>
            {/* 등록버튼 */}
            <Button variant="primary" onClick={post}>
              등록하기
            </Button>
          </Form>
        </div>
    )
}

export default CompanyAdd;