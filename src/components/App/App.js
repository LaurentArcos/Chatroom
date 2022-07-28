import MessageForm from '../MessageForm/MessageForm';
import MessagesList from '../MessagesList/MessagesList';
import Settings from '../Settings/Settings';

import './App.scss';

function App() {
  return (
    <div className="App">
      <MessagesList />
      <MessageForm />
      <Settings />
    </div>
  );
}

export default App;
