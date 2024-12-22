import React, { useState } from 'react';

function MultiInputDisplay() {
  const [formValues, setFormValues] = useState({
    text: '',
    number: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="input-container">
      <div className="input-group">
        <input
          type="text"
          name="text"
          value={formValues.text}
          onChange={handleChange}
          placeholder="Enter text"
          className="input-field"
        />
        <p className="output">Text: {formValues.text}</p>
      </div>
      <div className="input-group">
        <input
          type="number"
          name="number"
          value={formValues.number}
          onChange={handleChange}
          placeholder="Enter number"
          className="input-field"
        />
        <p className="output">Number: {formValues.number}</p>
      </div>
      <div className="input-group">
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="input-field"
        />
        <p className="output">Email: {formValues.email}</p>
      </div>
    </div>
  );
}

export default MultiInputDisplay;
