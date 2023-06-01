import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { createUser} from '../../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux';

const NewUser = () => {

    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('male');
    const [status, setStatus] = useState('active');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = [{name,email, gender,status}]

        try {
            // console.log('try')
            dispatch(createUser(user))
        }
        catch (error) {
            console.log(error)
        }
    }
    
    return (
        <Container>
        <Row className="align-items-center">
        <Col>
        <h1 className="my-5">Create a new user</h1>
        </Col>
        <Col className='text-end'>
        <NavLink to="/" className="btn btn-primary">Goto User Lists</NavLink>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>        
        <form onSubmit={handleSubmit}>
        <div className='mb-3'>
        <label htmlFor='name' className='d-block mb-2'>Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} className='form-control'/>
        </div>
        <div className='mb-3'>
        <label htmlFor='email' className='d-block mb-2'>Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
        </div>
        <div className='mb-3'>
        <label htmlFor='gender' className='d-block mb-2'>Gender</label>
        <select onChange={(e)=>setGender(e.target.value)} className="form-select">
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
        </div>
        <div className='mb-3'>
        <div className="form-check form-switch p-0">
        <label className="form-check-label">Inactive</label>
        <input onChange={(e) => setStatus(status=>status==='active'?'inactive':'active')} checked={status === 'active'?"checked":""} className="form-check-input float-none mx-2" type="checkbox" role="switch" id="status" />
        <label className="form-check-label">Active</label>
        </div>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        </Col>
        </Row>
        </Container>
        )
    }
    
    export default NewUser