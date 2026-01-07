<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $firstname = $data['firstname'] ?? '';
    $lastname = $data['lastname'] ?? '';
    $email = $data['email'] ?? '';

    // Stocker le compteur de formulaires
    $counterFile = __DIR__ . '/form_count.txt';
    $count = file_exists($counterFile) ? (int)file_get_contents($counterFile) : 0;
    $count++;
    file_put_contents($counterFile, $count);

    // Email simplifié
    $to = 'elalamisirine5@gmail.com';
    $subject = 'Nouvelle inscription - BOZAR';
    $message = "Nom: $firstname $lastname\nEmail: $email\n\nTotal inscriptions: $count";
    $headers = "From: noreply@bozar.be";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true, 'count' => $count]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
}
?>