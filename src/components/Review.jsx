import React from 'react'

const Review = () => {
    return (
        <div className='review-container'>
            <h2 className="review-title">
                Trusted by clients
            </h2>
            <p className='review-para'>
                The world is not standing Steel and only new approaches with individual vision are increasingly <br /> able to achieve the desired results. More than 15 years of experience have convinced us that <br /> the best priority is long-term prospects. Customer trusts and a solid reputation. We use <br /> experience modern technology and safe solutions. We are building the future just for you.
            </p>

            <div className="review-customer">
                <img src="https://th.bing.com/th/id/OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw?rs=1&pid=ImgDetMain" height={50} alt="profile-pics" />
                <div className="profile">
                    <h3 className="name">Sebastian Westergren</h3>
                    <p className="occupation"> Development Director</p>

                </div>

                <h3 className='numbers'> ⬅️ 01/14➡️</h3>
            </div>

        </div>
    )
}

export default Review
