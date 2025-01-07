import React from 'react'
import Freebook from '../components/Freebook'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
function Home() {
  return (
	<>
	   <div>
		   <Navbar/>
		   <Banner/>
		   <Freebook/>
		   <Footer/>
	   </div>
	</>
  )
}

export default Home
