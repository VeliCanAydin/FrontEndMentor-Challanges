import React, { useState, useEffect } from 'react';

const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationInterval;

    const startAnimation = () => {
      clearInterval(animationInterval);
      if (targetNumber === 0) {
        setCount(0);
        return;
      }

      const increment = targetNumber / 100;
      let currentCount = 0;

      animationInterval = setInterval(() => {
        if (currentCount < targetNumber) {
          currentCount += increment;
          setCount(Math.round(currentCount));
        } else {
          clearInterval(animationInterval);
        }
      }, 20);

      return () => clearInterval(animationInterval);
    };

    startAnimation();

    return () => clearInterval(animationInterval);
  }, [targetNumber]);

  return (
    <>
      <span className='result'>{targetNumber === 0 ? 0 : count || '- -'}</span>
    </>
  );
};

export default Counter;
