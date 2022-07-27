import { useState } from 'react';
import Message from './Message/Message';

function MessagesList() {
  const [messages, setMessages] = useState([
    { id: 1, author: 'Pacman', text: 'Waka waka waka waka' },
    { id: 2, author: 'Shakira', text: 'Waka waka HE HE' },
    { id: 3, author: 'Koala', text: 'Koala koala' },
    { id: 4, author: 'Laurent', text: 'Bonjour' },
  ]);

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
