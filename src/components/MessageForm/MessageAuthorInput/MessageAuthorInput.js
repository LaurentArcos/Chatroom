import { useDispatch, useSelector } from 'react-redux';
import { setNewMessageAuthor } from 'src/actions/actions';

function MessageAuthorInput() {
  const dispatch = useDispatch();
  const newMessageAuthor = useSelector((state) => state.newMessageAuthor);

  return (
    <input
      value={newMessageAuthor}
      onChange={(event) => {
        dispatch(setNewMessageAuthor(event.target.value));
      }}
      placeholder="Auteur"
      className="MessageForm__input"
    />
  );
}

export default MessageAuthorInput;
