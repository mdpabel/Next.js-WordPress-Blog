import React from 'react';
import { genPageMetadata } from '../seo';

export const dynamic = 'force-static';

export const metadata = genPageMetadata({ title: 'About' });

const Contact = () => {
  return (
    <div className='mx-auto px-6 py-4 max-w-6xl'>
      {/* Heading */}
      <h1 className='mb-8 font-semibold text-4xl text-center text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-[1.1em] tracking-tight'>
        Get in Touch
      </h1>

      {/* Description */}
      <p className='mb-12 text-center text-zinc-700 dark:text-zinc-300'>
        Have a question or want to work together? Fill out the form below, and
        I&apos;ll get back to you as soon as possible.
      </p>

      {/* Form */}
      <form className='space-y-8 mx-auto max-w-2xl'>
        {/* Name Field */}
        <div>
          <label
            htmlFor='name'
            className='block font-medium text-sm text-zinc-800 dark:text-zinc-300'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='border-gray-300 dark:border-gray-600 mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 w-full text-zinc-800 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none'
            placeholder='Your full name'
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor='email'
            className='block font-medium text-sm text-zinc-800 dark:text-zinc-300'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='border-gray-300 dark:border-gray-600 mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 w-full text-zinc-800 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none'
            placeholder='Your email address'
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor='message'
            className='block font-medium text-sm text-zinc-800 dark:text-zinc-300'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={5}
            className='border-gray-300 dark:border-gray-600 mt-2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-600 w-full text-zinc-800 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none'
            placeholder='Write your message here...'
            required></textarea>
        </div>

        {/* Submit Button */}
        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-md font-medium text-white transition'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
