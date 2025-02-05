'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function FormSection() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function handleFilter(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('region', value);
    } else {
      params.delete('region');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className='flex justify-center max-w-[1280px] mx-auto w-full mt-[3rem] mb-[3rem] max-[640px]:mb-[2rem] h-[3.5rem] max-[640px]:h-full max-[640px]:px-4 max-[640px]:mt-[1.5rem]'>
      <form className='flex w-full flex-wrap justify-between h-full max-[640px]:gap-[2.5rem]'>
        <div className='relative shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] w-[30rem] h-full max-[640px]:w-[343px]'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-[2rem] pointer-events-none h-full'>
            <Image src='/search.svg' width={18} height={18} alt='search' />
          </div>
          <input
            type='search'
            id='default-search'
            className='outline-none block w-full h-full p-4 ps-[4.6rem] text-sm text-gray-900 rounded-md bg-white dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white'
            placeholder='Search for a country...'
            required
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get('query')?.toString()}
          />
        </div>
        <div className='w-[12.5rem] max-[640px]:h-[48px]'>
          <select
            id='countries'
            className='bg-white text-gray-900 text-sm font-normal rounded-md px-[1.5rem] focus:ring-blue-500 block w-full h-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white shadow-[0_2px_9px_0_rgba(0,0,0,0.05)]'
            onChange={(e) => handleFilter(e.target.value)}
            value={searchParams.get('region')?.toString() || ''}
          >
            <option value=''>Filter by Region</option>
            <option value='africa'>Africa</option>
            <option value='americas'>Americas</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>
        </div>
      </form>
    </div>
  );
}
