import ImageBox from '@/app/components//atoms/imageBox';
import Link from '@/app/components/atoms/link';
import Text from '@/app/components/atoms/text';
import { HeroSection } from '@/app/types/data';
import clsx from 'clsx';
import React from 'react';

const HeroSection: React.FC<HeroSection> = ({
  title,
  subtitle,
  linkButton,
  heroImage,
}) => {
  const { content: titleContent, ...titleClasses } = title;
  const { content: subTitleContent, ...subTitleClasses } = subtitle;
  const titleClassesString = clsx(Object.values(titleClasses));
  const subTitleClassesString = clsx(Object.values(subTitleClasses));

  let linkContent, url, linkButtonClassesString, imageDetails, linkVariant;

  if (linkButton) {
    const {
      content: linkContentValue,
      url: linkUrl,
      variant: linkVar,
      ...linkButtonClasses
    } = linkButton;

    linkContent = linkContentValue;
    url = linkUrl;
    linkButtonClassesString = clsx(Object.values(linkButtonClasses));
    linkVariant = linkVar;
  }

  if (heroImage) {
    imageDetails = heroImage;
  }
  return (
    <div className='flex '>
      <div className='w-1/2 flex flex-col  space-y-[2.688rem]'>
        <Text className={`${titleClassesString} pt-[1.375rem]`}>
          {titleContent}
        </Text>
        <Text className={subTitleClassesString}>{subTitleContent}</Text>
        {url && linkVariant && (
          <Link
            url={url}
            variant={linkVariant}
            className={linkButtonClassesString}
          >
            {linkContent}
          </Link>
        )}
      </div>
      <div className='w-1/2 flex justify-end items-center  h-full '>
        {imageDetails && (
          <>
            <ImageBox
              image={imageDetails}
              bgColor='brand-green-light'
              className='rounded-tl-[141px] rounded-tr-[45px] rounded-bl-[82px] rounded-br-[150px] max-w-[35.625rem] max-h-[717px] '
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
