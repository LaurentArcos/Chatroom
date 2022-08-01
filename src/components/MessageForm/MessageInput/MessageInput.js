import { useDispatch, useSelector } from 'react-redux';
import { setNewMessageInputText } from '../../../actions/actions';

function MessageInput() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.messages.newMessageInputText);

  return (
    <input
      value={text}
      onChange={(event) => {
        dispatch(setNewMessageInputText(event.target.value));
      }}
      className="MessageForm__input"
      placeholder="Votre message ici..."
    />
  );
}

export default MessageInput;

