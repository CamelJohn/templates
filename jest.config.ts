import pathsToIgnore from './files';
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
export default {
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: 'node',
	extensionsToTreatAsEsm: ['.ts'],
	globals: {
		'ts-jest': {
			useESM: true,
		},
	},
	testPathIgnorePatterns: pathsToIgnore,
	passWithNoTests: true,
};
