/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';

import {SelectableText} from '@astrocoders/react-native-selectable-text';

const texts = [
  `Run script build phase 'Start Packager' will be run during every
  build because it does not specify any outputs. To address this
  warning, either add output dependencies to the script phase, or
  configure it to run in every build by unchecking "Based on
  dependency analysis" in the script phase. (in target
  'TextSelectionApp' from project 'TextSelectionApp') Run script build
  phase 'Bundle React Native code and images' will be run during every
  build because it does not specify any outputs. To address this
  warning, either add output dependencies to the script phase, or
  configure it to run in every build by unchecking "Based on
  dependency analysis" in the script phase. (in target
  'TextSelectionApp' from project 'TextSelectionApp')`,
  `Run script build phase 'Start Packager' will be run during every
  build because it does not specify any outputs. To address this
  warning, either add output dependencies to the script phase, or
  configure it to run in every build by unchecking "Based on
  dependency analysis" in the script phase. (in target
  'TextSelectionApp' from project 'TextSelectionApp') Run script build
  phase 'Bundle React Native code and images' will be run during every
  build because it does not specify any outputs. To address this
  warning, either add output dependencies to the script phase, or
  configure it to run in every build by unchecking "Based on
  dependency analysis" in the script phase. (in target
  'TextSelectionApp' from project 'TextSelectionApp')`,
  `Run script build phase 'Start Packager' will be run during every
  build because it does not specify any outputs. To address this
  warning, either add output dependencies to the script phase, or
  configure it to run in every build by unchecking "Based on
  dependency analysis" in the script phase. (in target
  'TextSelectionApp' from project 'TextSelectionApp') Run script build
  phase 'Bundle React Native code and images' will be run during every
  build because it does not specify any outputs. To address this
  warning, either add output dependencies to the script phase, or
  configure it to run in every build by unchecking "Based on
  dependency analysis" in the script phase. (in target
  'TextSelectionApp' from project 'TextSelectionApp')`,
];

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={{}}>
        <FlatList
          data={texts}
          renderItem={({item}) => (
            <SelectableText
              highlights={[]}
              style={styles.textStyle}
              value={item}
              menuItems={['copy', 'highlight', 'delete']}
              onSelection={({}) => {}}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
