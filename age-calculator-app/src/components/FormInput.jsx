import { useState } from 'react';
import './FormInput.css';

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  return (
    <div id='input-container'>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        id={props.id}
        name={props.name}
        type='text'
        placeholder={props.placeholder}
        size={1}
        maxLength={props.maxLength}
        required
        onChange={props.onChange}
        onBlur={() => {
          setFocused(true);
        }}
        focused={focused.toString()}
      />
      <span className='error'>{props.errorMessage}</span>
    </div>
  );
};

export default Input;
