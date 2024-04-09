import Selector from './selector';
import Clear from './clear';
import Personal from './personal';
import Education from './education';
import Experience from './experience';

import '../styles/navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <Selector></Selector>
      <Clear></Clear>
      <Personal></Personal>
      <Experience></Experience>
      <Education></Education>
    </div>
  );
}

export default Navigation;
