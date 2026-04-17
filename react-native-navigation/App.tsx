import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      alert('New post: ' + route.params.post);
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('CreatePost')}>
        Create post
      </Button>

      <Text style={{ margin: 10 }}>
        Post: {route.params?.post}
      </Text>
    </View>
  );
}

function CreatePostScreen({ navigation }) {
  const [postText, setPostText] = React.useState('');

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />

      <Button
        onPress={() => {
          navigation.navigate('Home', {
            post: postText,
          });
        }}
      >
        Done
      </Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}