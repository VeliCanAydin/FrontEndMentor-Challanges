import React from 'react';

interface CountryCardProps {
  name: string;
  population: number;
  region: string;
  capital: string[];
  flagUrl: string;
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  population,
  region,
  capital,
  flagUrl,
}) => {
  return (
    <div className='w-[16.5rem] h-[21rem] text-[#111517] dark:text-white bg-white dark:bg-[#2B3844] shadow-lg rounded-lg overflow-hidden shadow-[0_0_7px_2px_rgba(0,0,0,0.03)]'>
      <img
        src={flagUrl}
        alt={`${name} flag`}
        className='w-full h-[10rem] object-cover'
      />
      <div className='p-6 h-[11rem] dark:bg-[#2B3844]'>
        <h2 className='text-lg font-bold mb-4'>{name}</h2>
        <p className='text-sm mb-2'>
          <strong>Population:</strong> {population.toLocaleString('en-IN')}
        </p>
        <p className='text-sm mb-2'>
          <strong>Region:</strong> {region}
        </p>
        <p className='text-sm'>
          <strong>Capital:</strong> {capital && capital.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
