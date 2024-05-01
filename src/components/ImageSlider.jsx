import React, { useState } from 'react'


const data =[
  "https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/425047/pexels-photo-425047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/417430/pexels-photo-417430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/635041/pexels-photo-635041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/396758/pexels-photo-396758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/756908/pexels-photo-756908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1034665/pexels-photo-1034665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",


]

const ImageSlider = () => {

  const [images, setimages]=useState( 0)

  const handleleft =()=>{
    if(images===0) setimages(data.length-1)
   else setimages(images-1)
  }

  const handleright =()=>{
    setimages((images+1) % data.length)
  }

  return (
    <div>
      <div className="image-slider">
        <h2 className="slider-title">Binhoff gallery</h2>
        <div className='Carausa-btn'>
            <button onClick={handleleft} className="button-left">⬅️ </button>
           
            <button onClick={handleright} className="button-right">➡️</button>
            {/* <i class="fa-light fa-left-long fa-xl"></i> */}
        </div>
      </div>

      <div className="image-carausal">
       <img className='Img' src={data [images]} alt="images" />
    </div>
    </div>
  )
}

export default ImageSlider
