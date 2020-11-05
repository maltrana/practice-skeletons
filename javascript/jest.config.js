module.exports = {
  testEnvironment: 'node',
  verbose: true,
  rootDir: process.cwd()
}

// Or async function
module.exports = async () => {
  return {
    testEnvironment: 'node',
    verbose: true,
    rootDir: process.cwd()
  }
}
