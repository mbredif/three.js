import { LightShadow } from './LightShadow.js';
import { OrthographicCamera } from '../cameras/OrthographicCamera.js';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function DirectionalLightShadow( camera ) {

	camera = camera || new OrthographicCamera( - 5, 5, 5, - 5, 0.5, 500 );
	LightShadow.call( this, camera );

}

DirectionalLightShadow.prototype = Object.assign( Object.create( LightShadow.prototype ), {

	constructor: DirectionalLightShadow

} );


export { DirectionalLightShadow };
