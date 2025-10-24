import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-blue-500 px-6 py-3 rounded-full '>
      {props.text}
    </div>
  )
}

export default Button
