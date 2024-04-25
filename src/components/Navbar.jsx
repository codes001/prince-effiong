import { NavLink } from 'react-router-dom';

import { logo } from '../assets/images';

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <p className='font-extrabold text-white'>P.E</p>
      </NavLink>
      <nav className='flex text-md md:text-lg gap-7 uppercase font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'text-blue-600' : 'text-white '
          }
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? 'text-blue-600' : 'text-white'
          }
        >
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'text-blue-600' : 'text-white'
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
