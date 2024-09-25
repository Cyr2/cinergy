export function useMovies() {
  const loaded = ref(false);
  const movies = ref([]);

  const getMovies = async () => {
    const url = "http://localhost:8000/";
    try {
      const response = await fetch(url);
      const responseAsJson = await response.json();

      movies.value = responseAsJson.data;
    }
    catch (error) {
      console.error("Erreur lors de la récupération des films", error);
    }
    finally {
      loaded.value = true;
    }
  };

  getMovies();

  return {
    movies,
    loaded,
  };
}
