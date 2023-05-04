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