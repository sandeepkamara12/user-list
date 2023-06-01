import React from 'react'
import Post from '../Posts/Post'

const UserPosts = ({userPosts}) => {
    // console.log(Array.isArray(userPosts), 'user rposts')
    return (
      <>
            {
                userPosts.map((post, index) => {
                    // console.log(post, 'postdata')
                    return <Post id={post.id} title={post.title} body={post.body} userId={post.user_id} key={ post.id} />
                })
            }
      </>
  )
}

export default UserPosts