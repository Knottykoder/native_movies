import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';

const SearchResult = ({movies}: {movies: any}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}: {item: any}) => (
          <MovieCard
            title={item?.original_title || item?.name}
            src={item?.poster_path}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  text: {color: 'white'},
});

export default SearchResult;
