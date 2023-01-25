import React from 'react'
import "./index.scss"
import { Carousel } from 'antd';
const contentStyle = {
  height: '100vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'cover',
};
const Esas = () => {
  return (
    <div className='esas'>
     <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" /> </h3>
      <h1>Get Your Education today! </h1>
    </div>
    <div>
    <h3 style={contentStyle}><img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" /></h3>
    <h1>Get Your Education today! </h1>
    </div>
    <div>
    <h3 style={contentStyle}><img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" /></h3>
    <h1>Get Your Education today! </h1>
    </div>

  </Carousel>
    </div>
  )
}

export default Esas