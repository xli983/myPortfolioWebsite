

class Sprite {
    constructor({position, imageSrc}) {
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
    }

    draw() {
        if (!this.image) return
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    update(){
        this.draw()
    }
}
const background1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: 'images/background1.png',
})

const background2 = new Sprite({
    position: {
        x: 0,
        y: 242,
    },
    imageSrc: 'images/background2.png',
})
