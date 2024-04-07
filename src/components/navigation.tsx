import Selector from './selector';
import Clear from './clear';
import Personal from './personal';
import Information from './information';

function Navigation() {
  return (
    <>
      <Selector></Selector>
      <Clear></Clear>
      <Personal></Personal>
      <Information></Information>
      <Information></Information>
    </>
  );
}

export default Navigation;
