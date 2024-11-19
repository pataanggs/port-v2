"use client"
import GridBackground from '@/components/grid-background'
import React from 'react'

const Projects = () => {

  React.useEffect(()=>{
    document.title="Portfolio | Projects"
  },[])

  return (
    <div className='overflow-hidden'>
      <GridBackground/>
    </div>
  )
}

export default React.memo(Projects);
