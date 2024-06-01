import { motion } from 'framer-motion'
import React from 'react'

function LandingPage() {
   
  return (
    <div data-scroll dta-scroll-section  data-scroll-speed="-.3" className='w-full h-screen  pt-1 bg-zinc-900'>
<div className='textstr mt-40 px-20'>
    {["We Create","Eye Opening", "Presentations"].map((item,index)=>{
        return   <div className='masker'>
        <div className='w-fit flex items-center'>
            {index === 1 && (
            <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease :[0.76 , 0 , 0.24 , 1],duration:1.3}} className='w-[8vw] h-[5vw] rounded-md relative top-[.5vw] overflow-hidden '>
                <video className='rounded-md' autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/352012012/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=5360603fc9676bd7cc28cbf1cc040f106a0204bdc2e6575d3ec2ebef621d20d2"></video>
            </motion.div>)}
        <h1 className='uppercase text-8xl leading-[6vw] tracking-tighter font-bold'>{item}
        </h1>
        </div>
        
    </div>
    })}

</div>
<div className='border-t-2 border-zinc-800 mt-32 flex items-center justify-between px-20 py-5'>
    {[
        "For public and private Companies",
        "From the First Pitch To IOP"
    ].map((item, index) => (
        <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
    ))}
    <div className='start'>
        <div className=' px-5 py-2 border-2 text-xs rounded-full border-zinc-700'>Start the project</div>
        <div className='w-3 h-3 rounded-full'></div>
    </div>
</div>


    </div>
  )
}

export default LandingPage