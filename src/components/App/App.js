import MessageForm from '../MessageForm/MessageForm';
import MessagesList from '../MessagesList/MessagesList';
import './App.scss';

function App() {
  return (
    <div className="App">
      <MessagesList />
      <MessageForm />
    </div>
  );
}

export default App;
