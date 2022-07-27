import MessageInput from './MessageInput/MessageInput';
import MessageSubmitButton from './MessageSubmitButton/MessageSubmitButton';
import './MessageForm.scss';

function MessageForm() {
  return (
    <form
      className="MessageForm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <MessageInput />
      <MessageSubmitButton />
    </form>
  );
}

export default MessageForm;
