import React from 'react'
import "./index.scss"
const Section3 = () => {
  return (
    <div className='section3'>
        <div className='leftyellow'>
            <div className='yellowtext'>
            <h2>Register now and get a discount</h2>
            <h2> 50% discount until 1 January</h2>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor <br /> nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. <br /> Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
            <button>REGISTER NOW</button>
            </div>
          
        </div>
<div className='rightsection3'>
<h2>Search for your course</h2>
  <div className='rightext'>
 
  <input type="text" placeholder='Course Name'  />
  <input type="text" placeholder='Category'  />
  <input type="text" placeholder='Degree'  />
  <button>Search Course</button>
  </div>

</div>
    </div>
  )
}

export default Section3