import React from 'react'

function Service() {
  return (
    <>
      <div>
        <p style={{ textAlign: 'center', fontSize: '25px', paddingTop: '80px' }}>May the force be with you</p>
        <div style={{ textAlign: 'center' }}>
          <img src={`${process.env.PUBLIC_URL}/images/svg-6.svg`} alt='' />
        </div>
      </div>
    </>
  )
}

export default Service
