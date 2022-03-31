import React, { useState, useEffect } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import DaumPostcode from 'react-daum-postcode';

function CompanyAdd() { 

  const [cityArr, setCityArr] = useState([]);
    useEffect(() => {
      const city = async () => {
          const response = await axios.get( "/comCode/city");
          setCityArr(response.data);
      };
      city();
    }, []);

    
    const [form, setForm] = useState( {
      companyName : "", 
      toDo : "", 
      workTime : "", 
      pay : ""
    });
   
    const inputChange = (e) => { 
      const { name, value }  = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    };
    console.log(form)
  
    const [selectCityValue, setSelectCityValue] = useState('');
    const selectCity = (e) => { setSelectCityValue(e.target.value) }

    let dongArr = [];
    if (selectCityValue === '제주시') {
      dongArr = cityArr.filter( v => v.code_type === 'dong_j')
    } else if ((selectCityValue === '서귀포시')) {
      dongArr = cityArr.filter( v => v.code_type === 'dong_s')
    } else {
      dongArr = [];
    }


    const [selectDongValue, setSelectDongValue] = useState();
    const selectDong = (e) => {
      setSelectDongValue(e.target.value)
    }

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

    

    return (
        <div>
          {/* <form className="col">
            <label>
              농장 이름 : <input name="companyName" onChange={inputChange}/>
            </label>
            <label>
              할 일 : <input name="toDo" onChange={inputChange}/>
            </label>
            <label>
              일할 시간 : <input name="workTime" placeholder="일할 시간" onChange={inputChange}/>
            </label>
            <label>
              급여 :  <input name="pay" placeholder="급여" />
            </label>
           
            <button onClick={post}>
              등록하기
            </button>
          </form> */}
          <Form  style={ {margin : "10px"}}>
            <Form.Group className="col-md-auto" controlId="formBasicEmail">
              <Form.Label>농장 이름</Form.Label>
              <Form.Control type="text" placeholder="농장 이름" name="companyName" onChange={inputChange}/>
            </Form.Group>

            {/* <div>
              <Form.Label>농장 위치</Form.Label>
              <Form.Select size="lg" name="selectCity" onChange={selectCity} >
                <option>시 선택</option>
                {
                  cityArr.map( (e,i)=>{
                    return(
                      e.code_type === 'city' ? 
                      <option key={i}>
                        {e.code_name}
                      </option>
                      : null
                    )
                  })
                }
              </Form.Select>
              <br />
            </div>

            <div>
              <Form.Select size="md" name="selectCity" onChange={selectDong} >
                <option>읍면동 선택</option>
                {
                  dongArr.map( (e,i)=>{
                    return(
                      <option key={i}>
                        {e.code_name}
                      </option>
                    )
                  })
                }
              </Form.Select>
              <br />
            </div> */}
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>Modal body text goes here.</p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
           <Asd/>
            <Form.Group className="col-md-auto" controlId="formBasicEmail">
              <Form.Label>할 일</Form.Label>
              <Form.Control type="text" placeholder="할 일" name="toDo" onChange={inputChange} />
              <Form.Label>일할 시간</Form.Label>
              <Form.Control type="text" placeholder="일할 시간" name="workTime" onChange={inputChange} />
              <Form.Label>급여</Form.Label>
              <Form.Control type="text" placeholder="급여" name="pay" onChange={inputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>농장 소개</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="농장 소개"/>
            </Form.Group>

            <Button variant="primary" onClick={post}>
              등록하기
            </Button>
          </Form>
        </div>
    )
}
function Asd () {
  const handleComplete = (data) => {
      console.log(data)
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

    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    console.log(extraAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }

  return (
    <div>
      <DaumPostcode
        onComplete={handleComplete}
      />
    </div>
  );
}

export default CompanyAdd;