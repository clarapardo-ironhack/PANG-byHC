class Player {

    constructor(ctx, posX, posY, width, height, gameSize) {
        this.ctx = ctx
        this.playerPos = { x: posX, y: posY }
        this.playerSize = { w: width, h: height }
        this.gameSize = { w: gameSize.w, h: gameSize.h }

        this.imageInstance = undefined

        this.init()
    }



    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/marciano.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
    }



    // Movement instructions
    moveLeft() {
        if (this.playerPos.x > 5) {
            this.playerPos.x -= 15
        }
    }

    moveRight() {
        if (this.playerPos.x + this.playerSize.w <= this.gameSize.w) {
            this.playerPos.x += 15
        }
    }

    moveUp() {
        this.playerPos.y -= 15
    }

    moveDown() {
        this.playerPos.y += 15
    }

}