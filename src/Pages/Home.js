import React from 'react';
import Banner from '../components/Banner';
import Recipes from '../components/Recipes';

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
      <Banner
        title="Embark on a Global Flavor Journey with FlavorFusion"
        type="home"
      />
        <section id='recipes' className='md:max-w-[1440px] mx-auto px-4 md:px'>
    <Recipes/>
    </section>
    </main>
  );
};

export default Home;
