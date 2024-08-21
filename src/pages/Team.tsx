import Member from '../components/Member'

const Team = () => {
  return (
    <div className='flex flex-col'>
      <div className='mb-4 text-center text-white mx-auto m-4 max-w-[500px]'>
        Our team stands out for its rich diversity of skills embodying the spirit of ÉTS. We combine ambition, meticulous know-how and passion in every detail of our carbon capturing units.
      </div>
      <div className='grid grid-cols-4 gap-4 m-4 justify-items-center mx-auto max-w-[1000px]'>
        <Member 
          role="Captain" 
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