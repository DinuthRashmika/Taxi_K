import React from 'react'
import NavBar from "../../components/navbar";
import Footer from '../../components/footer';
import Header from "../../components/Header"

function About() {
  return (
    <div>
      <NavBar />
      <div>
      <Header
        title="About Us"
        breadcrumbs={[
          { text: 'Home', link: './containers/Main/HomePage' },
          { text: 'About Us', link: './containers/Main/About' },
        ]}
      />
      
    </div>

    

    <Footer />
   
     
    </div>
    
    

    
    
  )
}

export default About