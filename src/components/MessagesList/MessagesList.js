import { useSelector } from 'react-redux';
import Message from './Message/Message';

function MessagesList() {
  const messages = useSelector((state) => state.messages.messages);

  return (
    <div>
      {messages.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          text={message.text}
        />
      ))}
    </div>
  );
}

export default MessagesList;
