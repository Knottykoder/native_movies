import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({navigation}: {navigation: any}) => {
  const handlePress = () => {
    navigation.navigate('signIn');
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Icon name="movie-roll" size={50} color="white" />
        <Text style={[styles.title]}>MOVIES CLUB</Text>
      </View>
      <View style={styles.welcomeWrap}>
        <View style={styles.top}>
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={handlePress}>
            <Text style={styles.text}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.top, styles.socialWrapper]}>
        <Text style={styles.text}>Login with Socials</Text>
        <View style={styles.socials}>
          <Icon name="google" color="white" size={20} />
          <Icon name="facebook" color="white" size={20} />
          <Icon name="instagram" color="white" size={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexGrow: 1,
    justifyContent: 'space-around',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  top: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: 'white',
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  btnContainer: {
    gap: 20,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 12,
  },
  socials: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  socialWrapper: {},
  welcomeWrap: {
    gap: 16,
    marginTop: 100,
  },
});

export default Login;
