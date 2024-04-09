import Input from './input';
import Buttons from './buttons';

function ExperienceModify() {
  return (
    <div className="experience-modify">
      <Input label="Company Name" typeOfInput="text"></Input>
      <Input label="Position Title" typeOfInput="text"></Input>
      <Input label="Start Date" typeOfInput="date"></Input>
      <Input label="End Date" typeOfInput="date"></Input>
      <Input label="Location" typeOfInput="text"></Input>
      <Input label="Description" typeOfInput="textarea"></Input>
      <Buttons></Buttons>
    </div>
  );
}

export default ExperienceModify;
