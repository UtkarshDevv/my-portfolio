'use client'
import {Inter} from 'next/font/google'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Contact} from './api/contactpage/page'


import cardDetails from './skillinfo'
 let cardBoxStyle={
  gridTemplateColumns:"repeat(auto-fit, minmax(363px, 1fr))",
  placeItems:"center",
  alignItems:"center"
};

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 

  return (
    <main id='home' className=" mr-0 pr-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col flex-grow overflow-hidden ${inter.className}">
     <nav className="h-14 bg-slate-700 opacity-70 flex items-center justify-between text-white text-base px-4">
        <div className="logo">
          <h1>Utkarsh Sinha</h1>
        </div>
        <ul className="flex gap-5  sm:gap-10 md:gap-20 max-md:hidden">
          <li className='hover:text-black'> <Link href="#home">Home</Link></li>
          <li className='hover:text-black'><Link href="#about">About</Link></li>
          <li className='hover:text-black'><Link href="#project">Projects</Link></li>
          <li className='hover:text-black'><Link href="./api/contactpage">Contact</Link></li>
        </ul>
        <button className="lg:hidden" onClick={toggleMenu}>
          <Image src="/menu.png" alt='Menu' width={20} height={20} />
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-500 from-10% via-sky-500 to-indigo-500 opacity-90 text- text-base px-4 font-semibold flex justify-around ">
          <ul>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#project">Projects</Link></li>
            <li><Link href="./api/contactpage">Contact</Link></li>
          </ul>
        </div>
      )}

      <h1 id='about' className='font-inter-500 text-4xl flex justify-center mt-12'>About</h1>
      <div className='h-2 w-24 bg-purple-600 rounded-lg inline-block self-center '></div>

      <section className=' w-11/12 bg-purple-700 bg-opacity-70 mt-6 flex self-center hover:origin-top relative flex-col items-center py-5 md:flex-row px-5'>
  <div className='bg-orange-500 h-3/4 w-40 m-3 rounded-full flex-shrink-0 relative'>
    <Image className='rounded-full opacity-100' src="/mypic.jpg" alt='profilepic' width={217} height={140} />
  </div>
  <div className='ml-6 flex flex-col justify-center'>
    <h1 className='font-{Tnter-Medium 500 Italic} text-white '>
      Hello I'm Utkarsh Sinha, a student of Banaras Hindu University currently pursuing a Bachelor's of Vocational in Computer Applications and also a passionate Full Stack Developer with a keen eye for creating engaging user experiences. My expertise lies in both frontend and backend development, with a strong proficiency in technologies such as HTML, CSS, JavaScript, React, and TailwindCSS on the frontend, and Node.js, Express.js, and MongoDB on the backend. I have a solid foundation in Java, OOP principles, and algorithms, which enables me to develop efficient and scalable solutions. With a dedication to learning and a drive to contribute to dynamic projects, I am continuously evolving my skill set in the ever-changing field of software development.
    </h1>
    <a className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-min block my-2 " download="utkarsh_sinha" href='/UtkarshSinha_Resume.pdf'>Resume</a>
  </div>
</section>


      <h1 className='font-inter-500 text-4xl flex justify-center mt-12 ' >Skills</h1>
      <div className='h-2 w-24 bg-purple-600 rounded-lg inline-block self-center '></div>

      <section id='skills' className='skills grid  gap-4 justify-items-center mt-8 w-screen h-full   ' style={cardBoxStyle}>
       { cardDetails.map((content,index)=>{
      return(  <div className="h-96 w-64 hover:shadow-black bg-purple-600  rounded-lg flex flex-col flex-grow items-center  text-center text-wrap overflow-y-scroll no-scrollbar p-3 hover:font-bold  shadow-2xl;" key={index}>
          <div><Image className='rounded-full opacity-100 mt-4' src={content.imgSrc} alt='profilepic' width={120} height={120} />
          </div>
          <h1 className='text-slate-200  mt-2'>{content.title}</h1>
          <p>{content.text}  </p></div>
      
      ); })}
       

        </section>

        <h1 id='project' className='font-inter-500 text-4xl flex justify-center mt-12 '>Projects</h1>
      <div className='h-2 w-24 bg-purple-600 rounded-lg  self-center '></div>

      <section id='project' className='skills grid  gap-1 place-items-center mt-8 mb-8 w-4/5 justify-center h-full sm:grid-cols-2  mx-auto  '>
      <div className='h-96 max-w-xl bg-purple-600   rounded-lg flex flex-col items-center overflow-y-scroll text-center text-wrap  no-scrollbar p-3 hover:font-bold sm:m-8 shadow-2xl'>
        <div>
          <Image className=' opacity-100 mt-4' src="/cgtpc.png" alt='profilepic' width={450} height={150} />
          </div>
          <h1 className='text-slate-200 '>BHU Placement Website</h1>
          <h2  className='pb-4 font-bold ' ><Link href="https://cgpt-taupe.vercel.app/Landingpage.html">Visit</Link></h2>
          <p>Techstack: React.js,Tailwind,Node.js,Git,VS-code
      Techstack: Javascript, React.js,Nodejs,Expressjs , MongoDB ,RestApi,Git&Github
This website is currently under development for the placement cell of Banaras Hindu University, Asia’s
largest residential university. I have designed the entire frontend from scratch and implemented the
backend, including REST APIs, database management, authentication, and routing. This platform is
projected to serve approximately 25,000 students.
</p>
</div>

        <div className='h-96 max-w-xl  bg-purple-600  rounded-lg flex flex-col flex-grow  items-center text-center text-wrap overflow-y-scroll no-scrollbar p-3 hover:font-bold  shadow-2xl'>
          <div>
            <Image className=' opacity-100 mt-4' src="/homestay.png" alt='profilepic' width={500} height={120} />
            </div>
            <h1 className='text-slate-200 '>HomeStay Website</h1>
            <h2  className='pb-4 font-bold ' ><Link href="https://github.com/UtkarshDevv/Bhumi-Homestay">Visit</Link></h2>
            <p>Techstack: React.js,Tailwind,Node.js,Git,VS-code
Developed a responsive homestay website using React, CSS, JavaScript, and Git. The project includes
multiple dynamic components and sliding image cards to enhance user interaction and visual appeal.</p>
</div>

<div className='h-96 max-w-xl  bg-purple-600  rounded-lg flex flex-col flex-grow  items-center text-center text-wrap overflow-y-scroll no-scrollbar p-3 hover:font-bold  shadow-2xl'>
          <div>
            <Image className=' opacity-100 mt-4' src="/portfolio.png" alt='profilepic' width={400} height={120} />
            </div>
            <h1 className='text-slate-200 '>Portfolio Website</h1>
            <h2  className='pb-4 font-bold ' ><Link href="https://utkarsh-sinhaa.vercel.app/index.html">Visit</Link></h2>
            <p>Techstack: React.js,Bootstrap,Vercel,Git,Javascript
This is my portfolio website to design the frontend I have used Html,CSS and Bootstrap and for backend I
have use Javascript. To integrate form I have used Formspree api to get form details to my mail.</p>
</div>


        
        </section>

        

        <footer className="bg-slate-700 text-white text-center p-4">
  <div className="container mx-auto p-4 pt-6 pb-12">
    <div className="flex flex-wrap justify-center mb-4">
      <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-4 mb-4 lg:mb-0">
        <h5 className="uppercase text-gray-200 font-bold mb-2">About Me</h5>
        <ul className="list-none mb-0">
          <li className="mt-2">I'm a full-stack developer with a passion for building innovative web applications.</li>
          <li className="mt-2">I have expertise in React, Node.js, Express.js, MongoDB, and more.</li>
        </ul>
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-4 mb-4 lg:mb-0">
        <h5 className="uppercase text-gray-200 font-bold mb-2">Quick Links</h5>
        <ul className="list-none mb-0">
          <li className="mt-2"><Link href="#home">Home</Link></li>
          <li className="mt-2"><Link href="#about">About</Link></li>
          <li className="mt-2"><Link href="#skills">Skills</Link></li>
          <li className="mt-2"><Link href="#projects">Projects</Link></li>
        </ul>
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 xs:w-full px-4 mb-4 lg:mb-0">
        <h5 className="uppercase text-gray-200 font-bold mb-2">Get in Touch</h5>
        <ul className="list-none mb-0">
          <li className="mt-2"><Link href="mailto:utkarshsinha2122@gmail.com">Email: Utkarsh Sinha</Link></li>
          <li className="mt-2"><Link href="https://wa.me/917518075299">WhatsApp: 7518075299</Link></li>
          <li className="mt-2"><Link href="https://www.linkedin.com/in/utkarsh-sinha-028225221/">LinkedIn: Utkarsh_Sinha</Link></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="text-center p-4">
    <p>&copy; 2023 Utkarsh Sinha. All rights reserved.</p>
  </div>
</footer>
    </main>
  );
}

