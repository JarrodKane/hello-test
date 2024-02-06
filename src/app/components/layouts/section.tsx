import { clsx } from 'clsx/lite';
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<ContainerProps> = ({ children, className }) => {
  const sectionClasses = clsx('flex  items-center pt-8 px-16 pb-5', className);

  return <div className={sectionClasses}>{children}</div>;
};

export default Section;
