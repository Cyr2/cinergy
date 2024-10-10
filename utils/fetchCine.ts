export function useCine() {
  const loaded = ref(false);
  const cine = ref([]);

  const getCine = async () => {
    const baseUrl = "https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records";

    const totalCine = (await fetchCineData(baseUrl, 0, 0)).total_count;
    const result = [];

    for (let offset = 0; offset < totalCine; offset += 100) {
      const data = await fetchCineData(baseUrl, 100, offset);
      result.push(...data.results);
    }

    console.log(totalCine, result);

    cine.value = result;
    loaded.value = true;
  };

  async function fetchCineData(urlWithoutParms: string, limit: number | null, offset: number | null) {
    const url = new URL(urlWithoutParms);
    if (limit) {
      url.searchParams.set("limit", limit.toString());
    }
    if (offset) {
      url.searchParams.set("offset", offset.toString());
    }
    try {
      const response = await fetch(url.toString());

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${ response.status }`);
      }

      const responseAsJson = await response.json();
      return responseAsJson;
    }
    catch (error) {
      console.error("Erreur lors de la récupération des cinemas", error);
    }
  }

  getCine();

  return {
    cine,
    loaded,
  };
}
