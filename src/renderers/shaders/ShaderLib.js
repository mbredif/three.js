import { ShaderChunk } from './ShaderChunk.js';
import { UniformsUtils } from './UniformsUtils.js';
import { Vector3 } from '../../math/Vector3.js';
import { UniformsLib } from './UniformsLib.js';
import { Color } from '../../math/Color.js';
import { Uniform } from '../../core/Uniform.js';

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 */

var ShaderLib = {

	basic: {

		uniforms: UniformsUtils.merge( [
			UniformsLib.common,
			UniformsLib.specularmap,
			UniformsLib.envmap,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.fog
		] ),

		vertexShader: ShaderChunk.meshbasic_vert,
		fragmentShader: ShaderChunk.meshbasic_frag

	},

	lambert: {

		uniforms: UniformsUtils.merge( [
			UniformsLib.common,
			UniformsLib.specularmap,
			UniformsLib.envmap,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.emissivemap,
			UniformsLib.fog,
			UniformsLib.lights,
			{
				emissive: new Uniform( new Color( 0x000000 ) )
			}
		] ),

		vertexShader: ShaderChunk.meshlambert_vert,
		fragmentShader: ShaderChunk.meshlambert_frag

	},

	phong: {

		uniforms: UniformsUtils.merge( [
			UniformsLib.common,
			UniformsLib.specularmap,
			UniformsLib.envmap,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.emissivemap,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			UniformsLib.gradientmap,
			UniformsLib.fog,
			UniformsLib.lights,
			{
				emissive: new Uniform( new Color( 0x000000 ) ),
				specular: new Uniform( new Color( 0x111111 ) ),
				shininess: new Uniform( 30 )
			}
		] ),

		vertexShader: ShaderChunk.meshphong_vert,
		fragmentShader: ShaderChunk.meshphong_frag

	},

	standard: {

		uniforms: UniformsUtils.merge( [
			UniformsLib.common,
			UniformsLib.envmap,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.emissivemap,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			UniformsLib.roughnessmap,
			UniformsLib.metalnessmap,
			UniformsLib.fog,
			UniformsLib.lights,
			{
				emissive: new Uniform( new Color( 0x000000 ) ),
				roughness: new Uniform( 0.5 ),
				metalness: new Uniform( 0.5 ),
				envMapIntensity: new Uniform( 1 ) // temporary
			}
		] ),

		vertexShader: ShaderChunk.meshphysical_vert,
		fragmentShader: ShaderChunk.meshphysical_frag

	},

	points: {

		uniforms: UniformsUtils.merge( [
			UniformsLib.points,
			UniformsLib.fog
		] ),

		vertexShader: ShaderChunk.points_vert,
		fragmentShader: ShaderChunk.points_frag

	},

	dashed: {

		uniforms: UniformsUtils.merge( [
			UniformsLib.common,
			UniformsLib.fog,
			{
				scale: new Uniform( 1 ),
				dashSize: new Uniform( 1 ),
				totalSize: new Uniform( 2 )
			}
		] ),

		vertexShader: ShaderChunk.linedashed_vert,
		fragmentShader: ShaderChunk.linedashed_frag

	},

	depth: {

		uniforms: UniformsUtils.merge( [
			UniformsLib.common,
			UniformsLib.displacementmap
		] ),

		vertexShader: ShaderChunk.depth_vert,
		fragmentShader: ShaderChunk.depth_frag

	},

	normal: {

		uniforms: UniformsUtils.merge( [
			UniformsLib.common,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			{
				opacity: new Uniform( 1.0 )
			}
		] ),

		vertexShader: ShaderChunk.normal_vert,
		fragmentShader: ShaderChunk.normal_frag

	},

	/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */

	cube: {

		uniforms: {
			tCube: new Uniform( null ),
			tFlip: new Uniform( - 1 ),
			opacity: new Uniform( 1.0 )
		},

		vertexShader: ShaderChunk.cube_vert,
		fragmentShader: ShaderChunk.cube_frag

	},

	equirect: {

		uniforms: {
			tEquirect: new Uniform( null ),
		},

		vertexShader: ShaderChunk.equirect_vert,
		fragmentShader: ShaderChunk.equirect_frag

	},

	distanceRGBA: {

		uniforms: UniformsUtils.merge( [
			UniformsLib.common,
			UniformsLib.displacementmap,
			{
				referencePosition: new Uniform( new Vector3() ),
				nearDistance: new Uniform( 1 ),
				farDistance: new Uniform( 1000 )
			}
		] ),

		vertexShader: ShaderChunk.distanceRGBA_vert,
		fragmentShader: ShaderChunk.distanceRGBA_frag

	},

	shadow: {

		uniforms: UniformsUtils.merge( [
			UniformsLib.lights,
			UniformsLib.fog,
			{
				color: new Uniform( new Color( 0x00000 ) ),
				opacity: new Uniform( 1.0 )
			},
		] ),

		vertexShader: ShaderChunk.shadow_vert,
		fragmentShader: ShaderChunk.shadow_frag

	}

};

ShaderLib.physical = {

	uniforms: UniformsUtils.merge( [
		ShaderLib.standard.uniforms,
		{
			clearCoat: new Uniform( 0 ),
			clearCoatRoughness: new Uniform( 0 )
		}
	] ),

	vertexShader: ShaderChunk.meshphysical_vert,
	fragmentShader: ShaderChunk.meshphysical_frag

};


export { ShaderLib };
