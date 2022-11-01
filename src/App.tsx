import { useEffect } from "react"
import Bio from "./sections/Bio"
import Skills from "./sections/Skills"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Projects from "./sections/Project"
import Contact from "./sections/Contact"

function App() {

   useEffect(() => {
     AOS.init();
     AOS.refresh();
   }, [])
   

  return (
    <main className="App">
      <Bio />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
