export function useCine() {
  const loaded = ref(false);
  const cine = ref([]);

  const getCine = async () => {
    try {
      const responseAsJson = [
        {
          id: 4153,
          name: "Cineville",
          city: "Pont-l'Abbé",
          lattitude: 47.871078,
          longitude: -4.225170,
        }
      ];

      cine.value = responseAsJson;
    }
    catch (error) {
      console.error("Erreur lors de la récupération des cinemas", error);
    }
    finally {
      loaded.value = true;
    }
  };

  getCine();

  return {
    cine,
    loaded,
  };
}
