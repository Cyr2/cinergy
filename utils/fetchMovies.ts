export function useMovies() {
  const loaded = ref(false);
  const movies = ref([]);

  const getMovies = async () => {
    const url = "https://cine-api-git-main-cyr2s-projects.vercel.app";
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${ response.status }`);
      }

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
