import { useEffect } from "react"
import Bio from "./sections/Bio"
import Skills from "./sections/Skills"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Projects from "./sections/Project"

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
    </main>
  )
}

export default App
