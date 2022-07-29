import { useSelector, useDispatch } from 'react-redux';
import {
  toggleSettings,
  setNewMailLogin,
  setNewPasswordLogin,
} from 'src/actions/actions';

import './Settings.scss';
// == Composant
function Settings() {
  // Même chose:
  // const showSettings = useSelector((state) => state.showSettings);
  const { showSettings, newEmailLogin, newPasswordLogin } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="Settings">
      <button
        type="button"
        className="Settings-toggle-button"
        onClick={() => dispatch(toggleSettings())}
      >
        X
      </button>
      {showSettings && (
        <form>
          <input type="email" value={newEmailLogin} placeholder="Email" onChange={(event) => dispatch(setNewMailLogin(event.target.value))} />
          <input type="password" value={newPasswordLogin} placeholder="Mot de passe" onChange={(event) => dispatch(setNewPasswordLogin(event.target.value))} />
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
}

// == Export
export default Settings;
