import { useState, useEffect } from 'react'
import axios from 'axios'

function CompanyAdd() { 
    const [arr, setArr] = useState();
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
              일할 시간 : <input name="workTime" onChange={onChange}/>
            </label>
            <label>
              급여 :  <input name="pay" placeholder="급여" onChange={onChange}/>
            </label>
           
            <button onClick={post}>
              등록하기
            </button>
        </form>
        </div>
    )
}

export default CompanyAdd;