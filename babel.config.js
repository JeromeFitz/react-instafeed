module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-react-jsx',
  ],
  env: {
    test: {},
    development: {},
    production: {
      presets: ['minify'],
    },
  },
}
