import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <p className='font-extrabold text-white text-3xl border-slate-300 border-solid border px-8 py-1.5'>
          P.E
        </p>
      </NavLink>
      <nav className='flex text-md md:text-lg gap-5 uppercase font-bold'>
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
