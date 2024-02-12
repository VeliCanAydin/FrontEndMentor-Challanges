import FormInput from './components/FormInput';
import './App.css';
import { useState } from 'react';
import { calculateAge } from './utils/calculateAge';
import { numberInput } from './utils/numberInput';
import Counter from './components/Counter';

function App() {
  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  });

  const [age, setAge] = useState({
    years: '',
    months: '',
    days: '',
  });

  const [inputs, setInputs] = useState([
    {
      id: '1',
      name: 'day',
      placeholder: 'DD',
      size: '1',
      errorMessage: 'This field is required',
      maxLength: '2',
      pattern: '',
    },
    {
      id: '2',
      name: 'month',
      placeholder: 'MM',
      size: '1',
      errorMessage: 'This field is required',
      maxLength: '2',
    },
    {
      id: '3',
      name: 'year',
      placeholder: 'YYYY',
      size: '1',
      errorMessage: 'This field is required',
      maxLength: '4',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setAge(calculateAge(date.year, date.month, date.day));
  };

  const handleChange = (event) => {
    numberInput(event);
    setDate({ ...date, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div id='calculator'>
        <form onSubmit={handleSubmit} id='form' autoComplete='off'>
          <div id='input-section'>
            {inputs.map((input) => (
              <FormInput
                {...input}
                key={input.id}
                onChange={handleChange}
                input={date}
              />
            ))}
          </div>
          <div id='submit-section'>
            <input
              type='submit'
              value=''
              onInvalid={(e) => {
                e.preventDefault();
              }}
            />
          </div>
        </form>
        <div>
          <p className='date-heading'>
            <Counter targetNumber={age.years} />
            years
            {/* <span className='result'>{age.years.toString() || '--'}</span>years */}
          </p>
          <p className='date-heading'>
            <Counter targetNumber={age.months} />
            months
            {/* <span className='result'>{age.months.toString() || '--'}</span>
            months */}
          </p>
          <p className='date-heading'>
            <Counter targetNumber={age.days} />
            days
            {/* <span className='result'>{age.days.toString() || '--'}</span>days */}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
