import { newInput } from '../../Utils';
import './simpleInterest.css';

const SimpleInterest = () => {
  const inputValues = ["capital", "montante", "juros", "taxa", "tempo"];

  return (
    <div>
      <h1>Juro Simples</h1>
      {inputValues.map((value) => newInput(value, "simples"))}
      <button>Calcular</button>
    </div>
  );
}

export default SimpleInterest;