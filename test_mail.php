<?php
$to = "baabdou2ba@gmail.com"; // Remplacez par votre adresse e-mail
$subject = "Test d'envoi d'e-mail PHP";
$message = "Ceci est un test pour vérifier la configuration d'envoi d'e-mail PHP.";
$headers = "From: abdouba97@gmail.com"; // Remplacez par une adresse d'expéditeur valide

if (mail($to, $subject, $message, $headers)) {
    echo "L'e-mail a été envoyé avec succès.";
} else {
    echo "L'envoi de l'e-mail a échoué.";
}
