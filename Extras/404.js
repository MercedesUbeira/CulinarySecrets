document.addEventListener('DOMContentLoaded', function () {
    const player = document.getElementById('player');
    const destination = document.getElementById('destination');
    let isDragging = false;
    let isGameWon = false;
    
//this will noy only work with the arrows in the computer, but also for touch in the phone! 

    player.addEventListener('touchstart', startDrag);
    player.addEventListener('touchmove', drag);
    player.addEventListener('touchend', endDrag);

    document.addEventListener('keydown', movePlayer);

    function startDrag(e) {
        isDragging = true;
    }

    function drag(e) {
        if (isDragging) {
            const touch = e.touches[0];
            movePlayerByTouch(touch.clientX, touch.clientY);
        }
    }

    function endDrag() {
        isDragging = false;
        checkCollision();
    }

    function movePlayerByTouch(x, y) {
        const speed = 10;

        const playerRect = player.getBoundingClientRect();

        const newX = Math.max(0, Math.min(window.innerWidth - playerRect.width, x - playerRect.width / 2));
        const newY = Math.max(0, Math.min(window.innerHeight - playerRect.height, y - playerRect.height / 2));

        player.style.left = newX + 'px';
        player.style.top = newY + 'px';
    }

    function movePlayer(e) {
        if (!isDragging) {
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
            if (!isGameWon) {
                isGameWon = true;
                alert("Congratulations! You made it! Now let's head back to the main page");
                window.location.href = '/index.html';
            }
        }
    }
});
