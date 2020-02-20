const { aliases } = require('./package.json');

module.exports = {
    presets: ['react-app'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-proposal-optional-chaining',
        [
            'module-resolver',
            {
                root: './src',
                alias: aliases,
            }
        ],
        [
            "babel-plugin-styled-components"
        ]
    ]
}
