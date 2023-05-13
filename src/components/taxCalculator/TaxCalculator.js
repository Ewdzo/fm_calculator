import { calculateTax, newInput } from '../../Utils';
import './TaxCalculator.css';

const TaxCalculator = (props) => {
  const inputValues = ["taxaEfetiva", "tempo", "taxa"];

  return (
    <div className={props.type +"-container"}>
      <h1>{props.name}</h1>
      <div id={props.type +"-input-container"}>
        {inputValues.map((value) => newInput(value, props.type))}
      </div>
      <button onClick={() => calculateTax(props.type)}>Calcular</button>
    </div>
  );
}

export default TaxCalculator;