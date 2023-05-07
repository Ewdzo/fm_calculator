export const newInput = (id, type) => {
    id = String(id)
    const name = id[0].toUpperCase() + id.substring(1);
  
    if(type) id = type + "_" + id;
    
    return(
      <div>
        <label for={id}>{name}</label>
        <br/>
        <input type='text' id={id}></input>
      </div>
    )
}

export const calculateInputs = (type) => {
  const inputs = document.querySelectorAll(`[id^="${type}"]`);
  const values = Array.from(inputs, inputs => inputs.value);

  if(type == "simples"){
    if(!values[0]) inputs[0].value = Number(values[2] / (values[3] * values[4])).toFixed(2); 
  
    if(!values[2]) inputs[2].value = Number(values[0] * values[3] * values[4]).toFixed(2); 
    
    if(!values[3]) inputs[3].value = Number(values[2] / (values[0] * values[4])).toFixed(2); 
    
    if(!values[4]) inputs[4].value = Number(values[2] / (values[0] * values[3])).toFixed(2); 
    
    if(!values[1]) inputs[1].value = (Number(inputs[0].value) + Number(inputs[2].value)).toFixed(2);
  }
}