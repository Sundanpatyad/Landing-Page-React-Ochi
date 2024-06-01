import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { Power4} from "gsap/all"
import { useState } from 'react';



function Featured() {
    const cards = [useAnimation(),useAnimation()];

    const handlehover =(index)=>{
        cards[index].start({y:"0"})
    }
    
    const handlehoverend = (index)=>{
        cards[index].start({y:"100%"})
    }
//    const [a,b]= useState(false);
   
    
  return (
    <div className='w-full py-20 bg-zinc-400'>

        <div className='w-full  pb-10 '>
            <h1 className='text-5xl border-b-[1px] px-20 border-zinc-700 pb-20  tracking-tight'>Featured Projects</h1>
           
        </div>
       <div className='px-20'> 
            <div className='cards flex gap-10 w-full'>
                <motion.div onHoverStart={()=>handlehover(0)} onHoverEnd={()=>handlehoverend(0)} className='card relative w-1/2 h-[75vh] rounded-xl '>
                    <h1 className='absolute flex  left-full -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden  z-[9] text-7xl tracking-tighter' >
                    {"FYDE".split('').map((item ,index)=>
                    <motion.span initial={{y:'100%'}} animate={cards[0] } transition={{ease:[0.22,1,0.36,1],delay: index*0.1}} className='inline-block'
                    
                    >{item}</motion.span>)}
                    </h1>
                    
                   
                    <div className='w-full h-full rounded-xl bg-green-500'>
                        <video autoPlay muted loop className='h-full w-full object-cover rounded-e-lg' src="https://player.vimeo.com/progressive_redirect/playback/430951603/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=b437d9a9a44795a3ea3c6e9f2eb1c14838f4b9666f65673472c810cd4d25d26a" alt="" />
                    </div>
                </motion.div>
                <motion.div onHoverStart={()=>handlehover(1)} onHoverEnd={()=>handlehoverend(1)} className='card w-1/2 h-[75vh] relative rounded-xl '>
                <h1 className='absolute flex  right-full translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden  z-[9] text-7xl tracking-tighter' >
                    {"VISE".split('').map((item ,index)=>
                     <motion.span initial={{y:'100%'}} animate={cards[1] } transition={{ease:[0.22,1,0.36,1],delay: index*0.1}} className='inline-block'
                    
                     >{item}</motion.span>)}
                    </h1>
              
                    
                    <div className='w-full h-full rounded-xl overflow-hidden bg-zinc-200'>
                        <video autoPlay muted loop className='h-full w-full object-cover ' src="https://player.vimeo.com/progressive_redirect/playback/440408908/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=a1acbee20028bb60c8a2372f6f64817704a864235ccb3dc4c8ebd8d032980e03" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Featured