document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('like-btn');
    const searchButton = document.getElementById('search-btn');
    let likeCount = 0;

  
    if (likeButton) {
        likeButton.addEventListener('click', () => {
            likeCount++;
            likeButton.textContent = `✅ Liked! (${likeCount})`;
        });
    }


    if (searchButton) {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
         
            alert('The search feature would be implemented here! Try searching "Arrays".');
        });
    }

 
});