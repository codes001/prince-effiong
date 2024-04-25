import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';

import { HomeInfo, Loader } from '../components';
// import videoBg from '../assets/video/bg.mp4';
const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-36 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <div className='w-full h-screen bg-black-500'>
        {/* <img src={videoBg} className='size-full' alt='' /> */}
      </div>
    </section>
  );
};

export default Home;
