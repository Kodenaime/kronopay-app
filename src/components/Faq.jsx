import React, { useState } from 'react'

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { HiMiniMinus } from "react-icons/hi2";

const Faq = ({ question, answer }) => {

    const [answers, setAnswers] = useState(false);

  return (
    <article className='faq' onClick={() => setAnswers(prev => !prev)} >
        <div className="faq-main">
            <h4>{ question }</h4>
            <button className='faq-btn'>
                {
                  answers ? <FaMinus /> : <FaPlus /> 
                }
            </button>
        </div>
        { answers && <p>{ answer }</p>}
    </article>
  )
}

export default Faq