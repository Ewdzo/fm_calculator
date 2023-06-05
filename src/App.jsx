import './App.css';
import AmortizationCalculator from './components/AmortizationCalculator/AmortizationCalculator';
import InterestCalculator from './components/InterestCalculator/InterestCalculator';
import ProportionalTaxCalculator from './components/proportionalTaxCalculator/proportionalTaxCalculator';
import TaxCalculator from './components/taxCalculator/taxCalculator';

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <InterestCalculator name="Juros Simples" type="simples"/>
        <InterestCalculator name="Juros Compostos" type="composto"/>
        <TaxCalculator name="Taxa Efetiva" type="taxa-efetiva" inputs={["taxaEfetiva", "tempo", "taxa"]}/>
        <ProportionalTaxCalculator name="Taxa Proporcional" type="taxa-proporcional" inputs={["taxa", "taxaProporcional"]}/>
        <AmortizationCalculator name="Amortizacao" type="amortizacao"/>
      </body>
    </div>
  );
}

export default App;
