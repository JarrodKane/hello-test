import { Card } from '@/app/types/data';
import ImageBox from '@/components/atoms/imageBox';
import { clsx } from 'clsx';

type ProductCardProps = {
  card: Card;
  className?: string;
};

const ProductCard = ({ card, className }: ProductCardProps) => {
  const cardClasses = clsx('card', className);

  return (
    <div className={cardClasses}>
      <ImageBox
        image={card.img}
        bgColor='bg-brand-green-light'
        // className='rounded-tl-[141px] rounded-tr-[45px] rounded-bl-[82px] rounded-br-[150px] max-w-[35.625rem] max-h-[717px] '
      />
      {card?.title}
    </div>
  );
};

export default ProductCard;
