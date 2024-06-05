import Articles from "./Components/Articles"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import Why from "./Components/Why"

function App() {


  return (
    <main>
   
   
   <section className="top-0">
     <Nav />
     </section>
    
  <section className="bg-hero-pattern bg-no-repeat">
    <Hero />
  </section>


  <section>
    <Why />
  </section>

  <section>
    <Articles />
  </section>

  <section>
    <Footer />
  </section>


    </main>
  )
}

export default App
