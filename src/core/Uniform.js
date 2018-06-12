/**
 * @author mrdoob / http://mrdoob.com/
 */

function Uniform( value, properties ) {

	if ( typeof value === 'string' ) {

		console.warn( 'THREE.Uniform: Type parameter is no longer needed.' );
		value = arguments[ 1 ];

	}

	this.value = value;
	if ( properties ) {

        this.properties = properties;

    }

}

Uniform.prototype.clone = function () {

    if ( this.value && this.value.clone !== undefined ) {

        return new Uniform( this.value.clone() );

    } else if ( Array.isArray( this.value ) ) {

        return new Uniform( this.value.slice() );

    } else {

        return new Uniform( this.value );

    }
};

Uniform.prototype.copy = function (source) {

    if ( this.value && this.value.copy !== undefined ) {

        this.value.copy( source.value );

    } else if ( Array.isArray( this.value ) ) {

        // no copy function in arrays
        this.value = source.value.slice();

    } else {

        this.value = source.value;

    }

	return this;

};

export { Uniform };
