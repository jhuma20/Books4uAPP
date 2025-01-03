import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

function Contacts() {
  return (
	<>
	   <div>
	     <Navbar/>
		   <div className='h-screen flex justify-center items-center'>
		     <Contact/>
		 </div>
	  </div>
	</>
  )
}

export default Contacts
