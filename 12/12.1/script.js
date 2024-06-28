let userLink = '';

document.getElementById('enterLinkBtn').addEventListener('click', () => {
    userLink = prompt('Будьласка, введіть посилання');
});

document.getElementById('redirectBtn').addEventListener('click', () => {
    if (userLink) {
        window.location.href = userLink;
    } else {
        alert('Будьласка, спочатку введіть посилання.')
    }
})