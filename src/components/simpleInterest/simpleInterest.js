import './simpleInterest.css';

const newInput = (id) => {
  id = String(id)
  const name = id[0].toUpperCase() + id.substring(1);

  return(
    <div>
      <label for={id}>{name}</label>
      <br/>
      <input type='text' id={id}></input>
    </div>
  )
}

const SimpleInterest = () => {
  const values = ["capital", "montante", "juros", "taxa", "tempo"];

  return (
    <div>
      {newInput(values[0])}
    </div>
  );
}

export default SimpleInterest;