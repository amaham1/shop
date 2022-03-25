import { useState } from 'react'

function CompanyAdd() { 
    const [arr, setArr] = useState();
    const [form, setForm] = useState();
    const easy = ({ target: { value } }) => setForm(value);
    return (
        <div>
            <form className="col" onSubmit={easy}>
        <input name="email" />
        <input
          value="password"
          name="password"
          onChange="password"
        />
        <button type="submit" >
          SUBMIT
        </button>
      </form>
        </div>
    )
}

export default CompanyAdd;