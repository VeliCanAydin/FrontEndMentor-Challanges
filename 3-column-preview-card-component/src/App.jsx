import './App.css';

function App() {
  return (
    <>
      <main>
        <section className='sedans'>
          <img
            src='/images/icon-sedans.svg'
            alt='Sedan image'
            className='section-image'
          />
          <h1>Sedans</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the cit y or on your next road trip.
          </p>
          <button className='button sedans-button'>Learn More</button>
        </section>
        <section className='suvs'>
          <img src='/images/icon-suvs.svg' alt='Sedan image' />
          <h1>SUVs</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.{' '}
          </p>
          <button className='button suvs-button'>Learn More</button>
        </section>
        <section className='luxury'>
          <img src='/images/icon-luxury.svg' alt='Sedan image' />
          <h1>Luxury</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className='button luxury-button'>Learn More</button>
        </section>
      </main>
    </>
  );
}

export default App;
