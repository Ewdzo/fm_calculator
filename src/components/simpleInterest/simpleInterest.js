import { calculateInputs, newInput } from '../../Utils';
import './simpleInterest.css';

const SimpleInterest = () => {
  const inputValues = ["capital", "montante", "juros", "taxa", "tempo"];

  return (
    <div className='simpleInterest-container'>
      <h1>Juro Simples</h1>
      <div id='simpleInterest-input-container'>
        {inputValues.map((value) => newInput(value, "simples"))}
      </div>
      <button onClick={() => calculateInputs("simples")}>Calcular</button>
    </div>
  );
}

export default SimpleInterest;