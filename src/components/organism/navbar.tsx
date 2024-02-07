import Icon from '@/components/atoms/icon';
import Link from '@/components/atoms/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between  bg-brand-green-lightest  px-44 py-16 '>
      <Image src='/img/Rivo.png' alt='Logo' className='h-8 w-auto' width={94} height={49} />
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
  );
};

export default Navbar;
