import { clsx } from 'clsx';
import React, { ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const headerClasses = clsx('flex flex-col w-full', className);

  return <div className={headerClasses}>{children}</div>;
};

export default Header;
