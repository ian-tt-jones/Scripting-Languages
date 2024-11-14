$(document).ready(function() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var sprite = new Image();
    var spriteWidth = 236;
    var spriteHeight = 294;
    sprite.src = 'proj2_sprite_skel.png';
    var frames = 4; 
    var frameIndex = 0;
    var tickCount = 0;
    var ticksPerFrame = 5;

    var x = window.innerWidth / 2 - spriteWidth / 2;
    var y = window.innerHeight / 2 - spriteHeight / 2;
    var speed = 2;

    var direction = 'down'; 
    var keys = {};

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        x = canvas.width / 2 - spriteWidth / 2;
        y = canvas.height / 2 - spriteHeight / 2;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    window.addEventListener('keydown', (e) => {
        keys[e.key] = true;
    });

    window.addEventListener('keyup', (e) => {
        keys[e.key] = false;
    });

    function update() {
        var moving = false;

        if (keys['ArrowRight'] || keys['d']) {
            direction = 'right';
            if (x + speed + spriteWidth <= canvas.width) {
                x += speed;
            }
            moving = true;
        } else if (keys['ArrowLeft'] || keys['a']) {
            direction = 'left';
            if (x - speed >= 0) {
                x -= speed;
            }
            moving = true;
        } else if (keys['ArrowUp'] || keys['w']) {
            direction = 'up';
            if (y - speed >= 0) {
                y -= speed;
            }
            moving = true;
        } else if (keys['ArrowDown'] || keys['s']) {
            direction = 'down';
            if (y + speed + spriteHeight <= canvas.height) {
                y += speed;
            }
            moving = true;
        }

        if (moving) {
            tickCount++;
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                frameIndex = (frameIndex + 1) % frames;
            }
        }
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let directionIndex = 0;

        switch (direction) {
            case 'down':
                directionIndex = 0;
                spriteWidth = 237;
                spriteHeight = 294;
                context.drawImage(
                    sprite,
                    frameIndex * spriteWidth,
                    directionIndex * spriteHeight,
                    spriteWidth,
                    spriteHeight,
                    x,
                    y,
                    spriteWidth,
                    spriteHeight
                );
                break;
            case 'up':
                directionIndex = 1;
                spriteWidth = 247;
                spriteHeight = 294;
                context.drawImage(
                    sprite,
                    (frameIndex * spriteWidth) + 1000,
                    0,
                    spriteWidth,
                    spriteHeight,
                    x,
                    y,
                    spriteWidth,
                    spriteHeight
                );
                break;
            case 'right':
                directionIndex = 1;
                spriteWidth = 177;
                spriteHeight = 313;
                context.drawImage(
                    sprite,
                    frameIndex * spriteWidth,
                    directionIndex * spriteHeight ,
                    spriteWidth,
                    spriteHeight,
                    x,
                    y,
                    spriteWidth,
                    spriteHeight
                );
                break;
            case 'left':
                directionIndex = 2;
                spriteWidth = 181;
                spriteHeight = 294;
                context.drawImage(
                    sprite,
                    frameIndex * spriteWidth,
                    directionIndex * spriteHeight + 40,
                    spriteWidth,
                    spriteHeight,
                    x,
                    y,
                    spriteWidth,
                    spriteHeight
                );
                break;
        }
    }

    function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }

    sprite.onload = function() {
        gameLoop();
    };
});
