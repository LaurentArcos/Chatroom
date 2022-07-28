import { useDispatch } from 'react-redux';
import { closeSettings } from '../../actions/actions';

function OpenedSettings() {
  const dispatch = useDispatch();
  return (
    <form className="Settings">
      <button
        className="Settings__CloseButton"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(closeSettings());
        }}
      >
        <span> x </span>
      </button>
      <input className="Settings__Email" placeholder="Email" />
      <input className="Settings__Password" placeholder="Mot de passe" />
      <button className="Settings__SubmitButton" type="submit">Envoyer</button>
    </form>
  );
}

export default OpenedSettings;
