import { useEffect, useState } from 'react';
import ExperienceAdd from './experienceAdd';
import ExperienceModify from './experienceModify';

function Experience() {
  const [add, setAdd] = useState(true);

  useEffect(() => {
    setAdd(true);
  }, []);

  return (
    <div className="experience">
      <h2>Experience</h2>
      {add ? (
        <ExperienceAdd></ExperienceAdd>
      ) : (
        <ExperienceModify></ExperienceModify>
      )}
    </div>
  );
}

export default Experience;
