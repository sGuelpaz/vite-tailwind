import React from 'react'

const Button = (props) => {
  return (
    <button className='px-6 py-1 transition duration-300 ease-in-out bg-black text-white hover:-translate-y-1 hover:scale-105 shadow-lg shadow-red-700  hover:shadow-red-400 hover:text-red-200  font-medium rounded-lg text-lg  text-center ml-2 md:ml-8'>
        {props.children}
    </button>
  )
}

export default Button