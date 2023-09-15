

class Player extends Sprite{
    constructor({position, imageSrc, frameRate = 1}) {
        super({imageSrc})
        this.position = position
        this.velocity = {x: 0, y: 1}
        this.size = {width: 70, height: 100}
        this.frameRate = frameRate;
        this.frameCounter = 0;
        this.currentFrame = 1;
    }
    draw(){
        if (!this.image) return

        if (this.velocity.y !== 0) {
            this.imageSrc = `character/s1.png`;
            this.image = new Image();
            this.image.src = this.imageSrc;
    
        } else if (this.velocity.x !== 0) { // Running
            this.frameCounter++;
            if (this.frameCounter >= (10 / this.frameRate)) {
                this.frameCounter = 0;
                this.currentFrame++;
                if (this.currentFrame > 8) {
                    this.currentFrame = 1;
                }
                this.imageSrc = `character/s${this.currentFrame}.png`;
                this.image = new Image();
                this.image.src = this.imageSrc;
            }
        } else { // Not running
            this.imageSrc = `character/s.png`;
            this.image = new Image();
            this.image.src = this.imageSrc;
        }

        c.save();  
        if (this.velocity.x < 0) {
            c.scale(-1, 1);
            c.drawImage(
                this.image,
                -this.position.x - this.size.width,
                this.position.y,
            );
        } else {
            c.drawImage(
                this.image,
                this.position.x,
                this.position.y,
            );
        }
        c.restore();  // Restore the state

    }


    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.size.height + this.velocity.y < canvas.height - 10) {
            this.velocity.y += gravity
        }else{
            this.velocity.y = 0
        }
    }

}

