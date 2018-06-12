import { Color } from '../../math/Color.js';
import { Vector2 } from '../../math/Vector2.js';
import { Matrix3 } from '../../math/Matrix3.js';
import { Uniform } from '../../core/Uniform.js';

/**
 * Uniforms library for shared webgl shaders
 */

var UniformsLib = {

	common: {

		diffuse: new Uniform( new Color( 0xeeeeee ) ),
		opacity: new Uniform( 1.0 ),

		map: new Uniform( null ),
		uvTransform: new Uniform( new Matrix3() ),

		alphaMap: new Uniform( null )

	},

	specularmap: {

		specularMap: new Uniform( null )

	},

	envmap: {

		envMap: new Uniform( null ),
		flipEnvMap: new Uniform( - 1 ),
		reflectivity: new Uniform( 1.0 ),
		refractionRatio: new Uniform( 0.98 ),
		maxMipLevel: new Uniform( 0 )

	},

	aomap: {

		aoMap: new Uniform( null ),
		aoMapIntensity: new Uniform( 1 )

	},

	lightmap: {

		lightMap: new Uniform( null ),
		lightMapIntensity: new Uniform( 1 )

	},

	emissivemap: {

		emissiveMap: new Uniform( null )

	},

	bumpmap: {

		bumpMap: new Uniform( null ),
		bumpScale: new Uniform( 1 )

	},

	normalmap: {

		normalMap: new Uniform( null ),
		normalScale: new Uniform( new Vector2( 1, 1 ) )

	},

	displacementmap: {

		displacementMap: new Uniform( null ),
		displacementScale: new Uniform( 1 ),
		displacementBias: new Uniform( 0 )

	},

	roughnessmap: {

		roughnessMap: new Uniform( null )

	},

	metalnessmap: {

		metalnessMap: new Uniform( null )

	},

	gradientmap: {

		gradientMap: new Uniform( null )

	},

	fog: {

		fogDensity: new Uniform( 0.00025 ),
		fogNear: new Uniform( 1 ),
		fogFar: new Uniform( 2000 ),
		fogColor: new Uniform( new Color( 0xffffff ) )

	},

	lights: {

		ambientLightColor: new Uniform( [] ),

		directionalLights: new Uniform( [], {
			direction: {},
			color: {},

			shadow: {},
			shadowBias: {},
			shadowRadius: {},
			shadowMapSize: {}
		} ),

		directionalShadowMap: new Uniform( [] ),
		directionalShadowMatrix: new Uniform( [] ),

		spotLights: new Uniform( [], {
			color: {},
			position: {},
			direction: {},
			distance: {},
			coneCos: {},
			penumbraCos: {},
			decay: {},

			shadow: {},
			shadowBias: {},
			shadowRadius: {},
			shadowMapSize: {}
		} ),

		spotShadowMap: new Uniform( [] ),
		spotShadowMatrix: new Uniform( [] ),

		pointLights: new Uniform( [], {
			color: {},
			position: {},
			decay: {},
			distance: {},

			shadow: {},
			shadowBias: {},
			shadowRadius: {},
			shadowMapSize: {},
			shadowCameraNear: {},
			shadowCameraFar: {}
		} ),

		pointShadowMap: new Uniform( [] ),
		pointShadowMatrix: new Uniform( [] ),

		hemisphereLights: new Uniform( [], {
			direction: {},
			skyColor: {},
			groundColor: {}
		} ),

		// TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
		rectAreaLights: new Uniform( [], {
			color: {},
			position: {},
			width: {},
			height: {}
		} )

	},

	points: {

		diffuse: new Uniform( new Color( 0xeeeeee ) ),
		opacity: new Uniform( 1.0 ),
		size: new Uniform( 1.0 ),
		scale: new Uniform( 1.0 ),
		map: new Uniform( null ),
		uvTransform: new Uniform( new Matrix3() )

	}

};

export { UniformsLib };
