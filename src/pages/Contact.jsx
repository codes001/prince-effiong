import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import hero from '../assets/images/hero.jpg';
import { Loader } from '../components';
import { socialLinks } from '../constants';
import { Link } from 'react-router-dom';

const Contact = () => {
  const formRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');

  const [loading, setLoading] = useState(false);

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //RESPONSE VALUES
    const newRes = {
      name,
      email,
      message,
    };

    //CLIENT SIDE VALIDATION
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setError('* All fields are required');
      setTimeout(() => {
        setError('');
      }, 3000);

      return;
    } else {
      //SET RESPONSE TO LOCAL STORAGE
      sessionStorage.setItem('response', JSON.stringify(newRes));

      console.log('Form submission', newRes);

      try {
        if (!validateEmail(email)) {
          setError('* Invalid email address');
          setTimeout(() => {
            setError('');
          }, 3000);
          return;
        }
        setLoading(true);

        //EMAILJS FUNCTIONALITY
        const sendMessage = await emailjs.send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            to_name: 'Effiong Prince',
            from_email: email,
            to_email: 'prybertocode@gmail.com',
            message: message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        );
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);

          setName('');
          setEmail('');
          setMessage('');
        }, 2000);
      }
    }
  };

  return (
    <section className='relative flex gap-8 lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text !-mb-4 blue-gradient_text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <h3 className='font-bold text-red-500'>{error}</h3>
          <label className='text-slate-300 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className='text-slate-300 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Enter your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className='text-slate-300 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Drop your message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn text-lg sm:text-xl uppercase'
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 grid gap-4 py-8 px-3 place-items-center w-full border border-blue-500'>
        {socialLinks.map((link, index) => (
          <div
            key={link.name}
            className='bg-gray-200 cursor-pointer text-slate-300 w-full text-center py-6 px-4 rounded-md font-bold uppercase text-lg transition-all duration-150 hover:bg-gray-700'
          >
            <Link to={link.link} target='_blank'>
              {/* I'll get react-icons for the icon */}
              {/* {link.iconUrl} */}
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
