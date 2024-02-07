import { clsx } from 'clsx';
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<ContainerProps> = ({ children, className }) => {
  // For some reason when using pb-40 which is 10rem and then applying a className like pb-16 the pb-16 will not work, it gets applied first rather than last
  // Interestingly, when using pb-10 applies like you would expect when passed in the className
  // That's why I am using the custom [10rem] here
  const sectionClasses = clsx('flex  items-center  px-[174px] py-[4rem] pb-[10rem] justify-center w-full', className);

  return <div className={sectionClasses}>{children}</div>;
};

export default Section;
