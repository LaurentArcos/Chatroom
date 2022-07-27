import { useDispatch } from 'react-redux';
import MessageInput from './MessageInput/MessageInput';
import MessageSubmitButton from './MessageSubmitButton/MessageSubmitButton';
import './MessageForm.scss';
import { addNewMessage } from '../../actions/actions';

function MessageForm() {
  const dispatch = useDispatch();

  return (
    <form
      className="MessageForm"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addNewMessage());
      }}
    >
      <MessageInput />
      <MessageSubmitButton />
    </form>
  );
}

export default MessageForm;
