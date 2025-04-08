import React from 'react'

import SectionTop from './SectionTop'
import lady from '../assets/lady.png'
import family from '../assets/family.png'
import money from '../assets/cash.png'
import woman from '../assets/woman.png'
import guy from '../assets/guy.png'

const topCasesData = [
  {
    title: "Never Miss a Payment Again",
    body: "our auto-transaction feature consolidates all recurring bills in one place, helping you schedule payments, track due dates, and avoid late fees.",
    image: lady,
  },
  {
    title: "Simple Payroll Solutions",
    body: "Simplify small business payroll with separate employee wallets, easy salary disbursement, and payment tracking.",
    image: guy,
  },
  {
    title: "Smart Budget Management",
    body: "Create dedicated wallets for different spending categories to allocate funds precisely and track where your money goes.",
    image: money,
  },
];

const Cases = () => {
  return (
    <section className="wrapper">
      <div className="container cases-container">
        <SectionTop 
        head="use cases"
        title="Built for Every Need"
        body="Discover how our features so,ve real-worls financial challenges"
        />

       <div className="cases">
        <div className="cases-top">
          {
            topCasesData.map((item, index) => (
              <article key={index} className={`cases1 ${index === 1 ? 'bg-blue' : 'bg-gray'}`}>
              <h3>{ item.title }</h3>
              <p>{ item.body }</p>
              <img src={ item.image } alt="Use case image" />
              </article>
            ))
          }
          </div>
        
          <div className="cases-down">
            <article className="cases2 bg-purple">
              <h3>seamless Allowance Management</h3>
              <p>Teach financial responsibility with customizable allowances and infinite wallets that let you track spending, set limits, and manage funds for family members or employees.</p>
              <img src={family} alt="Use case image" />
            </article>

            <article className="cases2">
              <h3>Reach Your Target Audience</h3>
              <p>Monetize your platform by integrating our fintech app to offer revenue-generating financial services to your users, whether you're a content creator, app developer, or business owner.</p>
              <img src={woman} alt="Use case image" />
            </article>
        </div>
       </div>

      </div>

      
     
    </section>
  )
}

export default Cases