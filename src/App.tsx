import { useEffect } from "react"
import Bio from "./sections/Bio"
import Skills from "./sections/Skills"
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

   useEffect(() => {
     AOS.init();
     AOS.refresh();
   }, [])
   

  return (
    <main className="App">
      <Bio />
      <Skills />
    </main>
  )
}

export default App
