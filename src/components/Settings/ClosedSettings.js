import { useDispatch } from 'react-redux';
import { openSettings } from '../../actions/actions';

function ClosedSettings() {
  const dispatch = useDispatch();
  return (
    <button
      className="Settings__OpenButton"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        dispatch(openSettings());
      }}
    >
      <span> + </span>
    </button>
  );
}

export default ClosedSettings;
