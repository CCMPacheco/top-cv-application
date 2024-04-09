import { useEffect, useState } from 'react';
import EducationAdd from './educationAdd';
import EducationModify from './educationModify';

function Education() {
  const [add, setAdd] = useState(true);

  useEffect(() => {
    setAdd(true);
  }, []);

  return (
    <div className="education">
      <h2>Education</h2>
      {add ? (
        <EducationAdd></EducationAdd>
      ) : (
        <EducationModify></EducationModify>
      )}
    </div>
  );
}

export default Education;
