import { clsx } from 'clsx';
import React, { ReactNode } from 'react';

type BodyProps = {
  children: ReactNode;
  className?: string;
};

const Body: React.FC<BodyProps> = ({ children, className }) => {
  const bodyClasses = clsx('flex flex-col items-center w-full', className);

  return <div className={bodyClasses}>{children}</div>;
};

export default Body;
