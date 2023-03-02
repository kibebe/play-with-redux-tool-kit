import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Ciira Kibebe' },
  { id: '1', name: 'Joy Njagi' },
  { id: '2', name: 'Taji Ciira' },
]

const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {},
})

export default usersSlice.reducer
