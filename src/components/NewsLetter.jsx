import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const NewsLetter = () => {
  const theme = {
    primary: {
      bg: 'bg-emerald-600',
      darkerBg: 'bg-emerald-800',
      lightText: 'text-emerald-50',
      button: 'bg-emerald-500',
      buttonHover: 'hover:bg-emerald-600',
      focusRing: 'focus:ring-emerald-300'
    },
    accent: {
      gradientFrom: 'from-emerald-500',
      gradientVia: 'via-emerald-600',
      gradientTo: 'to-emerald-700'
    },
    white: 'text-white'
  };

  return (
    <section className='container mx-auto px-4 py-10'>
      <div className={`${theme.primary.bg} rounded-xl overflow-hidden relative group shadow-md transition-shadow duration-300`}>
        {/* Gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${theme.accent.gradientFrom} ${theme.accent.gradientTo} opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500`}></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-800 clip-path-slant hidden md:block"></div>
        </div>

        <div className='relative md:px-12 px-6 py-12 z-10'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
            {/* Text Section */}
            <div className={`${theme.white} text-center md:text-left max-w-lg`}>
              <h2 className='text-2xl sm:text-3xl font-bold mb-2'>Stay Updated</h2>
              <p className={`${theme.primary.lightText} text-sm sm:text-base`}>
                Join our community for exclusive insights and offers.
              </p>
            </div>

            {/* Form */}
            <form className='w-full max-w-md'>
              <div className='flex flex-col sm:flex-row gap-3 sm:gap-0'>
                <input 
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full sm:w-auto md:w-72 px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none bg-white/90 text-emerald-900 placeholder-emerald-400/70 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all duration-200"
                  required
                  aria-required="true"
                />
                <button
                  type="submit"
                  className={`${theme.primary.button} ${theme.white} ${theme.primary.buttonHover} w-full sm:w-auto px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md flex items-center justify-center gap-2 font-medium transition-all duration-200`}
                >
                  <span>Subscribe</span>
                  <HiArrowRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
