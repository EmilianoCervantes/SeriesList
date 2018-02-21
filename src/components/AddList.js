import React from 'react';

const AddList = ({onNewList = f => f}) => {
  let _name, _id;
  const submit = e => {
    e.preventDefault();
    onNewList( _name.value, _id.value);
    _name.value = '';
    _id.value = '';
  }

  return (
    <div className="formArriba">
      <h2>Agregar Serie</h2>
      <form onSubmit = {submit} >
        <input ref={input => _name = input} type="text" placeholder="Nombre de la serie" required />
        
        <input ref={input => _id = input} type="text" placeholder="Id de la serie" required />
        
        <button>Agregar</button>
      </form>
    </div>);
};

export default AddList;