import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../../assets/cicrcleimg.png';
import Tilt from 'react-parallax-tilt';


const About = () => {
  return (
    <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-42'>
      <div className=' flex  flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left side */}

        <div className='md:w-1/2 text-center  md:text-left mt-8 md:mt-0'>
          {/* Welcome */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-2'>
            Hi,I am
          </h1>
          {/* Name */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white'>
            Men Panhawat
          </h1>
          {/* Skill heading Effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className=' text-white'>
              I am
            </span>
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                'Fullstack Developer', 2000, // Display text, wait 2000ms
                'IT', 2000,
                'Coder', 2000,
              ]}
              speed={50} // Maps to 100 in react-typing-effect (inverted scale)
              deletionSpeed={75} // Maps to eraseSpeed=50
              cursor={true}
              repeat={Infinity}
              style={{ color: '#0d83fd' }} // Replaces cursorRenderer
            />
          </h3>
          {/* about me paragraph */}
          <p className=' text-base tracking-tight text-justify sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed sm:-tracking-tight  '>
            I am a fresh graduate in Software Engineering from BELTEI International University. Throughout my academic journey, I have built a strong foundation in software engineering principles and best practices. My coursework has equipped me with a solid understanding of the software development lifecycle, programming languages, system analysis, design, and testing methodologies. I am eager to apply my knowledge and skills to real-world projects and contribute effectively to software development teams.
          </p>
          {/* my cv */}

          <a href="/src/assets/PanhawatCv.v1.pdf" target="_blank" rel="noopener noreferrer" className=' inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: ' linear-gradient(90deg,#0d83fd,#a855f7)',
              boxShadow: '0 0 2px ##0d83fd, 0 0 2px #0d83fd, 0 0 40px #0d83fd '
            }}>

            Download Resume
          </a>
        </div>
        {/* Right side Imge pf */}
        <div className='md:w-1/2 flex justify-center md:justify-end lg:ml-10 p-0 lg:mb-20 '>

          <Tilt
            className="  w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#43b4bb] rounded-full "
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Panhawat"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>



        </div>

      </div>
    </section>
  );
};

export default About;