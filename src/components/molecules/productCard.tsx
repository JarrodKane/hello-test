import { Card } from '@/app/types/data';
import Currency from '@/components/atoms/currency';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';
import { extractClasses } from '@/utils/index';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  card: Card;
  className?: string;
  variant?: string;
};

// Variant is not used in this component, but it could be used to change the layout of the card and to disable stuff like the rating and price

const ProductCard = ({ card, className }: ProductCardProps) => {
  const cardClasses = clsx('card flex flex-col gap-y-10 ', className);
  const { content: titleContent, classesString: titleClassesString } = extractClasses(card.title);

  return (
    <div className={cardClasses}>
      <Link href={`#`} className='flex flex-grow'>
        <Image
          src={`/img/${card.img.imageURL}`}
          alt='Hero Image'
          className='w-full'
          width={card.img.width}
          height={card.img.height}
        />
      </Link>
      <div className='flex flex-col items-center w-auto'>
        <Text className={titleClassesString}>{titleContent}</Text>
        <Text className='text-brand-base text-center'>{card.desc}</Text>
        {card.price && (
          <div className='flex text-brand-base'>
            <Currency value={Number(card.price)} />
            <span className='mx-10'>|</span>
            {card.rating && (
              <Text className='flex gap-2'>
                {card.rating.toFixed(1)}
                <Icon type='star' />
              </Text>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
