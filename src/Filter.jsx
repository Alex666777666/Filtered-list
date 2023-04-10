import React from 'react'

const Filter = ({ handleFilter, count }) => {
  return (
    <div className='filter'>
      <span className='filter__count'>{count}</span>
      <input type='text' className='filter__input' onChange={handleFilter} />
    </div>
  )
}

export default Filter
