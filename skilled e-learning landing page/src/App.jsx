import './App.css';
import CourseCard from './components/CourseCard';
import Button from './components/Button';
import { cards } from './cards';
import HeroImage from './components/HeroImage';

function App() {
  return (
    <>
      <main>
        <nav>
          <h1>
            <a href='#'>skilled</a>
          </h1>
          <Button text='Get Started' type='button-nav' />
        </nav>
        <header>
          <div className='text-group'>
            <h1 className='heading'>Maximize skill, minimize budget</h1>
            <p className='header-text'>
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
            <Button text='Get Started' type='button-header' />
          </div>
          <HeroImage />
        </header>
        <section className='course-section'>
          <div className='courses'>Check out our most popular courses!</div>
          {cards.map((card) => (
            <CourseCard
              img={card.imgSource}
              title={card.title}
              text={card.text}
              key={card.title}
            />
          ))}
        </section>
      </main>

      <footer>
        <div className='footer-container'>
          <h1>
            <a href='#' className='footer-link'>skilled</a>
          </h1>
          <Button text='Get Started' type='button-footer' />
        </div>
      </footer>
    </>
  );
}

export default App;
