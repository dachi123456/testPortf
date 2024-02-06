import AboutMe from "../components/about/AboutMe"
import Contact from "../components/contact/Contact"
import MainComponent from "../components/main/MainComponent"
import Projects from "../components/projects/Projects"
import arrow from '../assets/arrow-narrow-up-svgrepo-com.svg'
import useSmoothScroll from "../hooks/useSmoothScroll"

const MainPage = () => {
  const smoothScrollToSection = useSmoothScroll()
  return (
    <div className="position-relative">
        <MainComponent />
        <AboutMe />
        <Projects />
        <div className="mt-5">
        <div className="mt-5">
        <Contact />
        </div>
        </div>
        <div onClick={() => smoothScrollToSection('main')} className="p-2 position-fixed" style={{backgroundColor:'black',width:'3.5rem',bottom:10,right:10,borderRadius:'50%',background:'#7843e9',cursor:'pointer'}}>
          <img src={arrow} alt="" className="w-100"/>
        </div>
    </div>
  )
}

export default MainPage