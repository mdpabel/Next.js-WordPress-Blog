import React from 'react';
import { genPageMetadata } from '../seo';
import { MdEmail } from 'react-icons/md';
import { Phone } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata = genPageMetadata({ title: 'Contact' });

const Contact = () => {
  return (
    <div className='mx-auto px-6 py-4 max-w-6xl'>
      {/* Heading */}
      <div className='space-y-2 md:space-y-5 pt-6 pb-8 border-b border-b-neutral-400'>
        <h1 className='font-extrabold text-3xl text-foreground sm:text-4xl md:text-6xl leading-9 sm:leading-10 md:leading-14 tracking-tight'>
          Get in Touch
        </h1>
        <p className='text-lg text-muted-foreground leading-7'>
          Have a question or want to work together? Fill out the form below, and
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {/* Form */}

      <div className='grid grid-cols-3 pt-6'>
        <ul className='flex flex-col gap-2'>
          <li className='flex items-center gap-2'>
            <MdEmail />
            <span>admin@nextgenwordpress.com</span>
          </li>
          <li className='flex items-center gap-2'>
            <Phone />
            <span>+44 7878 798374</span>
          </li>
        </ul>
        <form className='space-y-8 col-span-2 mx-auto w-full'>
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
    </div>
  );
};

export default Contact;
