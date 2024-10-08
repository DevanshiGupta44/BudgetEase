import React from 'react';
import { useAuth } from '../../context/AuthContext' 


const Header = () => {
  const auth = useAuth(); 
  const handleLogout = async() => {
    auth.logout();
  }

  return (
    <div className='h-14 w-full flex justify-between py-3 px-7'>
        <div>
            <h1 className='text-black font-semibold text-3xl tracking-wider '>BudgetEase</h1>
      </div>
      {auth.islogin && auth.isUser && (
        <button className='px-5 h-10 py-1.5 text-base rounded bg-black text-white font-medium' onClick={handleLogout}>Logout</button>
      )}
    </div>
  )
}

export default Header
