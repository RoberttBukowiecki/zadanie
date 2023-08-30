import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/screens/Home';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Posts} from './src/screens/Posts';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PostScreen} from './src/screens/PostScreen';
import {CreatePostScreen} from './src/screens/CreatePostScreen';

const Stack = createNativeStackNavigator();
export const queryClient = new QueryClient();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'Home'}}
            />
            <Stack.Screen
              name="Posts"
              component={Posts}
              options={{title: 'Posts'}}
            />
            <Stack.Screen name="Post" component={PostScreen} />
            <Stack.Screen name="CreatePost" component={CreatePostScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
