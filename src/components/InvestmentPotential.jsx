import React from 'react'

const InvestmentPotential = () => {
  return (
    <div>
        <div className="top">
           <li style={{fontWeight:'600px'}}>Investment potential</li>
           <li>En</li>
         </div>

         <div className='invest-middle'>
            <div className="invest-left">
            <h1 className='text'> Invest <br/> in real <br />estate </h1>
            <button className='request'>Request a call</button>
            <button className='consulation'>To get the consulation</button>
            
            </div>
            <div className="invest-right">
                <div className="images">
                  <img className='image1' src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image1" />

                  <img className='image2'  src="https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image6" />
                  
                  <img className='image3' src="https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image2" />

                  <img className='image4' src="https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image3" />
                  
                  <img className='image5'  src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image4" />
                  
                  <img className='image6'   src="https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image5" />

                
                </div>
            </div>
         </div>
    </div>
  )
}

export default InvestmentPotential
