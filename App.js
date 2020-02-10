import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import {Hello} from './Hello';
const initialEnthusim=2

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
          <Hello name="Wink" enthusiasmLevel={initialEnthusim}/>
      </SafeAreaView>
    </>
  );
};

export default App;
