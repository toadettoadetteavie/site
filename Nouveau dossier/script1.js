function checkPassword(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre automatiquement

    var passwordInput = document.getElementById('password');
    var messageElement = document.getElementById('message');

    // Vérifie le mot de passe (ici, le mot de passe est "mama")
    if (passwordInput.value === 'mama') {
        // Redirige vers le fichier PDF lorsque le mot de passe est correct
        window.location.href = 'prog11_2023-2024.pdf';
    } else {
        // Affiche un message d'erreur en cas de mot de passe incorrect
        messageElement.textContent = 'Mot de passe incorrect. Réessayez.';
    }
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        checkPassword(event);
    }
}
