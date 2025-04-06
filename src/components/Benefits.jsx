import React from 'react'

import benss from '../assets/girl.png'
import SectionTop from './SectionTop'
import { FaRegThumbsUp } from "react-icons/fa6";
import { LiaDollarSignSolid } from "react-icons/lia";
import { BsHeadset } from "react-icons/bs";
import { FiShield } from "react-icons/fi";


const benefitsData = [
  {
    icon: <FiShield />,
    topic: "Secirity First",
    body: "Your money and data protected by world-class encryption ans security protocols."
  },
  {
    icon: <BsHeadset />,
    topic: "24/7 Support",
    body: "Get help anytime, anywhere with our dedicated customer service team."
  },
  {
    icon: <LiaDollarSignSolid />,
    topic: "24/7 Support",
    body: "Enjoy competitive exchange rates and no transaction fees."
  },
  {
    icon: <FaRegThumbsUp />,
    topic: "24/7 Support",
    body: "Intuitive design makes managing your money effortless."
  },
]

const Benefits = () => {
  return (
    <section>
      <div className="container benefits-container">
        <div className="benefits-img">
          <img src={benss} alt="" />
        </div>
        <div className="benefits">

        </div>
      </div>
    </section>
  )
}

export default Benefits