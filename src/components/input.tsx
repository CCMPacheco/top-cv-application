function Input(props: { label: string; typeOfInput: string }) {
  return (
    <div className="input">
      <label htmlFor="fullName">{props.label}</label>
      <input type={props.typeOfInput} name="fullName"></input>
    </div>
  );
}

export default Input;
