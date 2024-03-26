import React from 'react'
import QuickNote from './QuickNote'

const Heading = () => {
  return (
    <div className='h-48 w-full relative flex spacing'>
      <img className='h-44 w-full relative object-fill' src="https://img.freepik.com/free-vector/tropical-island-illustration-with-sky-coast-palm-trees-sailing-boat-sea_575670-1199.jpg?w=1380&t=st=1710660873~exp=1710661473~hmac=dfe6c903040142ee2cf162bb442ccba0e0cef556762c00be2b61ace6dcfee11b" alt="" srcset="" />
      <h1 className='absolute top-28 left-20 font-bold text-4xl text-slate-800'>Good Morning</h1>
     <div className='absolute right-11 top-7'><QuickNote/></div> 
    </div>
  )
}

export default Heading
