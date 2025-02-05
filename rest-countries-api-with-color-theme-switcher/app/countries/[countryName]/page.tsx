import Image from 'next/image';
import Link from 'next/link';
export default async function Page({
  params,
}: {
  params: Promise<{ countryName: string }>;
}) {
  const countryName = (await params).countryName;
  const data = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  const details = await data.json();
  const languages = Object.values(details[0].languages);
  const currencies: string[] = [];
  Object.keys(details[0].currencies).forEach((currency) => {
    currencies.push(details[0].currencies[currency].name);
  });

  return (
    <div className='flex flex-col max-w-[1280px] w-full mx-auto dark:bg-[#202C36] dark:text-white max-[640px]:px-[1.75rem]'>
      <Link href={'/'}>
        <button className='block mt-[5rem] max-[640px]:mt-10 bg-white dark:bg-[#2B3844] text-[#111517] dark:text-white flex items-center gap-[10px] w-[8.5rem] h-[2.5rem] pl-[2rem] rounded-[6px] shadow-[0_0_7px_0_rgba(0,0,0,0.29)]'>
          <img src='/arrow.svg' className='fill-black dark:fill-white' />
          Back
        </button>
      </Link>
      <div className='flex mt-[5rem] max-[640px]:mt-16 gap-[7.5rem] max-[640px]:gap-11 max-[640px]:flex-col max-[640px]:flex-wrap'>
        <Image
          src={details[0].flags.svg}
          alt={details[0].flags.alt || 'There is no alt text for this flag'}
          width={0}
          height={0}
          style={{
            width: '35rem',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '10px',
          }}
        ></Image>
        <div className='w-full mt-[2.5rem] max-[640px]:mt-0 text-[#111517] dark:text-white'>
          <h1 className='font-extrabold text-[2rem]'>
            {details[0].name.common}
          </h1>
          <div className='flex flex-row max-[640px]:flex-col justify-between mt-[1.5rem] max-[640px]:mt-4 max-[640px]:gap-8 text-base max-[640px]:text-sm leading-[2rem] max-[640px]:leading-[2rem]'>
            <div>
              <p className='font-light'>
                <strong className='font-semibold'>Native Name: </strong>
                {
                  details[0].name.nativeName[
                    Object.keys(details[0].name.nativeName)[0]
                  ].official
                }
              </p>
              <p className='font-light'>
                <strong className='font-semibold'>Population: </strong>
                {details[0].population.toLocaleString('en-US')}
              </p>
              <p className='font-light'>
                <strong className='font-semibold'>Region: </strong>
                {details[0].region}
              </p>
              <p className='font-light'>
                <strong className='font-semibold'>Sub Region: </strong>
                {details[0].subregion}
              </p>
              <p className='font-light'>
                <strong className='font-semibold'>Capital: </strong>
                {details[0].capital[0]}
              </p>
            </div>
            <div>
              <p className='font-light'>
                <strong className='font-semibold'>Top Level Domain: </strong>
                {details[0].tld}
              </p>
              <p className='font-light'>
                <strong className='font-semibold'>Currencies: </strong>
                {currencies.join(', ')}
              </p>
              <p className='font-light'>
                <strong className='font-semibold'>Languages: </strong>
                {languages.join(', ')}
              </p>
            </div>
          </div>
          <div className='flex flex-wrap gap-[10px] max-[640px]:gap-4 mt-[4.25rem] max-[640px]:mt-8'>
            <span className='font-semibold leading-[1.5rem]'>
              Border Countries
            </span>
            <div className='flex flex-wrap gap-[10px]'>
              {details[0].borders?.map((border: any) => (
                <button
                  key={border}
                  className='w-[6rem] h-[1.75rem] bg-white dark:bg-[#2B3844] rounded-[3px] shadow-[0_0_4px_1px_rgba(0,0,0,0.1)]'
                >
                  {border}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
