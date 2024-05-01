import React from 'react'

const Actual_news = () => {
    return (
        <div className='news-container'>
            <h2 className='actual'>Actual news</h2>
            <div className="box">

                <div className='left-box'> 
                    <img src= "https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height={300} width={220} style={{ borderRadius: 10 }} alt="" /> <br /> 
                    <p style={{ fontSize: 10, fontWeight: 'bold' }}>Investment attractiveness in London does <br />not decrease: market overview </p>  
                    <a style={{ color: "green", fontSize: 11 }}> More Details</a> <br /> <br />
                    <img src= "https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  height={300} width={220} style={{ borderRadius: 10 }} alt="" /> 
                    <p style={{ fontSize: 10, fontWeight: 'bold' }}> Hotel real estate in Vietnam: changing  the <br />  rules for  investors</p>
                    <a style={{ color: "green", fontSize: 11 }}> More Details</a> <br /> <br />
                </div>

                <div className='right-box'>
                    {/* <p style={{ fontSize: 10, fontWeight: 'bold' }}>Investment attractiveness in London does <br />not decrease: market overview </p>
                    <a style={{ color: "green", fontSize: 11 }}> More Details</a> <br /> <br /> */}
                    <img src="https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  height={300} width={220} style={{ borderRadius: 10 }} alt="" /> <br />
                    <p style={{ fontSize: 10, fontWeight: 'bold' }}>Invest in Dubai housing: <br />acctrativeness of the local market </p>
                    <a style={{ color: "green", fontSize: 11 }}> More Details</a> <br /> <br />
                    <img src="https://images.pexels.com/photos/756908/pexels-photo-756908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height={300} width={220} style={{ borderRadius: 10 }} alt="" />
                    <p style={{ fontSize: 10, fontWeight: 'bold' }}>Benifit of invisting in thailand's real <br /> estate market: Country overview  </p>
                    <a style={{ color: "green", fontSize: 11 }}> More Details</a> <br /> <br />
                </div>


            </div>
        </div>
    )
}

export default Actual_news
