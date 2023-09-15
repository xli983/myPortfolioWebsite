const canvas = document.getElementById('main-canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 0.5
const speed = 3

const worldwidth = 12000

const camera = {
    position: {x: 0, y: 0}
};

const player = new Player({
    position:{x: 0, y: 0},
    imageSrc:'character/s.png'})

const keys = {
    d: {pressed: false},
    a: {pressed: false},
}
function updateCamera() {
    let targetX = player.position.x + player.size.width / 2 - canvas.width / 2;
    if (targetX < 0) {
        targetX = 0;
    }
    if (targetX > worldwidth - canvas.width) {
        targetX = worldwidth - canvas.width;
    }
    camera.position.x = targetX;
}


const effect = new Effect(c);

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width ,canvas.height)


    c.save()
    c.scale(0.8,0.8)
    c.translate(-camera.position.x/4, 0)
    background1.update()
    c.restore()

    updateCamera()

    c.save()
    c.translate(-camera.position.x, 0)
    effect.wrapText('Xiangyi "Jessica" Li', '70px Courier', 110, 120)
    effect.wrapText('Interactive Resume', '50px Courier', 250, 200)
    loadZone1()
    background2.update()
    player.update()
    c.restore()
    

    player.velocity.x = 0
    if (keys.d.pressed) {
        if (player.position.x + player.velocity.x < worldwidth - player.size.width){
            player.velocity.x += speed
        }
        player.lastDirection = 'right'
    }
    else if (keys.a.pressed) {
        if (player.position.x + player.velocity.x > 0){
            player.velocity.x -= speed
        }
        player.lastDirection = 'left'
        }
    
}

animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
        case 'ArrowRight': 
            keys.d.pressed = true;
            break;
        case 'a':
        case 'ArrowLeft': 
            keys.a.pressed = true;
            break;
        case 'w':
        case 'ArrowUp': 
            if (player.velocity.y === 0) {
                player.velocity.y -= 15;
            }
            break;
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
        case 'ArrowRight': 
            keys.d.pressed = false;
            break;
        case 'a':
        case 'ArrowLeft': 
            keys.a.pressed = false;
            break;
    }
});