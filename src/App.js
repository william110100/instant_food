import React, { useEffect, useState } from 'react';
import FoodImage from './images/food.svg';

const App = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className='min-h-screen w-screen flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-around' 
      style={{background: 'linear-gradient(to bottom, #f0f4fd, #a1a3ba)'}}>
      <div className={`${isAnimated ? 'scale-y-100' : 'scale-y-0'} mt-10 text-center lg:text-left transform transition duration-1000 ease-in-out`}>
        <h1 className='font-black text-4xl lg:text-5xl'>
          Fresh Healthy <br />
          <span className='font-quicksand font-light'>Delicious Salads.</span>
        </h1>
        <p className='text-base text-gray-700'>We made fresh and healthy foods</p>
        <span className='inline-block bg-indigo-500 px-10 py-4 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5'>Explore</span>
      </div>
      <img src={FoodImage} alt='food' className={`${isAnimated ? 'scale-150' : 'translate-x-full translate-y-full'} xs:w-64 sm:w-64 md:w-64 lg:w-screen lg:max-w-md transform transition duration-1000 ease-in-out`} />
    </div>
  );
}

export default App;
