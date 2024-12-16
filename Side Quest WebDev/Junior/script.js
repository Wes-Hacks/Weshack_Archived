document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully');

    const alertButton = document.getElementById('alertButton');
    alertButton.addEventListener('click', () => {
        alert('Button clicked!');
    });
});