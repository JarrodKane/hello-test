import * as Content from '@/app/components/layouts/section';
import { extractClasses } from '@/utils/index';
import Text from './components/atoms/text';
import Hero from './components/molecules/hero';
import { Data, SectionType } from './types/data';

const renderComponent = (section: SectionType) => {
  const { content: titleContent, classesString: titleClassesString } = extractClasses(section.title);

  const { content: subTitleContent, classesString: subTitleClassesString } = extractClasses(section.subtitle);

  console.log(titleClassesString);

  switch (section.type) {
    case 'hero':
      if ('heroImage' in section) {
        return <Hero {...section} />;
      }
      break;
    case 'productSection':
      return (
        <Content.Header>
          <Text className={`${titleClassesString}`}>{titleContent}</Text>
          {subTitleContent && <Text className={subTitleClassesString}>{subTitleContent}</Text>}
          <Content.Body>
            <div>Grid</div>
          </Content.Body>
        </Content.Header>
      );

    default:
      return <div>Test</div>;
  }
};

export default async function Home() {
  const data = await getData();

  if (!data) {
    //  TODO - handle error
    return <div>Loading...</div>;
  }

  const dataArray = Object.entries(data);

  return (
    <main>
      {dataArray.map(([key, value]) => (
        <Content.Section key={key} className={value.bgColor}>
          {renderComponent(value)}
        </Content.Section>
      ))}
    </main>
  );
}

export async function getData() {
  try {
    const res = await fetch('http://localhost:3000/data.json', {
      next: { revalidate: 60 },
    });
    const data: Data = await res.json();

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // throw error;
    // TODO - handle error
  }
}
