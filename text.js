// const textCanvas = document.getElementById('text-canvas');
// const tc = textCanvas.getContext('2d');

class Particle {
    constructor(){

    }
    draw(){

    }
    update(){

    }
}

class Effect{
    constructor(context){
        this.context = context
        this.particles = [];
        this.gap = 3;
        this.mouse = {
            radius: 20000,
            x:0,
            y:0
        }
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });  
    }
    wrapText(text, font, x, y){
        this.context.font = font
        this.x = x;
        this.y = y;
        this.context.fillText(text, this.x, this.y);
        // this.convertToParticles();
    }
    // convertToParticles(){
    //     this.particle = [];
    //     const pixels = this.context.getImageData(0, 0, 1024, 250);
    // }
    render(){

    }
    
}
const zone1 = new Sprite({
    position: {
        x: 1024,
        y: 0,
    },
    imageSrc: 'images/zone1.png',
})

const map = new Sprite({
    position: {
        x: 1800,
        y: 50,
    },
    imageSrc: 'images/map.png',
})

const livingPie = new Sprite({
    position: {
        x: 1750,
        y: 70,
    },
    imageSrc: 'images/livingPie.png',
})

const techTower = new Sprite({
    position: {
        x: 2500,
        y: 50,
    },
    imageSrc: 'images/techTower.png',
})

const zone2 = new Sprite({
    position: {
        x: 3300,
        y: 0,
    },
    imageSrc: 'images/zone2.png',
})

const zone3 = new Sprite({
    position: {
        x: 5000,
        y: 0,
    },
    imageSrc: 'images/zone3.png',
})

const Experience = new Sprite({
    position: {
        x: 5000,
        y: 200,
    },
    imageSrc: 'images/experience.png',
}) 

const ConeLi = new Sprite({
    position: {
        x: 5900,
        y: 0,
    },
    imageSrc: 'images/ConeLi.png',
}) 



function loadZone1(){
    zone1.update()
    map.update()
    effect.wrapText('I lived in..', '50px Courier', 2000, 50)
    livingPie.update()
    techTower.update()
    effect.wrapText('Currently studying..', '40px Courier', 2900, 50)
    effect.wrapText('Georgia Institute of Technology', '50px Impact', 2900, 120)
    effect.wrapText('Major in..', '40px Courier', 2900, 190)
    effect.wrapText('Computational Media', '50px Impact', 2900, 260)
    effect.wrapText('Game and Media', '40px Courier', 2900, 330)
    zone2.update()
    effect.wrapText('Scripting & Programming', '40px Impact', 4200, 50)
    effect.wrapText('Python, Java, JavaFX, C, C#', '30px Courier', 4200, 90)
    effect.wrapText('HTML, CSS, JavaScript, TypeScript', '30px Courier', 4200, 125)
    effect.wrapText('Graphics and Art', '40px Impact', 4200, 175)
    effect.wrapText('Photoshop, Procreate, Illustrator, Figma', '30px Courier', 4200, 210)
    effect.wrapText('Animation & Video', '40px Impact', 4200, 260)
    effect.wrapText('Blender, After Effects, Adobe Flash, C4D', '30px Courier', 4200, 295)
    effect.wrapText('Game Development', '40px Impact', 4200, 345)
    effect.wrapText('Unity, OpenGL, WebGL', '30px Courier', 4200, 380)
    zone3.update()
    Experience.update()
    ConeLi.update()
    effect.wrapText('Co-Founder', '35px Courier', 6000, 200)
    effect.wrapText('Lead AI Engineer & Software Engineer', '35px Courier', 6000, 250)
    effect.wrapText('Shanghai/Atlanta, 2022 - Current', '35px Courier', 6000, 300)
}

function animate(){

}


