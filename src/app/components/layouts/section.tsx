import { clsx } from 'clsx/lite';
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<ContainerProps> = ({ children, className }) => {
  const sectionClasses = clsx(
    'flex  items-center  px-[174px] py-[4rem]',
    className
  );

  return <div className={sectionClasses}>{children}</div>;
};

export default Section;
