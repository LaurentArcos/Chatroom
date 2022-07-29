import { useSelector } from 'react-redux';
import MessageForm from '../MessageForm/MessageForm';
import MessagesList from '../MessagesList/MessagesList';
import Settings from '../Settings/Settings';
import './App.scss';

function App() {
  const author = useSelector((state) => state.newMessageAuthor);
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
