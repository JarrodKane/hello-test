import { clsx } from 'clsx';
import React, { ReactNode } from 'react';

type GridProps = {
  cols: number;
  children: ReactNode;
  className?: string;
};

type ColType = { [key: number]: string };

const Grid: React.FC<GridProps> = ({ cols, children, className }) => {
  // Passing in the value dynamically is likely to not work with tailwinds, right now I have it set to only be 3 and 4 columns only so it's not very dynamic or safe
  const colVariables: ColType = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  const gridClasses = clsx(`grid w-full   ${colVariables[cols]} gap-10 gap-y-20 `, className);
  return <div className={gridClasses}>{children}</div>;
};

export default Grid;
