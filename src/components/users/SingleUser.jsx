import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { getSingleUser, getUserPosts } from '../../redux/slices/userSlice';
import User from './User';
import { Container, Row, Col } from 'react-bootstrap';
import UserPosts from './UserPosts';
import Loader from '../Loader'

const SingleUser = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {user, isLoading, userPosts} = useSelector(state => state.user);
    
    useEffect(() => {
        try {
            dispatch(getSingleUser(id));
            dispatch(getUserPosts(id));
        }   
        catch(error) {
            console.log(error)
        }
    }, []);
    
    // {console.log(userPosts)}
    return (
        <>
        <Container>
        <Row>
        <Col xs={12}>
        <h1 className="mt-5">User</h1>
        </Col>
        {
            isLoading?
            <Loader />
            :
            <Col xs={12} className='mb-4'>
            <User user={user} />
            </Col>
        }
        <h2>User Posts</h2>
        {
            isLoading?
            <Loader />
            :
            userPosts.length > 0 ? (
                <Col xs={12} className='mb-4'>
                <UserPosts userPosts={userPosts} />
                </Col>
                ) :
                <p>No User Post Found</p>
            }
            </Row>
            </Container>
            </>
            )
        }
        
        export default SingleUser