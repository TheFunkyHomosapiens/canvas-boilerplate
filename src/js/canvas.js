import platform from '../img/platform.png'
import farClouds from '../img/tło5.png'
import clouds from '../img/tło4.png'
import sky from '../img/tło3.png'
import hills from '../img/tło1.png'
import background from '../img/tło2.png'
import spriteStandRight from '../img/idleright.png'
import spriteStandLeft from '../img/idle_left.png'
import spriteRunRight from '../img/run_right.png'
import spriteRunLeft from '../img/run_left.png'


// Zmienne główne
const canvas = document.querySelector('canvas')
const screen = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576
const gravity = 0.2

// Klasy 
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
        this.width = 100
        this.height = 156
        this.image = createImage(spriteStandRight)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createImage(spriteStandRight),
                
                cropWidth: 310.3,
                width: 100,
            
                left: createImage(spriteStandLeft)
                
            },
            run: {
                right: createImage(spriteRunRight),
                left: createImage(spriteRunLeft),
                cropWidth: 415,
                width: 130
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 310.3
    }

    draw() {
        screen.drawImage(
            this.currentSprite, 
            this.currentCropWidth * this.frames, 
            0, 
            this.currentCropWidth, 
            500,
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
        screen.drawImage(this.image, this.position.x, this.position.y)
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
        screen.drawImage(this.image, this.position.x, this.position.y)
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
        screen.drawImage(this.image, this.position.x, this.position.y)
    }
}

class SkyObject {
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
        screen.drawImage(this.image, this.position.x, this.position.y)
    }
}

class CloudsObject {
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
        screen.drawImage(this.image, this.position.x, this.position.y)
    }
}

class FarCloudsObject {
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
        screen.drawImage(this.image, this.position.x, this.position.y)
    }
}

// Funkcja ładowania obrazów
function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image
}

// Zmienne klas
const platformImage = createImage(platform)

const player = new Player()

const platforms = [new Platform({x: 0, y: 510, image: platformImage}), new Platform({x: 400, y: 510, image: platformImage}), new Platform({x: 1000, y: 310, image: platformImage}),
    new Platform({x: 1700, y: 510, image: platformImage}), new Platform({x: 2350, y: 350, image: platformImage}), new Platform({x: 3000, y: 200, image: platformImage}),
    new Platform({x:3700, y: 330, image: platformImage}), new Platform({x: 4300, y: 510, image: platformImage}), new Platform({x: 5100, y: 510, image: platformImage}),
    new Platform({x: 5800, y: 400, image: platformImage}), new Platform({x: 6550, y: 510, image: platformImage}), new Platform({x: 6950, y: 510, image: platformImage})
        
    ]

const farCloudsObject = [
    new FarCloudsObject({
        x: -2,
        y: -2,
            image: createImage(farClouds)
    })
]

const cloudsObject = [
    new CloudsObject({
        x: -2,
        y: -2,
        image: createImage(clouds)
    })
]

const skyObject = [
    new SkyObject({
        x: -2,
        y: -2,
        image: createImage(sky)
    })
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

// Pętla gry
function animate() {
    requestAnimationFrame(animate)
    screen.fillStyle = 'white'
    screen.fillRect(0, 0, canvas.width, canvas.height)

    skyObject.forEach(skyObject => {
        skyObject.draw()
    })

    farCloudsObject.forEach(farCloudsObject => {
        farCloudsObject.draw()
    })

    cloudsObject.forEach(cloudsObject => {
        cloudsObject.draw()
    })

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

    // Efekt poryszającego się gracza, przesuwające się tło
    // oraz efekt parallax dla warstw tła
    if (keys.right.pressed && player.position.x < 450) {
        player.velocity.x = 8
    } else if (keys.left.pressed && player.position.x > 450) {
        player.velocity.x = -8
    } else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scrollOffset += 8
            platforms.forEach(platform => {
                platform.position.x -= 8
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x -= 4.5
            })
            backgroundObject.forEach(backgroundObject => {
                backgroundObject.position.x -= 3.5
            })
            skyObject.forEach(skyObject => {
                skyObject.position.x -= 1
            })
            cloudsObject.forEach(cloudsObject => {
                cloudsObject.position.x -= 1.5
            })
            farCloudsObject.forEach(farCloudsObject => {
                farCloudsObject.position.x -= 1
            })
            
        } else if (keys.left.pressed) {
            scrollOffset -= 8
            platforms.forEach(platform => {
                platform.position.x += 8 
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x += 4.5 
            })
            backgroundObject.forEach(backgroundObject => {
                backgroundObject.position.x += 3.5
            })
            skyObject.forEach(skyObject => {
                skyObject.position.x += 1
            })
            cloudsObject.forEach(cloudsObject => {
                cloudsObject.position.x += 1.5
            })
            farCloudsObject.forEach(farCloudsObject => {
                farCloudsObject.position.x += 1
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

// Obsługa klawiszy sterujących
addEventListener('keydown', ({ key }) => {
    switch (key) {
        case "a":
            console.log('left')
            keys.left.pressed = true
            player.currentSprite = player.sprites.run.left
            player.currentCropWidth = 415.25
            player.width = player.sprites.run.width
            break
        
        case "d":
            console.log('right')
            keys.right.pressed = true
            player.currentSprite = player.sprites.run.right
            player.currentCropWidth = 414.75
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
            player.currentCropWidth = 311.3
            player.width = player.sprites.stand.width
            break
        
        case "d":
            keys.right.pressed = false
            player.currentSprite = player.sprites.stand.right
            player.currentCropWidth = 310.2
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