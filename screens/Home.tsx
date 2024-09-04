import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import useFetchMovies from '../hooks/useFetchMovies';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const {data, isLoading} = useFetchMovies();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Movies App</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.flatContainer}>
          <FlatList
            contentContainerStyle={{gap: 10, alignItems: 'center'}}
            columnWrapperStyle={{flexWrap: 'wrap'}}
            numColumns={2}
            data={data}
            renderItem={({item}: {item: any}) => (
              <MovieCard
                title={item.original_title || item.name}
                src={item.poster_path}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },
  wrapper: {
    padding: 10,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  flatContainer: {
    padding: 10,
    gap: 10,
    flex: 1,
    width: 'auto',
    backgroundColor: 'black',
  },
});

export default Home;
