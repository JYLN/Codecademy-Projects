import PropTypes from 'prop-types';

export default function Button({ text, onClick, btn }) {
  return btn ? (
    <button className='btn' onClick={onClick}>
      {text}
    </button>
  ) : (
    <button onClick={onClick}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  btn: PropTypes.bool,
};
