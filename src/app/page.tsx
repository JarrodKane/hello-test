import Section from './components/layouts/section';
import Hero from './components/molecules/hero';
import { Data } from './types/data';

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
        <Section key={key} className={value.bgColor}>
          {value.type === 'hero' ? <Hero {...value} /> : <div>Test</div>}
        </Section>
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
