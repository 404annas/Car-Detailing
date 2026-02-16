"use client";

import About from '@/components/About'
import Benifits from '@/components/Benifits';
import BgSteps from '@/components/BgSteps'
import Cars from '@/components/Cars'
import Contact from '@/components/Contact'
import Faqs from '@/components/Faqs';
import FeaturedCars from '@/components/FeaturedCars'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Hero3 from '@/components/Hero3';
import HeroBottom from '@/components/HeroBottom';
import Navbar from '@/components/Navbar'
import Numbers from '@/components/Numbers'
import Offering from '@/components/Offering'
import SixSteps from '@/components/SixSteps';
import StepCards from '@/components/StepCards'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <div id="home">
        <Hero3 />
      </div>
      <HeroBottom />
      <SixSteps />
      {/* <About /> */}
      {/* <div id="our-fleet">
          <Cars />
        </div> */}
      {/* <div id="about">
          <Offering />
        </div> */}
      {/* <div id="process">
          <StepCards />
        </div> */}
      {/* <div id="steps">
          <BgSteps />
        </div> */}

      <Benifits />

      <div id="featured-cars">
        <FeaturedCars />
      </div>
      <div id="numbers">
        <Numbers />
      </div>
      <div id="how-it-works">
        <Steps />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faqs">
        <Faqs />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home