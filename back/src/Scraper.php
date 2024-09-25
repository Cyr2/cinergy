<?php namespace Scraper;
class Scraper {
    private $url;

    public function __construct($url) {
        $this->url = $url;
    }

    public function getMovies() {
        // Charger le contenu HTML de la page
        $html = file_get_contents($this->url);

        // Initialiser DOMDocument et charger le HTML
        $doc = new \DOMDocument();
        @$doc->loadHTML($html); // @ supprime les warnings d'analyse HTML

        // Créer un XPath pour interroger le DOM
        $xpath = new \DOMXPath($doc);

        // Rechercher la balise <script> avec l'id "__NEXT_DATA__"
        $scriptTag = $xpath->query('//script[@id="__NEXT_DATA__"]')->item(0);

        if ($scriptTag) {
            // Extraire le contenu JSON de la balise script
            $jsonContent = $scriptTag->textContent;

            // Décoder le contenu JSON en tableau PHP
            $data = json_decode($jsonContent, true);

            // Vérifier si la clé 'props' existe et récupérer les informations nécessaires
            if (isset($data['props']['pageProps']['prog'])) {
                return $data['props']['pageProps']['prog'];
            } else {
                return ['Erreur : Impossible de trouver les informations de films'];
            }
        } else {
            return ['Erreur : Impossible de trouver la balise JSON'];
        }
    }
}
?>
