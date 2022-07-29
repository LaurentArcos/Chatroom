import { useSelector, useDispatch } from 'react-redux';
import { toggleSettings } from 'src/actions/actions';

import './Settings.scss';
// == Composant
function Settings() {
  // Même chose:
  // const showSettings = useSelector((state) => state.showSettings);
  const { showSettings } = useSelector((state) => state);
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
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
}

// == Export
export default Settings;
