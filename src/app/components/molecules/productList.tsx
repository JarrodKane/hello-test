import React, { ReactNode } from 'react';

type ProductGridProps = {
  children: ReactNode;
};

const ProductGrid: React.FC<ProductGridProps> = ({ children }) => {
  return <div className='grid grid-cols-3 gap-4'>{children}</div>;
};

export default ProductGrid;
