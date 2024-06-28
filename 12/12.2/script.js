document.getElementById('button-container').addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'BUTTON') {
        alert(`Button ${event.target.getAttribute('data-button')} clicked!`);
    }
});