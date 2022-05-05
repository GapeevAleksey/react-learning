import { func } from 'prop-types';
import React, { useState } from 'react';

function AddTodo({onCreate}) {
  const [value, setValue] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    if (value.trim()) {
      onCreate(value);
    }
  }
  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Add ToDo</button>
    </form>
  );
}

export default AddTodo;
