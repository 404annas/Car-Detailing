import FeaturedCars from '@/components/FeaturedCars'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Steps from '@/components/Steps'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <FeaturedCars />
        <Steps />
    </div>
  )
}

export default Home