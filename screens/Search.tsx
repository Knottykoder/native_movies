import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import useDebounce from '../hooks/useDebounce';
import SearchResult from '../components/SearchResult';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTlkMzBhYzc5ZjI4MjRjZDljOTAyYzk2NzZlZGNhMSIsIm5iZiI6MTcyMTcyODI4My44MTI0MDYsInN1YiI6IjYxNWNhZDZjZGI5NTJkMDA2MmMxYzVlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LWCo3dRYWipz_Q4C3kYlLVSTug4wZ5IoNAW6TSJnbLY',
  },
};

const Search = () => {
  const [text, setText] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>();
  const debouncedSearchTerm = useDebounce(text, 1000);

  useEffect(() => {
    try {
      setIsLoading(true);
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${debouncedSearchTerm}&include_adult=false&language=en-US&page=1`,
        options,
      )
        .then(res => res.json())
        .then((data: {results: any}) => {
          setSearchMovies(data?.results);
        });
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  }, [debouncedSearchTerm]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Search Movies</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={val => setText(val)}
          value={text}
          placeholder="What are you looking for...."
          placeholderTextColor={'red'}
        />
        {isLoading && <ActivityIndicator size="large" style={styles.loading} />}
      </View>
      <SearchResult movies={searchMovies} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'black',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 380,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderRadius: 4,
    color: 'red',
    fontSize: 16,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 30,
    top: 0,
    bottom: 0,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default Search;
