import { useDispatch } from 'react-redux';
import MessageInput from './MessageInput/MessageInput';
import MessageSubmitButton from './MessageSubmitButton/MessageSubmitButton';
import './MessageForm.scss';
import { sendMessage } from '../../actions/actions';
import MessageAuthorInput from './MessageAuthorInput/MessageAuthorInput';

function MessageForm() {
  const dispatch = useDispatch();

  return (
    <form
      className="MessageForm"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(sendMessage());
      }}
    >
      <MessageInput />
      <MessageAuthorInput />
      <MessageSubmitButton />
    </form>
  );
}

export default MessageForm;
