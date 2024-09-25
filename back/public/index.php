<?php
require_once '../vendor/autoload.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

use Scraper\Scraper;

$url = 'https://pontlabbe.cineville.fr/programmes/pontlabbe';
$scraper = new Scraper($url);
$movies = $scraper->getMovies();

header('Content-Type: application/json');
echo json_encode([
    'status' => 'success',
    'data' => $movies
]);
?>
