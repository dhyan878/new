import React from 'react';
import airtel from "../assets/airtel.jpg";
import reliance from "../assets/reliance.jpg";
import sbi from "../assets/sbi.png";
import ongc from "../assets/ongc.png";
import vodaphone from "../assets/vodaphone.jpg";
import aai from "../assets/aai.jpg";
import aseb from "../assets/aseb.jpg";

const CompanyLogo = () => {
  const logos = [airtel, reliance, sbi, ongc, vodaphone, aai, aseb];

  return (
    <div className='w-full bg-white py-12 md:py-16 overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 md:mb-14 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
            <span className='text-green-800'>Our</span>{' '}
            <span className='text-green-600'>Clients</span>
          </h2>
          <p className='text-gray-800 text-lg md:text-xl max-w-xl mx-auto'>
            Trusted by industry leaders across multiple sectors
          </p>
        </div>

        <div className='relative'>
          {/*   class name marquee-wrapper' */}
          <div className='marquee-wrapper'>
            <div className='marquee-track'>
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className='logo-item'>
                  <img
                    src={logo}
                    alt="company logo"
                    className='h-10 md:h-12 w-auto max-w-[120px] md:max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-all duration-300'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
