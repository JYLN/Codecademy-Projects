import React from 'react';

import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString('en-US').split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input
          id='title'
          name='title'
          type='text'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <label htmlFor='contact'>Contact:</label>
        <ContactPicker
          id='contact'
          name='contact'
          value={contact}
          contacts={contacts}
          onChange={({ target }) => setContact(target.value)}
        />
        <label htmlFor='date'>Date:</label>
        <input
          id='date'
          name='date'
          type='date'
          value={date}
          onChange={({ target }) => setDate(target.value)}
          min={getTodayString()}
        />
        <label htmlFor='time'>Time:</label>
        <input
          id='time'
          name='time'
          type='time'
          value={time}
          onChange={({ target }) => setTime(target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
