module.exports = {
	preset: 'jest-preset-angular',
	roots: ['src'],
	testEnvironment: '@happy-dom/jest-environment',
	setupFiles: ['<rootDir>/jest-setup.js'],
	setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
	collectCoverage: true,
	coverageDirectory: '<rootDir>/coverage/',
	moduleNameMapper: {
		'@services/(.*)': '<rootDir>/src/app/services/$1.service.ts',
	},
};
