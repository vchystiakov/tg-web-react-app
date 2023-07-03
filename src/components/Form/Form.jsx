// import React module
import React, { useState } from 'react';
// import styles
import './Form.css';

const Form = () => {
  // Creating state management for form variables
  const [Country, setCountry] = useState('');
  const [Street, setStreet] = useState('');
  const [subject, setSubject] = useState('physical');

  //Functions that will react on EventListeners onChange
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className={'form'}>
      <h3>Enter your data</h3>
      <input
        className={'input'}
        type="text"
        placeholder={'Country'}
        value={Country}
        onChange={onChangeCountry}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'Street'}
        value={Street}
        onChange={onChangeStreet}
      />
      <select value={subject} onChange={onChangeSubject} className={'select'}>
        <option value={'legal'}>Individual</option>
        <option value={'legal'}>Entity</option>
      </select>
    </div>
  );
};

export default Form;
