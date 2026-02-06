import About from '@/components/About'
import FeaturedCars from '@/components/FeaturedCars'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <FeaturedCars />
        <Steps />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home