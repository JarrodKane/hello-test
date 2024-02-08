import { ImageDetails } from '@/app/types/data';
import clsx from 'clsx';
import Image from 'next/image';

interface ImageBoxProps {
  image: ImageDetails;
  bgColor?: string;
  className?: string;
}

const ImageBox = ({ image, bgColor, className }: ImageBoxProps) => {
  const boxClasses = clsx(className, `${bgColor} `);

  return (
    <div className={boxClasses}>
      <Image
        src={`/img/${image.imageURL}`}
        alt='Hero Image'
        className='max-w-full max-h-full'
        width={image.width}
        height={image.height}
      />
    </div>
  );
};

export default ImageBox;
