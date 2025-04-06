import React from 'react'

import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

const Download =() => {
  return (
    <section>
         <div className="container footer-top">
            <h1>Ready To Transform Your Financial Life?</h1>

            <div className="play-icons">
              <div className="play-icon">
                <i><FaGooglePlay /></i>
                <p>Download on <br /> <span>PlayStore</span></p>
              </div>
              <div className="play-icon">
                <i><BsApple /></i>
                <p>Download on <br /> <span>AppStore</span></p>
              </div>
            </div>

        </div>
        <div className="border"></div>
    </section>
  )
}

export default Download