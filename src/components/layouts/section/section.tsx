import { clsx } from 'clsx';
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<ContainerProps> = ({ children, className }) => {
  const sectionClasses = clsx('flex flex-col items-center gap-20  px-44 py-16  justify-center w-full', className);

  return <div className={sectionClasses}>{children}</div>;
};

export default Section;
