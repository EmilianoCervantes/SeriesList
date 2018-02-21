import React from 'react';
const Actor = (actor) =>
	<li>
		<div classname="photo">
			<img alt={ actor.person.name } src={ actor.character.image.medium } />
		</div>
		<span classname="name">{ actor.person.name }</span>
		<span classname="character">{ actor.character.name }</span>
	</li>;
export default Actor;