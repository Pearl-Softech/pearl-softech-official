import Hero from '../components/Hero'
import ServiceComponent from '../components/ServiceComponent'
import AboutComponent from '../components/AboutComponent'
import TeamComponent from '../components/TeamComponent'
import FormContainer from '../components/FormComponent'

const Home = () => {
  return (
    <div className="home-container">
        <Hero />
        <ServiceComponent />
        <AboutComponent />
        <TeamComponent />
        <FormContainer />
    </div>
  )
}

export default Home