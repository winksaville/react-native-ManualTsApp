# Manually add typescript to a react-native project

Followed [these instructions](https://facebook.github.io/react-native/docs/typescript)

## Add typescript and types for react native
package.json and yarn.lock are updated automatically when executing `yarn add typescript ...`
```
(rn-py38) wink@wink-desktop:~/prgs/react-native/ManualTsApp (master)
$ yarn add typescript @types/jest @types/react @types/react-native @types/react-test-renderer
yarn add v1.22.0
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.11: The platform "linux" is incompatible with this module.
info "fsevents@1.2.11" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "@react-native-community/eslint-config > @typescript-eslint/eslint-plugin@1.13.0" has incorrect peer dependency "eslint@^5.0.0".
warning "@react-native-community/eslint-config > @typescript-eslint/parser@1.13.0" has incorrect peer dependency "eslint@^5.0.0".
warning "@react-native-community/eslint-config > eslint-plugin-react@7.12.4" has incorrect peer dependency "eslint@^3.0.0 || ^4.0.0 || ^5.0.0".
warning "@react-native-community/eslint-config > eslint-plugin-react-native@3.6.0" has incorrect peer dependency "eslint@^3.17.0 || ^4 || ^5".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 7 new dependencies.
info Direct dependencies
├─ @types/jest@25.1.2
├─ @types/react-native@0.61.12
├─ @types/react-test-renderer@16.9.2
└─ typescript@3.7.5
info All dependencies
├─ @types/color-name@1.1.1
├─ @types/jest@25.1.2
├─ @types/prop-types@15.7.3
├─ @types/react-native@0.61.12
├─ @types/react-test-renderer@16.9.2
├─ csstype@2.6.8
└─ typescript@3.7.5
Done in 3.24s.
```
## Add tsconfig.json in root of project
```
(rn-py38) wink@wink-desktop:~/prgs/react-native/ManualTsApp (master)
$ cat tsconfig.json 
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```
## Create jest.config.js so Jest uses TypeScript
```
(rn-py38) wink@wink-desktop:~/prgs/react-native/ManualTsApp (master)
$ cat jest.config.js 
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
```
