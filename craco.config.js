const path = require('path');

module.exports = {
  reactScriptsVersion: 'react-scripts' /* (default value) */,
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
      '@class': path.resolve(__dirname, 'src/class'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^\\@class/(.*)$': '<rootDir>/src/class/$1',
        '^\\@components/(.*)$': '<rootDir>/src/components/$1',
        '^\\@hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^\\@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^\\@api/(.*)$': '<rootDir>/src/api/$1',
        '^\\@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^\\@styles/(.*)$': '<rootDir>/src/styles/$1',
        '^\\@assets/(.*)$': '<rootDir>/src/assets/$1',
      },
    },
  },
};
