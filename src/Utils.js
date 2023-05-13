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

export const calculateInterest = (type) => {
  const inputs = document.querySelectorAll(`input[id^="${type}"]`);
  const values = Array.from(inputs, inputs => Number(inputs.value));

  const capital = values[0];
  const montante = values[1];
  const juros = values[2];
  const taxa = values[3];
  const tempo = values[4];

  if(type === "simples"){
    if(!capital) inputs[0].value = Number(juros / (taxa * tempo)).toFixed(2); 
  
    if(!juros) inputs[2].value = Number(capital * taxa * tempo).toFixed(2); 
    
    if(!taxa) inputs[3].value = Number(juros / (capital * tempo)).toFixed(6); 
    
    if(!tempo) inputs[4].value = Number(juros / (capital * taxa)).toFixed(2); 
    
    if(!montante) inputs[1].value = Number(Number(inputs[0].value) + Number(inputs[2].value)).toFixed(2);
  }
  else if (type === "composto"){
    if(!capital) inputs[0].value = Number(juros / (taxa * tempo)).toFixed(2); 
  
    if(!juros) inputs[2].value = Number(capital * (Math.pow((1 + taxa), tempo) -1)).toFixed(2); 
    
    if(!taxa) inputs[3].value = Number( Math.pow((montante / capital), (1/tempo)) - 1).toFixed(6); 
    
    if(!tempo) inputs[4].value = Number((Math.log((montante / capital))) / (Math.log(1+taxa))).toFixed(6); 
    
    if(!montante) inputs[1].value = Number(Number(inputs[0].value) + Number(inputs[2].value)).toFixed(2);
  }
}

export const calculateTax = (type) => {
  const inputs = document.querySelectorAll(`input[id^="${type}"]`);
  const values = Array.from(inputs, inputs => Number(inputs.value));

  const taxaEfetiva = values[0];
  const tempo = values[1];
  const taxa = values[2];

  if(!taxaEfetiva) inputs[0].value = (taxa / (1 - (taxa * tempo))).toFixed(6); 

  if(!taxa) inputs[2].value = (taxaEfetiva / (1 + (taxaEfetiva * tempo))).toFixed(6); 
}