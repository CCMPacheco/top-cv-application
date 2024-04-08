import Selector from './selector';
import Clear from './clear';
import Personal from './personal';
import Information from './information';
import '../styles/navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <Selector></Selector>
      <Clear></Clear>
      <Personal></Personal>
      <Information></Information>
      <Information></Information>
    </div>
  );
}

export default Navigation;
