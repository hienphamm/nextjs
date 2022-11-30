/** @type {import('ts-jest').JestConfigWithTsJest} */
/** @type {import('jest').Config} */

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '@app/styles/*': '<rootDir>/styles/*',
  },
  verbose: true,
  collectCoverageFrom: ['./__tests__/pages/**'],
  collectCoverage: true,
  // The directory where Jest should output its coverage files.
  // coverageDirectory: "dist",
  // Every remaining file combined has less than 50% coverage (global).
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    // "__test__/*.tsx": {
    //   statements: 20,
    // },
  },
  displayName: 'NEXT-APP CLIENT',
  // /**
  //  * A number limiting the number of tests that are allowed to run at the same time when using test.concurrent.
  //  * Any test above this limit will be queued and executed once a slot is released.
  //  */
  maxConcurrency: 5,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  // ts-jest
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '.+\\.(css|less|sass|scss)$': 'jest-css-modules-transform',
  },
  testRegex: '(/__tests__/pages/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
