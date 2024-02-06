import Link from '@/app/components/atoms/link';
import Section from '@/app/components/layouts/section';
import Image from 'next/image';

const Navbar = () => {
  return (
    <Section className='bg-brand-green-light'>
      <nav className='flex items-center justify-between  flex-grow'>
        <Image
          src='/img/Rivo.png'
          alt='Logo'
          className='h-4 w-auto'
          width={94}
          height={49}
        />
        <div className='flex items-center space-x-4 text-brand-base'>
          <Link url='#' className='text-brand-green-dark' variant='link'>
            HOME
          </Link>
          <Link url='#' className='text-brand-green-dark' variant='outline'>
            SHOP
          </Link>
          <Link url='#' className='text-brand-green-dark' variant='primary'>
            FEATURES
          </Link>
          <Link url='#' className='text-brand-green-dark' variant='primary'>
            CONTACT
          </Link>
        </div>
        <div className='flex space-x-4  items-center'>
          <div>ICON</div>
          <Link url='#' variant='outline'>
            LOGIN
          </Link>
        </div>
      </nav>
    </Section>
  );
};

export default Navbar;
