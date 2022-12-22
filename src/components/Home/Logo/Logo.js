import { useEffect, useRef } from 'react'

import LogoS from '../../../assets/images/4471282.png'
import './Logo.scss'

const Logo = () => {
  

  

  return (
    <div className=" lg:w-3/4 w-full lg:p-0 p-5  " >
      <img
        className=" lg:w-full  project lg:ml-24 lg:pt-20  "
        
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      
    </div>
  )
}

export default Logo
