import About from '@/components/About'
import BgSteps from '@/components/BgSteps'
import Cars from '@/components/Cars'
import Contact from '@/components/Contact'
import FeaturedCars from '@/components/FeaturedCars'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Navbar from '@/components/Navbar'
import Numbers from '@/components/Numbers'
import Offering from '@/components/Offering'
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
        <Offering />
        <StepCards />
        <BgSteps />
        <FeaturedCars />
        <Numbers />
        <Steps />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home