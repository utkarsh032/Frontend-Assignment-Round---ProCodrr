import React from 'react';
import CountdownClock from '../components/CountdownClock';

const SignupPage = () => {
  return (
    <div className='bg-[#fff]'>
      <div className="h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url("/top-gon.svg")` }}></div>
      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between'>
        <div className='w-full lg:w-1/2 lg:pr-8'>
          <h1 className='text-[#6C63FF] text-4xl font-bold uppercase'>Ready to Launch In...</h1>
          {/* countdown */}
          <CountdownClock />
          <p className='text-sm text-[#9C9AB6] mt-4 lg:mt-6'>Sign up to find out more about the launch</p>
          <button className='btn border-none bg-[#6C63FF] text-[#fff] px-4 py-2 rounded-lg mt-4 lg:mt-6'>Sign Up</button>
        </div>
        <div className='mt-6 lg:mt-0'>
          <img src='rocket-launcher.svg' alt='rocket-launcher' />
        </div>
      </div>
      <div className="h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url("/bottom-gon.svg")` }}></div>
    </div>
  );
};

export default SignupPage;
