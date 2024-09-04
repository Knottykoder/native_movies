import {useEffect, useState} from 'react';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTlkMzBhYzc5ZjI4MjRjZDljOTAyYzk2NzZlZGNhMSIsIm5iZiI6MTcyMTcyODI4My44MTI0MDYsInN1YiI6IjYxNWNhZDZjZGI5NTJkMDA2MmMxYzVlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LWCo3dRYWipz_Q4C3kYlLVSTug4wZ5IoNAW6TSJnbLY',
  },
};

const useFetchMovies = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovie = async () => {
    try {
      const fetchingMovie = await fetch(
        'https://api.themoviedb.org/3/trending/all/day?language=en-US',
        options,
      );
      const res = await fetchingMovie.json();
      setData(res.results);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);
  return {
    isLoading,
    data,
  };
};

export default useFetchMovies;
