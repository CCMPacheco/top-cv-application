import '../styles/input.css';

function normalizeLabel(label: string) {
  return label.toLowerCase().replace(/\s+/g, '-');
}

function Input(props: { label: string; typeOfInput: string }) {
  return (
    <div className="input">
      <label htmlFor={normalizeLabel(props.label)}>{props.label}</label>
      {props.typeOfInput === 'textarea' ? (
        <textarea name={normalizeLabel(props.label)}></textarea>
      ) : (
        <input
          type={props.typeOfInput}
          name={normalizeLabel(props.label)}
        ></input>
      )}
    </div>
  );
}

export default Input;
