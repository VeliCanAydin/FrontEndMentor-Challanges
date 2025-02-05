'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
    setIsDarkMode(initialTheme === 'dark');
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <header className='text-[#111517] bg-white dark:bg-[#2B3844] h-[5rem] flex justify-between items-center shadow-[0_2px_4px_0_rgba(0,0,0,0.06)]'>
      <div className='flex justify-between items-center max-w-[1280px] w-full mx-auto max-[640px]:px-4'>
        <div className='text-2xl font-extrabold not-italic dark:text-white max-[640px]:text-sm'>
          <Link href='/'>Where in the world?</Link>
        </div>
        <button
          onClick={toggleTheme}
          className='inline-flex justify-center items-center gap-[8px] text-[111517] dark:text-white font-semibold py-2 px-4 rounded max-[640px]:text-xs'
        >
          <Image
            src={isDarkMode ? '/sun.svg' : '/moon.svg'}
            alt='moon'
            width={20}
            height={20}
          />
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
