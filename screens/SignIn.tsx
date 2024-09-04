import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignIn = () => {
  const [text, onChangeText] = useState({email: '', password: ''});
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = false;

  const handleChange = (val: string, name: string) => {
    onChangeText(prevState => ({...prevState, [name]: val}));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <KeyboardAvoidingView
      style={styles.main}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={40}>
      <View>
        <Text style={styles.header}>Let's Sign you in.</Text>
        <View>
          <Text style={[styles.text, styles.welcome]}>Welcome back.</Text>
          <Text style={styles.welcome}>You've been missed!</Text>
        </View>
      </View>
      <View style={styles.formWrap}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Email</Text>
          <View style={styles.container}>
            <TextInput
              id="email"
              style={styles.input}
              placeholder="Your email"
              placeholderTextColor={'white'}
              value={text.email}
              onChangeText={val => handleChange(val, 'email')}
            />
          </View>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Password</Text>
          <View style={styles.container}>
            <TextInput
              id="password"
              style={styles.input}
              placeholder="Password"
              textContentType="password"
              placeholderTextColor={'white'}
              value={text.password}
              secureTextEntry={!showPassword}
              onChangeText={val => handleChange(val, 'password')}
            />
            <Icon
              name={showPassword ? 'eye' : 'eye-off'}
              size={24}
              color="#aaa"
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.btn}>
          {!isLoading ? (
            <Text style={styles.text}>Sign in</Text>
          ) : (
            <ActivityIndicator size="small" color={'white'} />
          )}
        </TouchableOpacity>
        <View style={styles.register}>
          <Text style={styles.text}>
            Don't have an account?{' '}
            <Pressable>
              <Text style={styles.text}>Register</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flexGrow: 1,
    padding: 20,
  },
  input: {
    padding: 12,
    fontSize: 18,
    width: '90%',
    color: 'white',
  },
  welcome: {
    fontSize: 32,
    color: 'white',
    fontWeight: '400',
  },
  wrapper: {
    gap: 10,
  },
  container: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d7d7d7',
  },
  header: {
    color: 'white',
    fontWeight: '600',
    fontSize: 36,
  },
  icon: {
    marginLeft: 0,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 16,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  formWrap: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
  },
  register: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignIn;
