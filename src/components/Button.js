import React from 'react'

const Button = ({name}) => {
  return (
      <div>
          <button className='bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button