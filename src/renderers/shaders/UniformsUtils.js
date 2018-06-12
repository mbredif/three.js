import { Uniform } from '../../core/Uniform.js';
/**
 * Uniform Utilities
 */

var UniformsUtils = {

	merge: function ( sources, target ) {

		target = target || {};


		for ( var u = 0; u < sources.length; u ++ ) {

			this.clone( sources[ u ], target );

		}

		return target;

	},

	clone: function ( source, target ) {

		target = target || {};

		for ( var u in source ) {

            if ( source[ u ].clone === undefined ) {
                console.warn( u, ' should now be created using new THREE.Uniform( value )');
                source[ u ] = new Uniform( source[ u ].value, source[ u ].properties );
            }

			target[ u ] = source[ u ].clone();

		}

		return target;

	},

	copy: function ( source, target ) {

		for ( var u in source ) {

			if ( target[ u ] ) {

                target[ u ].copy( source[ u ] );

            }

		}

		return target;

	}

};


export { UniformsUtils };
