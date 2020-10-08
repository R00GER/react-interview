module.exports = {
  extends: ['react-app', 'airbnb'],
  rules: {
    semi: 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/click-events-have-key-events': 0,
  },
  overrides: [
    {
      files: ['Todo.test.js'],
      rules: {
        'no-console': 0,
      },
    },
  ],
};
