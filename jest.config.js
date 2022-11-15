const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  collectCoverageFrom: ["**/*.{tsx}", "!**/node_modules/**", "!**/vendor/**"],
  collectCoverage: true,
  // The directory where Jest should output its coverage files.
  // coverageDirectory: "dist",
  // Every remaining file combined has less than 50% coverage (global).
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
    // "__test__/*.tsx": {
    //   statements: 20,
    // },
  },
  displayName: "NEXT-APP CLIENT",
  // /**
  //  * A number limiting the number of tests that are allowed to run at the same time when using test.concurrent.
  //  * Any test above this limit will be queued and executed once a slot is released.
  //  */
  maxConcurrency: 5,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  testEnvironment: "node",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
