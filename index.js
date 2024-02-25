const jokeText = document.querySelector('.container p');

document.addEventListener('DOMContentLoaded', () => {
    // Initially hide the paragraph
    jokeText.style.display = 'none';
    getJoke();
});

async function getJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    
    // Show the paragraph and set its text
    jokeText.style.display = 'block';
    jokeText.innerHTML = jokeObj.joke;
}
