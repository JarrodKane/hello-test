import { ImageDetails } from '@/app/types/data';
import clsx from 'clsx';
import Image from 'next/image';

interface ImageBoxProps {
  image: ImageDetails;
  bgColor?: string;
  className?: string;
}

// This component was going to be used when I was going to use transparent people images.
// I decided to go with a different approach and use the image directly
// This component could be used with transparent images, as well as allowing the user to dynamically change the background color

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
