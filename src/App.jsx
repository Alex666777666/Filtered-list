import React from 'react'
import UsersList from './UsersList.jsx'

const users = [
  { id: 1, name: 'Ann', age: 45 },
  { id: 2, name: 'Tad', age: 18 },
  { id: 3, name: 'Tom', age: 21 },
]

const App = () => <UsersList users={users} />

export default App
