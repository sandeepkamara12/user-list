import React from 'react'
import { Card } from 'react-bootstrap';
import PostComments from './PostComments';

const Post = ({ id, title, body, user_id }) => {
    return (
        <>
        <Card className="mb-3" post-id={id}>
        <Card.Body>
        <Card.Title> { title}</Card.Title>
        <Card.Text>
        {body}
        </Card.Text>
        <Card.Text>
        {user_id}
        </Card.Text>
        </Card.Body>
            </Card>    
            <PostComments postId={id} />
        </>
        )
    }
    
    export default Post