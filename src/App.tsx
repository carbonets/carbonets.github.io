import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Team from './pages/Team.tsx';
import Join from './pages/Join.tsx';
import Roadmap from './pages/Roadmap.tsx';
import Competitions from './pages/Competitions.tsx';
import Partners from './pages/Partners.tsx';
import NotFound from './pages/NotFound.tsx';
import Footer from './components/Footer.tsx'

import './App.css'


function App() {

  return (
    <>
      <body className='box-border bg-carbonets-dark min-h-[100vh]'>
        <HashRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/team' element={<Team/>} />
            <Route path='/join' element={<Join/>} />
            <Route path='/roadmap' element={<Roadmap/>} />
            <Route path='/competitions' element={<Competitions/>} />
            <Route path='/partners' element={<Partners/>} />
            <Route path='/404' element={<NotFound/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
          <Footer/>
        </HashRouter>
      </body>
    </>
  )
}

export default App
