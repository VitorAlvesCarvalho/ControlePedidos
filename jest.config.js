module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: [
    '<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}'
  ]
};
