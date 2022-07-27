import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './Message.scss';

function Message({ author, text }) {
  return (
    <div className="Message">
      <div className="Message__author">{author}</div>
      <div className="Message__text">{text}</div>
    </div>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
