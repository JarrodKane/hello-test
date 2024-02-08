import { HeroSection } from '@/app/types/data';
import ImageBox from '@/components/atoms/imageBox';
import Link from '@/components/atoms/link';
import Text from '@/components/atoms/text';
import { extractClasses } from '@/utils/index';
import clsx from 'clsx';
import React from 'react';

// This component is rather custom and not all that flexible.
// Depending on the project and designs, I would likely refactor this to be more flexible and dynamic
// but I felt for this one it made sense for now to leave it as a custom component

const HeroSection: React.FC<HeroSection> = ({ title, subtitle, linkButton, heroImage }) => {
  const { content: titleContent, classesString: titleClassesString } = extractClasses(title);
  const { content: subTitleContent, classesString: subTitleClassesString } = extractClasses(subtitle);

  let linkContent, url, linkButtonClassesString, imageDetails, linkVariant;

  // TODO: Refactor this to use the extractClasses function, and clean up LinkButton type
  if (linkButton) {
    const { content: linkContentValue, url: linkUrl, variant: linkVar, ...linkButtonClasses } = linkButton;

    linkContent = linkContentValue;
    url = linkUrl;
    linkButtonClassesString = clsx(Object.values(linkButtonClasses));
    linkVariant = linkVar;
  }

  if (heroImage) {
    imageDetails = heroImage;
  }
  return (
    <div className='flex pb-20'>
      <div className='w-1/2 flex flex-col  space-y-[2.688rem]'>
        <Text className={`${titleClassesString} pt-[1.375rem]`}>{titleContent}</Text>
        <Text className={`${subTitleClassesString} w-4/6`}>{subTitleContent}</Text>
        {url && linkVariant && (
          <Link url={url} variant={linkVariant} className={linkButtonClassesString}>
            {linkContent}
          </Link>
        )}
      </div>
      <div className='w-1/2 flex justify-end items-center h-full '>
        {imageDetails && <ImageBox image={imageDetails} />}
      </div>
    </div>
  );
};

export default HeroSection;

// Originally I wanted to take the png of the woman with a transparent bg and place it in, with a changing div, as well as placing the two svg's on top of the image, but I decided to just do the image for now
// "imageURL": "pexels-dima-valkov-6402847 2.png",
// <ImageBox
//   image={imageDetails}
//   bgColor='bg-brand-green-light'
//   className='rounded-tl-[141px] rounded-tr-[45px] rounded-bl-[82px] rounded-br-[150px] max-w-[35.625rem] max-h-[717px] '
// />
