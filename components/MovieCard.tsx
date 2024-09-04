/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, Text, View} from 'react-native';

type ItemProps = {title: string; src: string};

const MovieCard = ({title, src}: ItemProps) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `https://image.tmdb.org/t/p/original${src}`,
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '50%',
    marginVertical: 10,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 250,
    borderRadius: 10,
  },
  title: {
    color: 'white',
  },
});

export default MovieCard;
