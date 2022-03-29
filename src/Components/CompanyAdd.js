import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

function CompanyAdd() { 

  const [cityArr, setCityArr] = useState([]);
    useEffect(() => {
      const fetchUsers = async () => {
        
          const response = await axios.get( "/comCode/city");
          setCityArr(response.data);
        
      };
  
      fetchUsers();
    }, []);

    
    const [form, setForm] = useState( {
      companyName : "", 
      toDo : "", 
      workTime : "", 
      pay : ""
    });
   
    const onChange = (e) => { 
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


    return (
        <div>
          <form className="col">
            <label>
              농장 이름 : <input name="companyName" onChange={onChange}/>
            </label>
            <label>
              할 일 : <input name="toDo" onChange={onChange}/>
            </label>
            <label>
              일할 시간 : <input name="workTime" placeholder="일할 시간" onChange={onChange}/>
            </label>
            <label>
              급여 :  <input name="pay" placeholder="급여" onChange={onChange}/>
            </label>
           
            <button onClick={post}>
              등록하기
            </button>
          </form>
          <Form>
            <Form.Group className="col-md-auto" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div>
              <Form.Select name="selectCity" size="lg">
                <option>시 선택</option>
                {
                  cityArr.map( (e,i)=>{
                    return(
                      e.code_type === 'city' ? 
                      <option value={i}>
                        {e.code_name}
                      </option>
                      : e.code_name
                    )
                  })
                }
              </Form.Select>
              <br />
            </div>

            
            <Button variant="primary">
              Submit
            </Button>
          </Form>
        </div>
    )
}

export default CompanyAdd;