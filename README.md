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
## Add Hello.tsx and simplified App.js

Got [Hello.tsx](https://facebook.github.io/react-native/docs/typescript#what-does-react-native--typescript-look-like) and made some slight tweaks:
```
(rn-py38) wink@wink-desktop:~/prgs/react-native/ManualTsApp2 (master)
$ diff -U 1 ../Hello2.tsx Hello.tsx
--- ../Hello2.tsx	2020-02-10 13:25:36.243961422 -0800
+++ Hello.tsx	2020-02-10 15:36:42.083342325 -0800
@@ -9,3 +9,3 @@
 
-const Hello: React.FC<Props> = (props) => {
+export const Hello: React.FC<Props> = (props) => {
     const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(props.enthusiasmLevel);
@@ -44,3 +44,2 @@
     );
-    }
 }
```
And then simplified App.js to:
```
(rn-py38) wink@wink-desktop:~/prgs/react-native/ManualTsApp2 (master)
$ cat -n App.js
     1	import React from 'react';
     2	import {
     3	  SafeAreaView,
     4	} from 'react-native';
     5	
     6	import {Hello} from './Hello';
     7	const initialEnthusim=2
     8	
     9	const App: () => React$Node = () => {
    10	  return (
    11	    <>
    12	      <SafeAreaView>
    13	          <Hello name="Wink" enthusiasmLevel={initialEnthusim}/>
    14	      </SafeAreaView>
    15	    </>
    16	  );
    17	};
    18	
    19	export default App;
```
Got help from rahsheen on the Reactiflus discord channel
[first post here](https://discordapp.com/channels/102860784329052160/469170673533583361/676550171311603712).
out how to link to the posts :(

## Convert App.js to App.tsx

Renamed plus two tweeaks:
```
$ diff -U 1 App.js App.tsx
--- App.js	2020-02-10 20:45:00.548987157 -0800
+++ App.tsx	2020-02-10 20:44:03.213540191 -0800
@@ -8,3 +8,3 @@
 
-const App: () => React$Node = () => {
+export const App: () => React.ReactNode = () => {
   return (
@@ -17,3 +17 @@
 };
-
-export default App;
```
And tweak index.js:
```
$ git diff index.js
diff --git a/index.js b/index.js
index a850d03..02e824c 100644
--- a/index.js
+++ b/index.js
@@ -3,7 +3,7 @@
  */
 
 import {AppRegistry} from 'react-native';
-import App from './App';
+import {App} from './App';
 import {name as appName} from './app.json';
 
 AppRegistry.registerComponent(appName, () => App);
```
## Move Hello.tsx to `components/`
This is where it was supposed to be
