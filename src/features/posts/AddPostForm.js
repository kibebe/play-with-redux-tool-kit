import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [formData, setFormData] = useState({
    postTitle: '',
    postContent: '',
    userId: '',
  })

  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const handleChange = (e) =>
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }))

  const addPost = () => {
    const { postTitle, postContent, userId } = formData
    if (postTitle && postContent && userId) {
      dispatch(postAdded(postTitle, postContent, userId))
    }
    setFormData({
      postTitle: '',
      postContent: '',
      userId: '',
    })
  }

  const canSave = formData.postTitle && formData.postContent && formData.userId

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={formData.postTitle}
          onChange={handleChange}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
        >
          <option value=""></option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={formData.postContent}
          onChange={handleChange}
        />
        <button type="button" onClick={addPost} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}
