import { Link } from 'react-router-dom';

import { CTA } from '../components';
import { projects } from '../constants';
import { arrow } from '../assets/icons';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{' '}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-300 mt-2 leading-relaxed text-justify md:text-left'>
        I've honed my skills in web development to provide innovative solutions
        for individuals and businesses alike. My journey in the world of coding
        began with a simple fascination for turning lines of code into visually
        appealing, user-friendly websites, and it has since evolved into a
        commitment to delivering high-quality, custom web solutions tailored to
        your unique needs. Whether you're starting from scratch or looking to
        revamp your existing web presence, I'm here to turn your ideas into
        reality. Let's embark on a journey to create a website that not only
        meets your expectations but surpasses them.
        <br />
        Feel free to explore my portfolio to see examples of my work, and don't
        hesitate to reach out.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 my-20 gap-8'>
        {projects.map((project) => (
          <div
            className='lg:w-[400px] h-max pb-6 w-full bg-black/20 rounded'
            key={project.name}
          >
            <div className=' flex flex-col'>
              <img
                src={project.img}
                alt={project.name}
                className='w-full flex-1 !h-40 sm:h-64 object-cover mb-4'
              />
              <div className='p-6'>
                <h4 className='text-2xl text-slate-300 font-poppins font-semibold'>
                  {project.name}
                </h4>
                <p className='mt-2 text-slate-400 text-justify'>
                  {project.description}
                </p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold btn !w-max text-blue-600'
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
