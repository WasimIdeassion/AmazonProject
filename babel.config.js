module.exports = {
  presets: ['module:@react-native/babel-preset'],
  // plugins: ['react-native-reanimated/plugin'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'transform-react-remove-prop-types',
      {
        removeImport: true,
        additionalLibraries: ['react-style-proptype'],
      },
    ],
  ],
};
