import React from 'react'

import Faq from './Faq'
import SectionTop from './SectionTop'

const responses = [
  { id: 1, 
    question: "What is Kronopay?",
    answer: "Kronopay is a platform that enables you conduct transactions like conversion of money, send money to your other wallets in the app or to other people, purchase airtime, pay your bills, schedule payments, and more."
  },
  { id: 2,
    question: "What is Kronopay?",
    answer: "Kronopay is a platform that enables you conduct transactions like conversion of money, send money to your other wallets in the app or to other people, purchase airtime, pay your bills, schedule payments, and more."
  },
  { id: 3,
    question: "What is Kronopay?",
    answer: "Kronopay is a platform that enables you conduct transactions like conversion of money, send money to your other wallets in the app or to other people, purchase airtime, pay your bills, schedule payments, and more."
  },
  { id: 4,
    question: "What is Kronopay?",
    answer: "Kronopay is a platform that enables you conduct transactions like conversion of money, send money to your other wallets in the app or to other people, purchase airtime, pay your bills, schedule payments, and more."
  }
]

const Faqs = () => {
  return (
    <section>
      <div className="container faqs">
        <SectionTop head="Faq" title="Frequently Asked Questions" />
        <div className="faq-cards">
          {
            responses.map(({id, question, answer}) => {
              return <Faq key={id} question={question} answer={answer} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Faqs