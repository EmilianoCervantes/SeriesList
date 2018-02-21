import React from 'react';
import Actor from './Actor.js'

const ActorList = (props) => {
	const eliminar = e => {
		e.preventDefault();
		props.borrar(props);
	}
	return(
		<div className='list'>
	    <h2>Game of Thrones</h2>
	    <ul borrar={props.onDeleteList}>
	    	<button onClick={(e) => eliminar(e)}>Eliminar</button>
	      {props.series.map((actor, i) =>
	        <Actor key={i} {...actor} />
	        )}
	    </ul>
	  </div>
	)
}

export default ActorList;