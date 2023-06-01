import React, { useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { getUser } from '../../redux/slices/userSlice';
import { Container, Row, Col } from 'react-bootstrap';
import User from './User';
import { NavLink } from 'react-router-dom'
import Loader from '../Loader'

const Users = () => {
    const dispatch = useDispatch();
    const {users, errorMessage, isLoading} = useSelector(state => state.user);
    
    useEffect(() => {
        try {
            dispatch(getUser())
        }
        catch (error) {
            console.log(error)
        }
    },[])
    
    
    return (
        <>
        <Container>
        <Row className="align-items-center">
        <Col>
        <h1 className="my-5">Users</h1>
        </Col>
        <Col className='text-end'>
        <NavLink to="/new-user" className="btn btn-primary">Create a new User</NavLink>
        </Col>
        </Row>
        <Row>
        {
            isLoading ? <Loader />
            :
            users.length > 0 && Array.isArray(users) ? users.map((user, index) => {
                return (
                    <Col xs={12} sm={6} md={4} lg={3} className='mb-4' key={user.id}>
                    <NavLink to={`/single-user/${user.id}`} className='d-block h-100 text-decoration-none'>
                    <User user={user}  />
                    </NavLink>
                    </Col>
                    )
                })
                :
                <p>No User Post Found</p>
            }
            {errorMessage !== "" ? <p>{ errorMessage}</p>: users && !Array.isArray(users) && <p>{users}</p>}
            </Row>
            </Container>
            </>
            )
        }
        
        export default Users