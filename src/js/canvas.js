import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576
 
const gravity = 0.25

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 420
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30
        this.height = 30
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
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
        this.image = image
        this.width = image.width
        this.height = image.height
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

/*class Ground {
    constructor() {
        this.position = {
            x: 0,
            y: 500
        }
        this.width = 2000
        this.height = 150
    }

    draw() {
        c.fillStyle = 'green'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}*/

function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image
}

const platformImage = createImage(platform)

const player = new Player()
//const ground = new Ground()
const platforms = [new Platform({x: 300, y: 270, image: platformImage}), new Platform({x: 1100, y: 180, image: platformImage}),
        new Platform({x: 1900, y: 220, image: platformImage}), new Platform({x: 2750, y: 180, image: platformImage}), 
        new Platform({x: -200, y: 460, image: platformImage}), new Platform({x: 378, y: 460, image: platformImage}), 
        new Platform({x: 956, y: 460, image: platformImage}), new Platform({x: 1534, y: 460, image: platformImage}), 
        new Platform({x: 2112, y: 460, image: platformImage}), new Platform({x: 2690, y: 460, image: platformImage}),
        new Platform({x: 3268, y: 460, image: platformImage})
    ]

const genericObjects = [
    new GenericObject({
        x: -1,
        y: -1,
        image: createImage(background)
    }),
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

    genericObjects.forEach(genericObjects => {
        genericObjects.draw()
    })

    platforms.forEach(platform => {
        platform.draw()
    })
    
    player.update()
    //ground.draw()

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x > 200) {
        player.velocity.x = -5
    } else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scrollOffset += 5
            platforms.forEach(platform => {
                platform.position.x -= 5
            })
            
        } else if (keys.left.pressed) {
            scrollOffset -= 5
            platforms.forEach(platform => {
                platform.position.x += 5 
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
            break
        
        case "d":
            console.log('right')
            keys.right.pressed = true
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
            break
        
        case "d":
            keys.right.pressed = false
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