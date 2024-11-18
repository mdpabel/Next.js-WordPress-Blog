import React from 'react';

const Newsletter = () => {
  return (
    <section className='mx-auto px-6 py-12 rounded-lg max-w-4xl'>
      <div className='space-y-4 text-center'>
        {/* Heading */}
        <h2 className='font-extrabold text-3xl text-neutral-900 dark:text-white'>
          Subscribe to our Newsletter
        </h2>

        {/* Description */}
        <p className='text-lg text-neutral-900 dark:text-white'>
          Stay updated with the latest blog posts, guides, and features.
        </p>

        {/* Input Form */}
        <form className='flex sm:flex-row flex-col justify-center sm:space-x-4 space-y-4 sm:space-y-0 mt-6'>
          <input
            type='email'
            className='dark:border-white/90 bg-card px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 w-full sm:w-auto text-gray-900 dark:text-foreground placeholder-muted-foreground focus:outline-none'
            placeholder='Enter your email address'
            required
          />
          <button
            type='submit'
            className='bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-md font-medium text-white transition'>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
