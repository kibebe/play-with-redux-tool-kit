import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postUpdated } from './postsSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params
  const post = useSelector(({ posts }) =>
    posts.find((post) => post.id === postId)
  )
  const { title, content } = post
  const [formData, setFormData] = useState({
    postTitle: title,
    postContent: content,
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = (e) =>
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }))

  const updatePost = () => {
    const { postTitle, postContent } = formData
    if (postTitle && postContent) {
      dispatch(
        postUpdated({
          id: postId,
          title: postTitle,
          content: postContent,
        })
      )
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={formData.postTitle}
          onChange={handleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={formData.postContent}
          onChange={handleChange}
        />
        <button type="button" onClick={updatePost}>
          Edit Post
        </button>
      </form>
    </section>
  )
}
