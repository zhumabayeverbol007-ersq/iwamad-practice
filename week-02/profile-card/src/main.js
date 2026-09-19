const likeBtn = document.querySelector('#likeBtn');
const card = document.querySelector('.card');

let isLiked = false;

likeBtn.addEventListener('click', () => {
    isLiked = !isLiked;

    likeBtn.textContent = isLiked ? '❤️ Liked' : '🤍 Like';
    likeBtn.classList.toggle('liked', isLiked);
    card.classList.toggle('card-liked', isLiked);
});