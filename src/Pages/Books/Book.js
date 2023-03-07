import React from 'react'

const Posts = ({posts,loading}) => {
    if (loading){
        return<h1>loading...</h1>
    }
  return (
    <div>
        {posts.map(post=>(
            <div key={post.id}>
                <div>
                    <h3>{post.id}</h3>
                </div>
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Posts