import './css/App.css';
import data from './data.json';
import Category from './components/Category';

function App() {
  function getAvarage(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].score;
    }
    return Math.round(total / data.length);
  }
  return (
    <>
      <div className='results-summary-component'>
        <div className='result-section'>
          <h1>Your Result</h1>
          <div className='result'>
            <h1>{getAvarage(data)}</h1>
            <span>of 100</span>
          </div>
          <div className='description'>
            <h2>Great</h2>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>

        <div className='summary-section'>
          <h1 id='summary'>Summary</h1>
          {data.map((element) => (
            <Category
              category={element.category}
              icon={element.icon}
              score={element.score}
            />
          ))}
          <button id='continue'>Continue</button>
        </div>
      </div>
    </>
  );
}

export default App;
