import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <p className='font-extrabold text-white text-3xl border-slate-300 border-solid'>
          P.E
        </p>
      </NavLink>
      <nav className='flex text-md md:text-lg gap-7 uppercase font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-white '
          }
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-white'
          }
        >
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-white'
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
