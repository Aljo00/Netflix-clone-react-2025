import React from 'react'

const MainButton = ({ name }) => {
  return (
    <>
         <button className='bg-white text-black font-medium px-3 py-[3px] rounded-full'>{name}</button>
    </>
  )
}

export default MainButton