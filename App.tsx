import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import {Hello} from './Hello';
const initialEnthusim=2

export const App: () => React.ReactNode = () => {
  return (
    <>
      <SafeAreaView>
          <Hello name="Wink" enthusiasmLevel={initialEnthusim}/>
      </SafeAreaView>
    </>
  );
};
