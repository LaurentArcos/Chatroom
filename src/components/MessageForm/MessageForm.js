import { useDispatch, useSelector } from 'react-redux';
import MessageInput from './MessageInput/MessageInput';
import MessageSubmitButton from './MessageSubmitButton/MessageSubmitButton';
import './MessageForm.scss';
import { addNewMessage } from '../../actions/actions';
import MessageAuthorInput from './MessageAuthorInput/MessageAuthorInput';

function MessageForm() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);
  return (
    <form
      className="MessageForm"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addNewMessage(username));
      }}
    >
      <MessageInput />
      <MessageAuthorInput />
      <MessageSubmitButton />
    </form>
  );
}

export default MessageForm;
