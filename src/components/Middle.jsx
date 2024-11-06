import React, { useEffect } from 'react'
import { useState } from 'react'
const Middle = () => {
     const [index, setindex] = useState(0)
     const texts = ["Your Early Warning System for Conflict", "Tomorrow's Conflicts, Predicted Today.", "Anticipate, Analyze, Act.","See the Future of Conflict."];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
     const images=["https://cdnph.upi.com/svc/sv/i/62241290184904/2010/1/12901853435659/US-deploys-armored-tanks-to-Afghanistan.jpg","https://cdn.theatlantic.com/thumbor/mFRZi6YTG32JomiPKav45rlaO44=/900x594/media/img/photo/2018/03/photos-looking-back-at-the-war-in-i/i01_94984551/original.jpg","https://cdn.cfr.org/sites/default/files/styles/large_xl/public/image/2022/09/TL_2001_WarBegins.jpg.webp","https://cdn.britannica.com/34/94834-050-16DB7EEB/USS-Carl-Vinson-aircraft-carrier-US-Navy-2005.jpg","https://upload.wikimedia.org/wikipedia/commons/0/04/USAF_F-16A_F-15C_F-15E_Desert_Storm_edit2.jpg"];
     useEffect(() => {
      const handleTyping = () => {
        const currentText = texts[currentTextIndex];
  
        if (!isDeleting) {
          setCurrentCharIndex((prev) => prev + 1); // Move forward
        } else {
          setCurrentCharIndex((prev) => prev - 1); // Move backward (delete)
        }
  
        if (!isDeleting && currentCharIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000); // Wait 1 second before deleting
        }
  
        if (isDeleting && currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex) => (currentTextIndex + 1) % texts.length);
        }
      };
  
      const typingSpeed = isDeleting ? 100 : 150;
      const typingInterval = setTimeout(handleTyping, typingSpeed);
  
      return () => clearTimeout(typingInterval);
    }, [currentCharIndex, isDeleting, currentTextIndex, texts]);
     
     useEffect(() => {
        const interval=setInterval(()=>{
            setindex((index)=>(index+1) % images.length);
        },3000);

        return () => {
          clearInterval(interval)
        }
      }, [images.length]);
      
  return (
    <div className='flex'>
      <div className='w-[45vw] px-16 py-24'>
         <div className='text-4xl font-semibold my-3'>Hello, Welcome to Conflict Visualizer</div>
             <div className='flex '>
          <div className='text-3xl font-semibold text-blue-400'>{texts[currentTextIndex].slice(0, currentCharIndex)}</div>
          <span className='inline-block w-[2px] bg-blue-500 ml-[1px] animate-blink'></span></div>
           <p className='text-xl my-16 '>Today's World is gripped with uncertainity but Conflict Predictor helps you stay ahead with the latest and most deep analysis of military Expenditure. Tracking global military Expenditure and the latest analysis on War and Peace time Military Spendings. Keeping you and the Generation's ahead safe.</p>
            <div className='flex'>
        <p className=' my-4 font-bold text-4xl text-blue-400'>
          "Turning Uncertainty Into  Actionable Insight."</p>
           </div>
           
           </div>
      <div className='w-[55vw] px-4 relative top-20'>
        <img src={images[index]} id='change' style={{height:'600px',width:'2000px'}} className='border  rounded-lg'  alt="" />
        
      </div>
    </div>
  )
}

export default Middle
