class PlatformsStairs {

    constructor(ctx, gameSize, platformPosX, platformPosY, platformWidth, stairPosX) {
        // Platform
        this.ctx = ctx
        this.gameSize = gameSize
        this.platformPos = { x: platformPosX, y: platformPosY }
        this.platformSize = { w: platformWidth, h: 60 }

        // Stair
        this.stairPos = { x: stairPosX, y: platformPosY }
        this.stairSize = { w: 120, h: gameSize.h - platformPosY - 20 }
        this.stairInstance = undefined
        this.platformInstance = undefined

        this.init()
    }

    init() {
        this.stairInstance = new Image()
        this.stairInstance.src = "./img/escalera.png"

        this.platformInstance = new Image()
        this.platformInstance.src = "./img/Tile.png"
    }

    draw() {

        // Platform
        // this.ctx.fillStyle = 'grey'
        // this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)
        this.ctx.drawImage(
            this.platformInstance,
            this.platformPos.x,
            this.platformPos.y,
            this.platformSize.w,
            this.platformSize.h
        )

        // Stairs
        // this.ctx.fillStyle = 'red'
        // this.ctx.fillRect(this.stairPos.x, this.stairPos.y, this.stairSize.w, this.stairSize.h)
        this.ctx.drawImage(
            this.stairInstance,
            this.stairPos.x,
            this.stairPos.y,
            this.stairSize.w,
            this.stairSize.h
        )

    }


}