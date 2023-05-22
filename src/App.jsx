import './App.css';
import InterestCalculator from './components/InterestCalculator/InterestCalculator';
import TaxCalculator from './components/taxCalculator/taxCalculator';

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <InterestCalculator name="Juros Simples" type="simples"/>
        <InterestCalculator name="Juros Compostos" type="composto"/>
        <TaxCalculator name="Taxa Efetiva" type="taxa-efetiva" inputs={["taxaEfetiva", "tempo", "taxa"]}/>
        <TaxCalculator name="Taxa Proporcional" type="taxa-proporcional" inputs={["taxaProporcional", "tempo", "taxa"]}/>
      </body>
    </div>
  );
}

export default App;
