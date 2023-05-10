import './App.css';
import InterestCalculator from './components/InterestCalculator/InterestCalculator';

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <InterestCalculator name="Juros Simples" type="simples"/>
        <InterestCalculator name="Juros Compostos" type="composto"/>
      </body>
    </div>
  );
}

export default App;
