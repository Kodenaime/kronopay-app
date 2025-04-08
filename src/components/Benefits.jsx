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
    topic: "Security First",
    body: "Your money and data protected by world-class encryption ans security protocols."
  },
  {
    icon: <BsHeadset />,
    topic: "24/7 Support",
    body: "Get help anytime, anywhere with our dedicated customer service team."
  },
  {
    icon: <LiaDollarSignSolid />,
    topic: "Cost Effective",
    body: "Enjoy competitive exchange rates and no transaction fees."
  },
  {
    icon: <FaRegThumbsUp />,
    topic: "Easy to Use",
    body: "Intuitive design makes managing your money effortless."
  },
];

const Benefits = () => {
  return (
    <section className='wrapper'>
      <div className="container benefits-container">
        <div className="benefits-img">
          <img src={benss} alt="" />
        </div>
        <div className="benefits-right">
        <SectionTop 
        head="benefits" 
        title="Why choose kronopay?" 
        body="Experience banking that works as hard as you do." 
        className="topper"
        />
        <div className="benefits">
          {
            benefitsData.map((item, index) => (
              <div key={index} className="benefit">
                <h6>{ item.icon }</h6>
                <h2>{ item.topic }</h2>
                <p>{ item.body }</p>
              </div>
            ))
          }
        </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits