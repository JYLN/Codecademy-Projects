import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          name='name'
          type='text'
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <label htmlFor='phone'>Phone:</label>
        <input
          id='phone'
          name='phone'
          type='tel'
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}'
        />
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          name='email'
          type='email'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
