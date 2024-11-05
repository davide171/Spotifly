function startDownload() {
    const playlistUrl = document.getElementById('playlist-url').value;
    if (!playlistUrl) {
        document.getElementById('result').innerText = 'Inserisci un URL valido.';
        return;
    }

    fetch('https://backend-link.fly.dev/api/download', { // Link backend Fly.io
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: playlistUrl }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Download completato: ${data.files.join(', ')}`;
    })
    .catch(error => {
        document.getElementById('result').innerText = 'Errore durante il download.';
        console.error('Errore:', error);
    });
}
