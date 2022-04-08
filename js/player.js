class Player {

    constructor(ctx, posX, posY, width, height, gameSize, app) {
        this.ctx = ctx
        this.playerPos = { x: posX, y: posY }
        this.playerSize = { w: width, h: height }
        this.gameSize = { w: gameSize.w, h: gameSize.h }
        this.app = app

        this.characterInstance = undefined

        // this.characterInstance.frames = 5
        // this.characterInstance.framesIndex = 0


        this.init()
    }



    init() {
        this.characterInstance = new Image()
        this.characterInstance.src = 'img/marciano.png'

        this.characterInstance.frames = 5
        this.characterInstance.framesIndex = 0
    }

    draw() {
        this.ctx.drawImage(this.characterInstance, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)

        // this.ctx.drawImage(
        //     this.characterInstance,
        //     this.characterInstance.framesIndex * (this.characterInstance.width / this.characterInstance.frames),
        //     0,
        //     this.characterInstance.width / this.characterInstance.frames,
        //     this.characterInstance.height,
        //     this.playerPos.x,
        //     this.playerPos.y,
        //     this.playerSize.w,
        //     this.playerSize.h
        // )
        // this.characterInstance.framesIndex
        // this.animate(this.app.timeCounter)
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



    // Sprite movement
    animate(frameCounter) {
        if (frameCounter % 10 === 0) {
            console.log("now!")
            this.characterInstance.framesIndex++
            console.log(frameCounter)
        }
        if (this.characterInstance.framesIndex >= this.characterInstance.frames) {
            this.characterInstance.framesIndex = 0
        }
    }

}