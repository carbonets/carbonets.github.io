import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Team from './pages/Team.tsx';
import Prototype from './pages/Prototype.tsx';
import Competition from './pages/Competition.tsx';
import NotFound from './pages/NotFound.tsx';
import Footer from './components/Footer.tsx'

import './App.css'


function App() {

  return (
    <body className='box-border bg-carbonets-dark min-h-[100vh]'>
      <BrowserRouter basename='/'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/prototype' element={<Prototype/>} />
          <Route path='/competition' element={<Competition/>} />
          <Route path='/404' element={<NotFound/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </body>
  )
}

export default App
