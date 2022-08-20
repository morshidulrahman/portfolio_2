import { useEffect,useRef } from 'react'
import Typewriter from 'typewriter-effect/dist/core';

function TypeWriter({title}) {

    const textRef=useRef()

    useEffect(()=>{
        new Typewriter(textRef.current, {
            loop: true,
            delay: 75,
            strings:title,
            autoStart: true,
          });
    },[textRef,title])


  return (
    <span ref={textRef} className="text-[#353353] text-xl ml-2 dark:text-white">
       
    </span>
  )
}

export default TypeWriter