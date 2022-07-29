import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { toggleSettings, setSettingsLoginForm, sendLogin } from 'src/actions/actions';
import './Settings.scss';
// == Composant
function Settings() {
  // Même chose:
  // const showSettings = useSelector((state) => state.showSettings);
  const { showSettings, newEmailLogin, newPasswordLogin } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Je veux me connecter');

    dispatch(sendLogin());
  };

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
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={newEmailLogin}
            placeholder="Email"
            onChange={(event) => dispatch(setSettingsLoginForm('newEmailLogin', event.target.value))}
          />

          <input
            type={isPasswordHidden ? 'password' : 'text'}
            value={newPasswordLogin}
            placeholder="Mot de passe"
            onChange={(event) => dispatch(setSettingsLoginForm('newPasswordLogin', event.target.value))}
          />

          <button
            type="button"
            onClick={() => setIsPasswordHidden(!isPasswordHidden)}
          >
            {
              // (isPasswordHidden && 'Afficher') || (!isPasswordHidden && 'Masquer')
            }
            {isPasswordHidden ? 'Afficher' : 'Masquer'} le MDP
          </button>

          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
}

// == Export
export default Settings;
