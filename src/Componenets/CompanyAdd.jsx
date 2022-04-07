import React, { useState } from 'react'
import axios from 'axios';

function CompayAdd() {

    const [form, setForm] = useState({})
    const inputChange = (e) => {
        const { name, value} = e.target;
        setForm({
            ...form,
            [name] : value
        })
        console.log(form)
    }
    

    const post = () => {
        axios.post("/api/post", form)
        .then( (res)=>{
            console.log(res.data)
        })
        .catch( (res)=>{
            console.log(res.data)
        })
    }

    return(
        <div>
            
            <form className=" mx-48 text-left">
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="companyName" onChange={inputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer" placeholder=" " required=""/>
                    <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-400  peer-focus:dark:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">이름</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="toDo" id="toDo" onChange={inputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer" placeholder=" " required=""/>
                    <label htmlFor="toDo" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-400 peer-focus:dark:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">할일</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="companyAddress" id="companyAddress" onChange={inputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer" placeholder=" " required=""/>
                    <label htmlFor="companyAddress" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-400 peer-focus:dark:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">위치</label>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="workTime" id="workTime" onChange={inputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer" placeholder=" " required=""/>
                        <label htmlFor="workTime" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-400 peer-focus:dark:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">시간</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="pay" id="pay" onChange={inputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer" placeholder=" " required=""/>
                        <label htmlFor="pay" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-400 peer-focus:dark:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">급여</label>
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="companyPhone" id="companyPhone" onChange={inputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer" placeholder=" " required=""/>
                        <label htmlFor="companyPhone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-400 peer-focus:dark:text-orange-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">연락처</label>
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="companyIntro" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Large input</label>
                    <input type="text" id="companyIntro" name="companyIntro" onChange={inputChange}  className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
            </form>

            <button type="submit" onClick={post} className="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Submit</button>

        </div>
    )
}

export default CompayAdd;