const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
  reactScriptsVersion: 'react-scripts' /* (default value) */,
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.path.json',
      },
    },
  ],
  eslint: {
    enable: true /* (default value) */,
    mode: 'extends' /* (default value) */ || 'file',
  },
  typescript: {
    enableTypeChecking: true, /* (default value)  */
  },
  webpack: {
    // 절대경로 지정
    alias: {
      '~components': path.resolve(__dirname, 'src/components'),
      '~constants': path.resolve(__dirname, 'src/constants'),
      '~hooks': path.resolve(__dirname, 'src/hooks'),
      '~pages': path.resolve(__dirname, 'src/pages'),
      '~api': path.resolve(__dirname, 'src/api'),
      '~types': path.resolve(__dirname, 'src/types'),
      '~utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^\\~components/(.*)$': '<rootDir>/src/components/$1',
        '^\\~constants/(.*)$': '<rootDir>/src/constants/$1',
        '^\\~hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^\\~pages/(.*)$': '<rootDir>/src/pages/$1',
        '^\\~api/(.*)$': '<rootDir>/src/api/$1',
        '^\\~types/(.*)$': '<rootDir>/src/types/$1',
        '^\\~utils/(.*)$': '<rootDir>/src/utils/$1',
      },
    },
  },
};
