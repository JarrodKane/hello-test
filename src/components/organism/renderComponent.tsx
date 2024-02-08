import Grid from '@//components/layouts/grid';
import Hero from '@//components/molecules/hero';
import ProductCard from '@//components/molecules/productCard';
import { SectionType } from '@/app/types/data';
import Icon from '@/components/atoms/icon';
import Link from '@/components/atoms/link';
import Text from '@/components/atoms/text';
import * as Content from '@/components/layouts/section';
import Time from '@/components/molecules/time';
import { extractClasses } from '@/utils/index';
import Image from 'next/image';

// This component holds all the logic for the section content that we get from the data.json file

export const renderComponent = (section: SectionType) => {
  const { content: titleContent, classesString: titleClassesString } = extractClasses(section.title);

  const { content: subTitleContent, classesString: subTitleClassesString } = extractClasses(section.subtitle);

  switch (section.type) {
    case 'hero':
      if ('heroImage' in section) {
        return (
          <Content.Section className={section?.bgColor}>
            <Hero {...section} />
          </Content.Section>
        );
      }
      break;
    case 'productSection':
      return (
        <Content.Section className={section?.bgColor}>
          <Content.Header className='items-center'>
            <Text className={`${titleClassesString}`}>{titleContent}</Text>
            {subTitleContent && <Text className={subTitleClassesString}>{subTitleContent}</Text>}
          </Content.Header>
          <Content.Body className='flex gap-16'>
            {'cards' in section && section.cards?.length && 'cols' in section ? (
              <Grid cols={section.cols}>
                {section.cards.map((card, index) => (
                  <ProductCard key={index} card={card} />
                ))}
              </Grid>
            ) : null}
            {'linkButton' in section && section.linkButton ? (
              <Link
                url={section.linkButton.url}
                variant={section.linkButton.variant}
                className='flex gap-3 self-center'
              >
                {section.linkButton.content} <Icon type='arrow' />
              </Link>
            ) : null}
          </Content.Body>
        </Content.Section>
      );
    case 'callToAction':
      return (
        <Content.Section>
          <div className={`${section?.bgColor} w-full flex rounded`}>
            <div className='w-4/5 flex'>
              {'img' in section && section.img ? (
                <Image
                  src={`/img/${section.img.imageURL}`}
                  alt='Hero Image'
                  className='max-w-full max-h-full self-end pl-20'
                  width={section.img.width}
                  height={section.img.height}
                />
              ) : null}
            </div>
            <div className='flex flex-col gap-8 p-20'>
              <Content.Header className='items-start'>
                <Text className={`${titleClassesString}`}>{titleContent}</Text>
                {subTitleContent && <Text className={subTitleClassesString}>{subTitleContent}</Text>}
              </Content.Header>
              <Content.Body className='gap-8'>
                {'expires' in section && section.expires && section.expires.show ? (
                  <Time expires={section.expires} />
                ) : null}
                {'linkButton' in section && section.linkButton ? (
                  <Link url={section.linkButton.url} variant={section.linkButton.variant} className='flex gap-3'>
                    {section.linkButton.content}
                  </Link>
                ) : null}
              </Content.Body>
            </div>
          </div>
        </Content.Section>
      );
    default:
      return <></>;
  }
};

// "expires": {
//   "show": true,
//   "date": "2022-01-01",
//   "time": "00:00:00"
// },
