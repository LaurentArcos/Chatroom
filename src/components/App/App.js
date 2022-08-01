import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from 'src/socket';
import { addNewMessage } from '../../actions/actions';
import MessageForm from '../MessageForm/MessageForm';
import MessagesList from '../MessagesList/MessagesList';
import Settings from '../Settings/Settings';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const author = useSelector((state) => state.auth.username);

  useEffect(() => {
    socket.on('send_message', (message) => {
      dispatch(addNewMessage(message));
    });
  }, []);

  return (
    <div className="App">
      <Settings />
      <MessagesList />
      {author !== '' && <MessageForm />}
      {author === '' && 'Vous devez être connecté pour poster un message !'}
    </div>
  );
}

export default App;
