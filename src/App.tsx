import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx';
import Team from './pages/Team.tsx'
import Competitions from './pages/Competitions.tsx'
import Partners from './pages/Partners.tsx'
import Contribute from './pages/Contribute.tsx'
import NotFound from './pages/NotFound.tsx';
import Join from './pages/Join.tsx';
import Footer from './components/Footer.tsx'

import './App.css'

function App() {

  return (
    <>
      <body className='box-border bg-dronolab-dark min-h-[100vh]'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/team' element={<Team/>} />
            <Route path='/competitions' element={<Competitions/>} />
            <Route path='/partners' element={<Partners/>} />
            <Route path='/contribute' element={<Contribute/>} />
            <Route path='/join' element={<Join/>} />
            <Route path='/404' element={<NotFound/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
          <Footer/>
        </Router>
      </body>
    </>
  )
}

export default App
