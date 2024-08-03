function updateRatingValue(value) {
    document.getElementById('rating-value').innerText = value;
}

function submitRating() {
    const language = document.getElementById('language').value;
    const rating = document.getElementById('rating').value;
    alert(`You rated yourself ${rating} in ${language}`);
}