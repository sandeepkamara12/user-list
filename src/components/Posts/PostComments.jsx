import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getPostComments } from '../../redux/slices/postSlice';

const PostComments = ({ postId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {postComment} = useSelector(state => state.post);
    
    useEffect(() => {
        try {
            console.log('hello dear')
            dispatch(getPostComments(postId)) 
        }
        catch (error) {
            console.log(error);
        }
    },[postId, navigate])
    
    return (
        <>
        {/* {console.log(postComment, 'postComments')} */}
        {/* <div>PostComments</div> */}
        {/* {postId} */}
        {/* {postComment} */}
        {postComment.length > 0 && postComment.map((comment, index) => {
            return comment.name + '<br/>'
        })} 
        </>
        )
    }
    
    export default PostComments