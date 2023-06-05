import { calculateAmortization, newInput } from '../../Utils';
import './AmortizationCalculator.css';

const AmortizationCalculator = (props) => {
  const inputValues = ["financiamento", "taxa", "tempo"];

  return (
    <div className={props.type +"-container"}>
      <h1>{props.name}</h1>
      <div id={props.type +"-input-container"}>
        {inputValues.map((value) => newInput(value, props.type))}
      </div>
      <button onClick={() => calculateAmortization(props.type)}>Calcular</button>
    </div>
  );
}

export default AmortizationCalculator;