import Member from '../components/Member'
import Teaser from '../components/Teaser'

const Team = () => {
  return (
    <div className='flex flex-col justify-center mx-auto font-montserrat max-w-[750px]'>
      <div className='font-montserrat text-[8rem] font-bold text-white text-center mb-4'>
        THE TEAM
      </div>
      <div className='flex space-x-8 mb-4 justify-center'>
        <div className='place-content-center'>
          <Member 
            role="Captain" 
            name="Daniel Danaie" 
            concentration="ele" 
            imageSrc="src\assets\members\DanielDanaie.png"
            linkedin="https://www.linkedin.com/in/danieldanaie/"
          />
        </div>
        <div className='text-white text-[3.5rem] font-bold place-content-center'>
          All by myself,<br/>don't want to be<br/>all by myself,<br/>anymore...
        </div>
      </div>
      <div className='flex text-[1.5rem] font-semibold text-center'>
        <p>
          <span className='text-carbonets-blue'>But seriously, </span>
          <span className='text-carbonets-green'>can you join me?</span>
        </p>
      </div>
      <div>
        <Teaser
          right={false}
          title='The world needs you and so do we'
          paragraph=''
          imageSrc='src\assets\members\DanielDanaie.png'
          alt='Me'
        />
      </div>
    </div>
  )
}

export default Team