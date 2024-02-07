import Icon from '@/app/components/atoms/icon';
import Link from '@/app/components/atoms/link';
import Section from '@/app/components/layouts/section/section';
import Image from 'next/image';

const Navbar = () => {
  return (
    <Section className='bg-brand-green-lightest  pb-16'>
      <nav className='flex items-center justify-between flex-grow'>
        <Image
          src='/img/Rivo.png'
          alt='Logo'
          className='h-8 w-auto'
          width={94}
          height={49}
        />
        <div className='flex items-center space-x-[3.563rem] text-brand-base text-brand-green-dark'>
          <Link url='#' variant='link'>
            HOME
          </Link>
          <Link url='#' variant='link'>
            SHOP
          </Link>
          <Link url='#' variant='link'>
            FEATURES
          </Link>
          <Link url='#' variant='link'>
            CONTACT
          </Link>
        </div>
        <div className='flex space-x-[3.563rem]  items-center'>
          <Icon type='shopping-bag' state='active' />
          <Link url='#' variant='outline'>
            LOGIN
          </Link>
        </div>
      </nav>
    </Section>
  );
};

export default Navbar;
