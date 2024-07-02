import About from "./components/About"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import Skills from "./components/Skills"


function App() {

  return (
    <>
      <div className="container mx-auto px-4">
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
      </div>
    </>
  )
}

export default App
