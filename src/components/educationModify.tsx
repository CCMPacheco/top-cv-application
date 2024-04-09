import Input from './input';
import Buttons from './buttons';

function EducationModify() {
  return (
    <div className="education-modify">
      <Input label="School" typeOfInput="text"></Input>
      <Input label="Degree" typeOfInput="text"></Input>
      <Input label="Start Date" typeOfInput="date"></Input>
      <Input label="End Date" typeOfInput="date"></Input>
      <Input label="Location" typeOfInput="text"></Input>
      <Buttons></Buttons>
    </div>
  );
}

export default EducationModify;
