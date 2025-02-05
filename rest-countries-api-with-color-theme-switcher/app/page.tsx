import Link from 'next/link';
import CountryCard from './components/CountryCard';
import FormSection from './components/FormSection';

interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    svg: string;
  };
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  // Get search parameters from URL
  const query =
    typeof searchParams.query === 'string'
      ? searchParams.query.toLowerCase()
      : '';
  const region =
    typeof searchParams.region === 'string'
      ? searchParams.region.toLowerCase()
      : '';

  // Fetch all countries
  const data = await fetch('https://restcountries.com/v3.1/all', {
    cache: 'force-cache',
  });
  const countries: Country[] = await data.json();

  // Filter countries based on search parameters
  const filteredCountries = countries.filter((country) => {
    const nameMatch = country.name.common.toLowerCase().includes(query);
    const regionMatch = region ? country.region.toLowerCase() === region : true;
    return nameMatch && regionMatch;
  });

  return (
    <>
      <FormSection />
      <div className='flex flex-wrap justify-center gap-[4.5rem] max-[640px]:gap-[2.5rem] max-w-[1280px] w-full mx-auto dark:bg-[#202C36] dark:text-white no-scrollbar'>
        {filteredCountries.map((country) => (
          <Link
            href={`/countries/${country.name.common}`}
            key={country.name.common}
          >
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flagUrl={country.flags.svg}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
