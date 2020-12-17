module.exports = {
  roots: ['<rootDir>/__tests__'],
  testMatch: ['**/*.test.ts'],
  testTimeout: 60000,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
