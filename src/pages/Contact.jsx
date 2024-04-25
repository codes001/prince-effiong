import emailjs from '@emailjs/browser';
// import { Canvas } from '@react-three/fiber';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert';
import { Alert, Loader } from '../components';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Effiong Prince',
          from_email: form.email,
          to_email: 'prybertocode@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation('idle');
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation('idle');

          showAlert({
            show: true,
            text: 'Failed to send',
            type: 'danger',
          });
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {/* {alert.show && <Alert {...alert} />} */}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-slate-300 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Enter your name'
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className='text-slate-300 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Enter your email address'
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className='text-slate-300 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Drop your message'
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type='submit' disabled={loading} className='btn'>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        Hello
      </div>
    </section>
  );
};

export default Contact;
