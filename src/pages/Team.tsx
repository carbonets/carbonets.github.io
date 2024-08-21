import React from 'react'
import Member from '../components/Member'
import DanielDanaieImage from '../assets/members/DanielDanaie.jpg'

const Team = () => {
  return (
    <div className='flex flex-col'>
      <div className='mb-4 text-center text-white mx-auto m-4 max-w-[500px]'>
        Our team stands out for its rich diversity of skills embodying the spirit of ÉTS. We combine ambition, meticulous know-how and passion in every detail of our drones.
      </div>
      <div className='grid grid-cols-4 gap-4 m-4 justify-items-center mx-auto max-w-[1000px]'>
        <Member 
          role="Captain" 
          name="Mohammed Khedim" 
          concentration="ele" 
          imageSrc="src\assets\members\MohammedKhedim.jpg"
          linkedin="https://www.linkedin.com/in/mohammed-khedim-941533256/"
        />
        <Member 
          role="Co-Captain" 
          name="Roberto Laframboise" 
          concentration="gpa" 
          imageSrc="src\assets\members\RobertoLaframboise.jpg"
          linkedin=""
        />
        <Member 
          role="Chef Logiciel" 
          name="Arthur Boulay" 
          concentration="log" 
          imageSrc="src\assets\members\ArthurBoulay.jpg"
          linkedin="https://www.linkedin.com/in/arthurboulay/"
        />
        <Member 
          role="Chef Électrique" 
          name="Alexis Girardin" 
          concentration="ele" 
          imageSrc="src\assets\members\AlexisGirardin.jpg"
          linkedin="https://www.linkedin.com/in/alexis-girardin-ba83a4167/"
        />
        <Member 
          role="Mentor" 
          name="Daniel Danaie" 
          concentration="ele" 
          imageSrc="src\assets\members\DanielDanaie.jpg"
          linkedin="https://www.linkedin.com/in/danieldanaie/"
        />
      </div>
    </div>
  )
}

export default Team