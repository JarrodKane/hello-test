type ProductCardProps = {
  children: React.ReactNode;
};

const ProductCard = ({ children }: ProductCardProps) => {
  return <div className='card'>{children}</div>;
};

export default ProductCard;
