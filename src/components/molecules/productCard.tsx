import { Card } from '@/app/types/data';
import Currency from '@/components/atoms/currency';
import Icon from '@/components/atoms/icon';
import ImageBox from '@/components/atoms/imageBox';
import Text from '@/components/atoms/text';
import { clsx } from 'clsx';
import Link from 'next/link';

type ProductCardProps = {
  card: Card;
  className?: string;
  variant?: string;
};

const ProductCard = ({ card, className }: ProductCardProps) => {
  const cardClasses = clsx('card flex flex-col gap-y-10', className);

  return (
    <div className={cardClasses}>
      <Link href={`#`}>
        <ImageBox image={card.img} bgColor='bg-brand-green-light rounded ' />
      </Link>
      <div className='flex flex-col items-center'>
        <Text className='text-brand-base'>{card.title}</Text>
        <p>{card.desc}</p>
        {card.price && (
          <div className='flex text-brand-base'>
            <Currency value={Number(card.price)} />
            <span className='mx-10'>|</span>
            <Text className='flex gap-2'>
              {card.rating}
              <Icon type='star' />
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
