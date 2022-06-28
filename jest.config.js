const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './',
})

const customJestConfig = {
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ['node_modules', '<rootDir>/'],
	moduleNameMapper: {
		'hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'components/(.*)$': '<rootDir>/src/components/$1',
		'utils/(.*)$': [
			'<rootDir>/src/utils/$1',
			'<rootDir>/src/utils/currencyFormat.ts',
		],
	},
	testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
