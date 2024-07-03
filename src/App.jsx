import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar"
import Education from "./components/Projects/Education/Education"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills"


function App() {

  return (
    <>
      <div className="container mx-auto px-4">
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Education></Education>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
