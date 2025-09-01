import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased'>
        <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
          bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(58,43,81,0.8),rgba(12,10,25,1))]">
        </div>
        
      </div>

      <div className='container mx-auto px-8'>
        <div className='mb-20' >

          <Navbar />
        </div>
        <Hero />
        <About />
        <Technologies/>
        <Projects/>
        <Contact/>
      </div>

    </div>
  )
}

export default App