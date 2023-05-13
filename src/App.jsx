import './App.css';
import InterestCalculator from './components/InterestCalculator/InterestCalculator';
import TaxCalculator from './components/taxCalculator/TaxCalculator';

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <InterestCalculator name="Juros Simples" type="simples"/>
        <InterestCalculator name="Juros Compostos" type="composto"/>
        <TaxCalculator name="Taxa Simples" type="taxa-simples"/>
      </body>
    </div>
  );
}

export default App;
