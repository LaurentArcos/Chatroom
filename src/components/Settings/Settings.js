import ClosedSettings from './ClosedSettings';
import OpenedSettings from './OpenedSettings';
import { openSettings } from '../../actions/actions';

import './Settings.scss';

function Settings() {
  return (
    (openSettings ? <ClosedSettings /> : <OpenedSettings />)

  );
}
export default Settings;
