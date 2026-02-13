import About from '@/components/About'
import Cars from '@/components/Cars'
import Contact from '@/components/Contact'
import FeaturedCars from '@/components/FeaturedCars'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Navbar from '@/components/Navbar'
import StepCards from '@/components/StepCards'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'

const Home = () => {
  return (
    <div>
        <Navbar />
        {/* <Hero /> */}
        <Hero2 />
        <About />
        <Cars />
        <StepCards />
        <FeaturedCars />
        <Steps />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home