import React from 'react'
import './Profile.css'
// import HeroSection from '../HeroSection'
// HeroSectionに入れ替えるわけではないので不要だった


function Profile(
  // { lightBg, lightText, lightTextDesc, img1, img2, img3, alt}も不要
) {
  return (
    <>
      <div className='profile-container'>
        <div className="profile-col" style={{display: 'flex',}}>
          <div className="home__profile-img">
            <img src='images/img1.png' alt='' />
          </div>
          <div className="home__profile-text">
          Hello! My name is Natsuki!
          </div>
        </div>

        <div className='profile-col' style={{display: 'flex',}}>
          <div className="home__profile-shorttext">
          I was a nurse.  But I want to become a frontend engineer!
          </div>
          <div className="home__profile-img">
            <img src='images/img2.png' alt='' />
          </div>
        </div>

        <div className='profile-col' style={{display: 'flex',}}>
          <div className="home__profile-img">
            <img src='images/img3.png' alt='' />
          </div>
          <div className="home__profile-description">
          I’m studying Programming right now. For example, HTML,CSS,JavaScript,React,    Gatsby,Docker,Linux,AWS...I have many things to learn more!
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
