import { calculateInterest, newInput } from '../../Utils';
import './TaxCalculator.css';

const TaxCalculator = (props) => {
  const inputValues = ["taxa", "tempo", "capitalizacao"];

  return (
    <div className={props.type +"-container"}>
      <h1>{props.name}</h1>
      <div id={props.type +"-input-container"}>
        {inputValues.map((value) => newInput(value, props.type))}
      </div>
      <button onClick={() => calculateInterest(props.type)}>Calcular</button>
    </div>
  );
}

export default TaxCalculator;