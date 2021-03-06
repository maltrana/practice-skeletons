// jest.config.js
// Sync object
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  rootDir: process.cwd()
};

// Or async function
module.exports = async () => {
  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    rootDir: process.cwd(),
  };
};