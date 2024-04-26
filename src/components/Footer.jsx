import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='text-white  text-center  footer-container'>
        <p>
          © {date} <strong>Prince Effiong</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
