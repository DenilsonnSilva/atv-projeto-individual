import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Olá, meu nome é</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          DENILSON SILVA
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Estudante de programação.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Eu sou um estudante do curso de Sistemas para Internet da Universidade
          Católica de Pernambuco.
        </p>
      </div>
    </div>
  );
};

export default Home;
