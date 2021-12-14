# clean_code_practice

> Practice exercise for clean code course students
>
> -- by [Alberto Basalo](https://twitter.com/albertobasalo)

## Start

### Local dependencies :

```bash
# npm
npm i
# yarn
yarn
```

## Your Task

Refactor `./src/main.ts`, so at the end you could remove the disabled es-lint rules

```ts
/* eslint-disable complexity */
/* eslint-disable max-depth */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
```

Follow clean principles:

- Good names
- Small functions
- Solid clases

### Scripts :

```bash
# npm
npm start # run de application on localhost
npm test # excute tests

# yarn
yarn start # run de application on localhost
yarn test # excute tests
```

## Recommended VS Code Extensions

- **Material Icon Theme** [pkief.material-icon-theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

- **Prettier** - Code formatter [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- **Spell Right** [ban.spellright](https://marketplace.visualstudio.com/items?itemName=ban.spellright)

## Preconfigured tools:

### Prettier

`.prettierrc`

```json
{
  "printWidth": 100,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "arrowParens": "avoid",
  "rangeStart": 0,
  "rangeEnd": 10000,
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve"
}
```

`.editorconfig`

```
root = true
[*]
end_of_line = lf
charset = utf-8
```

### EsLint

`.eslintrc`

```json
"rules": {
    "complexity": ["error", { "max": 8 }],
    "max-depth": ["error", 2],
    "max-lines": ["warn", 160],
    "max-lines-per-function": ["warn", 20],
    "max-nested-callbacks": ["error", 1],
    "max-params": ["warn", 2],
    "no-magic-numbers": [
      "warn",
      { "detectObjects": false, "enforceConst": true, "ignore": [1], "ignoreArrayIndexes": true }
    ],
    "no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 1 }],
    "no-nested-ternary": "error",
    "no-unused-vars": ["warn"],
    "@typescript-eslint/no-use-before-define": "off"
},
```

### Jest

`babel.config.js`

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
      '@babel/preset-typescript',
    ],
  ],
};
```

`test.config.js`

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

### gh-pages

## Package Json scripts

```json
{
  "scripts": {
    "start": "ts-node ./src/main",
    "test": "jest --watch -o",
    "jest": "jest"
  },
```

## Credits

### [Clean Code course](https://trainingit.es//curso-clean-code?promo=bitAdemy)

Based on its demos and Laboratories.

[Course documentation in Spanish ](https://github.com/BitAdemy/CleanCode)

[Course labs](https://github.com/cleancodeTrIT/CleanCodeLab)

