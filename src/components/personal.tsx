import Input from '../components/input';

function Personal() {
  return (
    <div className="personal">
      <Input label="Full Name" typeOfInput="text"></Input>
      <Input label="Email" typeOfInput="email"></Input>
      <Input label="Phone" typeOfInput="tel"></Input>
      <Input label="Adress" typeOfInput="text"></Input>
    </div>
  );
}

export default Personal;
