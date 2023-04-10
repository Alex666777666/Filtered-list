import React, { useState } from 'react'
import UsersList from './UsersList.jsx'
import Filter from './Filter.jsx'

const App = () => {
  const [users, setUsers] = useState([
    {
      name: 'Tad',
      age: 18,
    },
    {
      name: 'Anna',
      age: 45,
    },
    {
      name: 'Tom',
      age: 16,
    },
  ])

  const handleFilter = event => {
    const inputValue = event.target.value.toLowerCase()
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(inputValue)
    )
    setUsers(filteredUsers)
  }

  return (
    <div>
      <Filter handleFilter={handleFilter} count={users.length} />
      <UsersList users={users} />
    </div>
  )
}

export default App
