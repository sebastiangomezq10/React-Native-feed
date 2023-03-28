module.exports = {
    parser: "babel-eslint",
    plugins: ["react"],
    extends: ["eslint:recommended", "plugin:react/recommended", "@react-native-community"],
    env: {
        es6: true,
        node: true,
        browser: true,
        jest: true,
        "react-native/react-native": true, // Agrega este entorno para React Native
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        // Aquí puedes agregar o modificar las reglas que desees
    },
};