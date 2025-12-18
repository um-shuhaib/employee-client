import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addEmployee } from '../Api/FetchApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Add() {


    const navigate = useNavigate()

    const [employee, setEmployee] = useState({
        name: "", designation: "", email: "", salery: ""
    })

    const dataSubmit = () => {
        const { name, designation, email, salery } = employee
        if (!name || !designation || !email || !salery) {
            toast("invalid credentioal")
        } else {
            addEmployee(employee).then((res) => {
                console.log(res.data);
                toast("data added")
                navigate('/')

            })
        }

    }

    return (
        <div>
            <div className='container d-flex justify-content-center align-items-center vh-100'>
                <div className='w-100'>
                    <FloatingLabel
                        controlId="floatingName"
                        label="Name"
                        className="mb-3"

                    >
                        <Form.Control type="text" placeholder="name@example.com" onChange={(e) => { setEmployee({ ...employee, name: e.target.value }) }} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingDesignation" label="Designation" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" onChange={(e) => { setEmployee({ ...employee, designation: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingEmail" label="Email" className='mb-3'>
                        <Form.Control type="email" placeholder="Password" onChange={(e) => { setEmployee({ ...employee, email: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingSalery" label="salery" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" onChange={(e) => { setEmployee({ ...employee, salery: e.target.value }) }} />
                    </FloatingLabel>
                    <div className='d-flex justify-content-center align-items-center mt-2'>
                        <button className='btn btn-warning' onClick={dataSubmit}> Add</button>
                        {/* <button className='btn btn-warning' onClick={()=>{dataSubmit()}}> Add</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add