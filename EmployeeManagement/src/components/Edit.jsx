import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Edit() {
    return (
        <div>
            <div className='container d-flex justify-content-center align-items-center vh-100'>
                <div className='w-100'>
                    <FloatingLabel
                        controlId="floatingName"
                        label="Name"
                        className="mb-3"

                    >
                        <Form.Control type="text" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingDesignation" label="Designation" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingEmail" label="Email" className='mb-3'>
                        <Form.Control type="email" placeholder="Password" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingSalery" label="salery" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" />
                    </FloatingLabel>
                    <div className='d-flex justify-content-center align-items-center mt-2'>
                        <button className='btn btn-warning' > Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit