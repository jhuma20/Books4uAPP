import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'
function Course() {
  return (
	<>
	   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
         <div className='mt-28 items-center justify-center text-center'>
			<h1 className='text-2xl md:text-4xl font-serif font-semibold'> Welcome to Your Learning
				 <span className='text-purple-800'> Adventure! </span>
				  </h1>
			<p className='mt-4 '>Embark on a journey of growth and discovery. Our courses are designed to inspire, challenge, and empower you. Dive in and turn your aspirations into achievements—let’s start this exciting journey together!</p>
		    <Link to="/">
			<button className='bg-purple-700 px-4 py-2 rounded-md hover:bg-purple-800 duration-300 transition-all mt-6'>Back</button>
			</Link>
		 </div>
		   <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
			  {
				list.map((item)=>(
					<Cards key={item.id} item={item} />
				))
			  }
		   </div>
	   </div>
	</>
  )
}

export default Course
