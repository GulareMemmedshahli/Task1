import React from 'react'
import Data from './data'
import Esas from './esas'
import {Helmet} from "react-helmet";
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
const Home = () => {
  return (
 
    <div>
         <Helmet>
    <meta charSet="utf-8" />
    <title>Home</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
      <Esas/>
      <Data/>
      <Section3/>
     < Section4/>
     <Section5/>
    </div>
  )
}

export default Home