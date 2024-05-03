import React from 'react'

const Investment = () => {
  return (
    <div className='invest-container'>
        <h1 className='invest-title'>The unique investment <br /> &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; opportunity</h1>
         <div className="cards">
            <div className="card-one">
                <img style={{borderRadius: 90}} src="https://th.bing.com/th/id/OIP.VoaPHlnb8kiXOk2DlMlM4gHaFz?rs=1&pid=ImgDetMain" height={40} alt="" />
                <h3  style={{fontSize:18, marginTop:5, marginBottom:7}}> Private Investors</h3>
                <p style={{fontSize:12, marginBottom:5,}}>Providing private investors <br /> quick investment opportunities <br /> usually available only to <br /> major institutional investors</p>
                <a  style={{color: "greenyellow", fontWeight:"bold"}}>View More</a>
            </div>
            <div className="card-one">
                <img style={{borderRadius: 90}}  src="https://mir-s3-cdn-cf.behance.net/user/276/0d77a747412871.5d1dbb5caac85.png" height={40} alt="" />
                <h3  style={{fontSize:18, marginTop:5, marginBottom:7}}> Aligned Interests</h3>
                <p style={{fontSize:12, marginBottom:5,}}>Our local operating partners<br /> invest approximately 35% in<br /> each deal, up front, thereby <br />creating shared and common <br /> interests with us.</p>
                <a  style={{color: "greenyellow",  fontWeight:"bold" }}>View More</a>
            </div>
            <div className="card-one">
                <img style={{borderRadius: 90}}  src="https://th.bing.com/th/id/OIP.0MzjRRITGWLZgPnvBdY_KwHaJ0?rs=1&pid=ImgDetMain" height={40} alt="" />
                <h3  style={{fontSize:18, marginTop:5, marginBottom:7}}> Spread the Risks</h3>
                <p style={{fontSize:12, marginBottom:5,}}>Offering a way to spread <br /> the risk across a diverse<br /> portfolio of <br /> income-producing <br /> properties throughout the</p>
                <a  style={{color: "greenyellow",  fontWeight:"bold"}}>View More</a>
            </div>
            
            </div>      
    </div>
  )
}
 
export default Investment
