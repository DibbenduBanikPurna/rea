import React from 'react'
import TopSection from '../../Components/TopSection/TopSection'
import CoverPage from '../../Components/CoverPage/CoverPage'
import Section from '../../Components/Section/Section'
import Products from '../../Components/Products/Products'


function Home() {
  return (
    <div>
      <TopSection/>
      <CoverPage/>
      <Section/>
      <Products/>
     
    </div>
  )
}

export default Home