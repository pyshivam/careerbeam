import type { NextPage } from 'next';

import CTAButton from './components/CTAButton';
import HomeCarousel from './components/HomeCarousel';

const Home: NextPage = () => {
  return (
    <div className="flex h-full w-full flex-col pb-8 md:flex-row md:pb-0">
      <div className="flex justify-start pb-6 md:h-full md:flex-col md:justify-center md:p-14 md:pr-5">
        <h1 className="justify-start text-4xl font-semibold leading-snug md:pt-10 md:text-6xl md:font-normal md:leading-snug">
          Explore. <br /> Upskill.
          <br /> Elevate.
        </h1>
        <div className="hidden md:block">
          <CTAButton />
        </div>
      </div>
      <HomeCarousel />
      <div className="block md:hidden">
        <CTAButton />
      </div>
    </div>
  );
};

export default Home;
