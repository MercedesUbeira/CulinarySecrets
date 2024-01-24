document.addEventListener('DOMContentLoaded', function () {
    const player = document.getElementById('player');
    const destination = document.getElementById('destination');

    document.addEventListener('keydown', movePlayer);

    function movePlayer(e) {
        const speed = 10;

        switch (e.key) {
            case 'ArrowUp':
                player.style.top = Math.max(0, player.offsetTop - speed) + 'px';
                break;
            case 'ArrowDown':
                player.style.top = Math.min(window.innerHeight - player.clientHeight, player.offsetTop + speed) + 'px';
                break;
            case 'ArrowLeft':
                player.style.left = Math.max(0, player.offsetLeft - speed) + 'px';
                break;
            case 'ArrowRight':
                player.style.left = Math.min(window.innerWidth - player.clientWidth, player.offsetLeft + speed) + 'px';
                break;
        }

        checkCollision();
    }

    function checkCollision() {
        const playerRect = player.getBoundingClientRect();
        const destinationRect = destination.getBoundingClientRect();

        if (
            playerRect.left < destinationRect.right &&
            playerRect.right > destinationRect.left &&
            playerRect.top < destinationRect.bottom &&
            playerRect.bottom > destinationRect.top
        ) {
            alert("Congratulations! You made it! Now let's head back to the main page");
            resetGame();
        }
    }


    function resetGame() {
        // Set player at the left bottom corner
        player.style.top = (window.innerHeight - player.clientHeight) + 'px';
        player.style.left = '0';
    
        // Set destination at the top
        destination.style.top = '0';
        destination.style.left = Math.random() * (window.innerWidth - destination.clientWidth) + 'px';
    
        // Show congratulations message and redirect to index.html after OK is clicked
        if (confirm) {
            window.location.href = '/index.html';
        }}
    
});
