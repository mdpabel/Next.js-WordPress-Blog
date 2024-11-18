import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import me from '@/../public/me.webp';

export const dynamic = 'force-static';

const About = () => {
  return (
    <div className='mx-auto px-6 py-4 max-w-6xl'>
      {/* Introduction Section */}
      <section className='gap-12 grid grid-cols-1 lg:grid-cols-2 pt-12 lg:pt-28'>
        <div className='lg:ml-20'>
          <Image
            className='rounded-2xl aspect-square lg:rotate-3'
            src={me}
            width={600}
            height={1000}
            alt='Me'
            loading='eager'
          />
        </div>
        <div className='space-y-10 lg:order-first lg:row-span-2 py-10 lg:py-0'>
          <h1 className='font-semibold text-4xl text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-[1.1em] tracking-tight'>
            I’m MD Pabel. I live in Bangladesh, where I solve problems with code
            and secure websites.
          </h1>
          <div className='space-y-4'>
            <p className='text-zinc-700 dark:text-zinc-300'>
              My journey in technology began in a small town in Bangladesh, and
              since then, I’ve been deeply involved in web security and
              full-stack development. Over the years, I've had the privilege to
              work with clients from around the world, solving real-world
              problems by cleaning hacked websites, launching secure web
              platforms, and developing software solutions that make an impact
              globally.
            </p>
            <p className='text-zinc-700 dark:text-zinc-300'>
              I have a deep passion for web security, ensuring websites remain
              free of malware and safe from cyber threats. My work has spanned
              from fixing over 4,100 hacked websites to launching successful
              projects and collaborating with clients globally.
            </p>
            <p className='text-zinc-700 dark:text-zinc-300'>
              My core belief is that technology should not just be about
              innovation, but also about reliability, security, and making a
              positive impact. With over 6.5 years of experience in the real
              world and a strong foundation in problem-solving, I am excited to
              continue pushing the boundaries of technology and web security.
            </p>
          </div>
        </div>
        <div className='lg:ml-10'>
          <ul className='space-y-4'>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className='flex space-x-4 font-medium text-sm text-zinc-800 hover:text-teal-500 dark:hover:text-teal-500 dark:text-zinc-200 transition group'>
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
            <li className='border-gray-300 dark:border-gray-600 pt-5 border-t'>
              <Link
                href='mailto:pabel7396@gmail.com'
                className='flex space-x-4 font-medium text-sm text-zinc-800 hover:text-teal-500 dark:hover:text-teal-500 dark:text-zinc-200 transition group'>
                <MdOutlineEmail className='w-5 h-5' />
                <span>pabel7396@gmail.com</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

const socialLinks = [
  {
    href: '#',
    icon: <FaXTwitter className='w-5 h-5' />,
    label: 'Follow on X',
  },
  {
    href: '#',
    icon: <FaInstagram className='w-5 h-5' />,
    label: 'Follow on Instagram',
  },
  {
    href: '#',
    icon: <FaGithub className='w-5 h-5' />,
    label: 'Follow on GitHub',
  },
  {
    href: '#',
    icon: <FaLinkedin className='w-5 h-5' />,
    label: 'Follow on LinkedIn',
  },
];

// ListItem Component
const ListItem = ({
  leftText,
  rightText,
}: {
  leftText: string;
  rightText: string | number;
}) => {
  return (
    <li className='flex justify-between'>
      <span className='text-zinc-800 dark:text-zinc-300'>{leftText}</span>
      <span className='bg-slate-200 dark:bg-slate-700 px-3 rounded-full'>
        {rightText}
      </span>
    </li>
  );
};

export default About;
