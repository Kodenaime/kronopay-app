import React from 'react'


const SectionTop = ({ head, title, body }) => {
  return (
    <div className="section-head">
     {/* {`section-head ${className}`}> */}
        <h4>{ head }</h4>
        <h2>{ title }</h2>
        <p>{ body }</p>
    </div>
  )
}

export default SectionTop