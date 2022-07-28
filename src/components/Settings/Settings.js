import PropTypes from 'prop-types';

import './Settings.scss';

function Settings() {
  return (
    <form className="Settings">
      <button className="Settings__OpenButton" type="button"><span> + </span></button>
      <button className="Settings__CloseButton" type="button"><span> x </span></button>
      <input className="Settings__Email" placeholder="Email" />
      <input className="Settings__Password" placeholder="Mot de passe" />
      <button className="Settings__SubmitButton" type="submit">Envoyer</button>
    </form>
  );
}

Settings.propTypes = {
};

export default Settings;
