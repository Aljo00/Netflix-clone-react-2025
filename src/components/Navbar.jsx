import React from 'react'
import MainButton from './Buttons/MainButton'
import LanguageButton from './Buttons/LanguageButton'

const Navbar = () => {
  return (
    <header className='py-5 mx-[18px] lg:mx-[40px] mr-[36px] flex justify-between z-20 relative'>
        <img className='w-[164px] h-[40px] pl-[16px]' src="/Netflix-logo.png" alt="" />
        <div className='felx'>
        
       <LanguageButton />  
       <MainButton name={"Sign In"} />
       
        </div>
    </header>
  )
}

export default Navbar