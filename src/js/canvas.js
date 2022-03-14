import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import spriteStandRight from '../img/spriteStandRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteRunLeft from '../img/spriteRunLeft.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576
 
const gravity = 0.2

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 300
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 66
        this.height = 150
        this.image = createImage(spriteStandRight)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createImage(spriteStandRight),
                left: createImage(spriteStandLeft),
                cropWidth: 177,
                width: 66
            },
            run: {
                right: createImage(spriteRunRight),
                left: createImage(spriteRunLeft),
                cropWidth: 341,
                width: 127.875
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 177
    }

    draw() {
        c.drawImage(
            this.currentSprite, 
            this.currentCropWidth * this.frames, 
            0, 
            this.currentCropWidth, 
            400,
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        )
    }

    update() {
        this.frames++
        if (this.frames > 29) 
            {this.frames = 0}
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0
        }
    }
}

class Platform {
    constructor({x, y, image}) {
        this.position = {
            x,
            y
        }
        this.image = createImage(platform)
        this.width = image.width
        this.height = 30 
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class GenericObject {
    constructor({x, y, image}) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class BackgroundObject {
    constructor({x, y, image}) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image
}

const platformImage = createImage(platform)

const player = new Player()

const platforms = [new Platform({x: 300, y: 250, image: platformImage}), new Platform({x: 1100, y: 180, image: platformImage}),
        new Platform({x: 1900, y: 220, image: platformImage}), new Platform({x: 2850, y: 180, image: platformImage}), 
        new Platform({x: -200, y: 460, image: platformImage}), new Platform({x: 378, y: 460, image: platformImage}), 
        new Platform({x: 956, y: 460, image: platformImage}), new Platform({x: 1534, y: 460, image: platformImage}), 
        new Platform({x: 2112, y: 460, image: platformImage}), new Platform({x: 2890, y: 460, image: platformImage}),
        new Platform({x: 3668, y: 460, image: platformImage})
    ]

const backgroundObject = [
    new BackgroundObject({
        x: -2,
        y: -2,
        image: createImage(background)
    })
]

const genericObjects = [
    new GenericObject({
        x: -1,
        y: -1,
        image: createImage(hills)
    })
]

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    jump: {
        pressed: false
    }
}

let scrollOffset = 0

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    backgroundObject.forEach(backgroundObject => {
        backgroundObject.draw()
    })
    
    genericObjects.forEach(genericObjects => {
        genericObjects.draw()
    })

    platforms.forEach(platform => {
        platform.draw()
    })
    
    player.update()

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 8
    } else if (keys.left.pressed && player.position.x > 200) {
        player.velocity.x = -8
    } else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scrollOffset += 8
            platforms.forEach(platform => {
                platform.position.x -= 8
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x -= 5
            })
            backgroundObject.forEach(backgroundObject => {
                backgroundObject.position.x -= 2
            })
            
        } else if (keys.left.pressed) {
            scrollOffset -= 8
            platforms.forEach(platform => {
                platform.position.x += 8 
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x += 5
            })
            backgroundObject.forEach(backgroundObject => {
                backgroundObject.position.x += 2
            })
        }
    }

    // Kolizja z platformą od góry i boków
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y
            && player.position.y + player.height + player.velocity.y >= platform.position.y
            && player.position.x + player.width >= platform.position.x
            && player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0
        }
    })

    // Kolizja z platformą od dołu i boków
    platforms.forEach(platform => {
        if (player.position.y >= platform.position.y
            && player.position.y + player.velocity.y <= platform.position.y + platform.height
            && player.position.x + player.width >= platform.position.x
            && player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 5
        }
    })
    if (scrollOffset > 3000) {
        console.log('Wygrałeś !!!')
    } else if (scrollOffset < -100) {
        console.log('Zmień kierunek !!!')
    }
}

animate()

addEventListener('keydown', ({ key }) => {
    switch (key) {
        case "a":
            console.log('left')
            keys.left.pressed = true
            player.currentSprite = player.sprites.run.left
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
            break
        
        case "d":
            console.log('right')
            keys.right.pressed = true
            player.currentSprite = player.sprites.run.right
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
            break

        case "w":
            console.log('up')
            keys.jump.pressed = true
            player.velocity.y -= 10
            break
            
        case "s":
            console.log('down')
            break
    }
    console.log(keys.left.pressed)
})

addEventListener('keyup', ({ key }) => {
    switch (key) {
        case "a":
            keys.left.pressed = false
            player.currentSprite = player.sprites.stand.left
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break
        
        case "d":
            keys.right.pressed = false
            player.currentSprite = player.sprites.stand.right
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break

        case "w":
            keys.jump.pressed = false
            player.velocity.y -= 0
            break
            
        case "s":
    
            break
    }
    console.log(keys.left.pressed)
})