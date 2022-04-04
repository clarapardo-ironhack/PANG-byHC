class PlatformsStairs {

    constructor(ctx, gameSize, platformPosX, platformPosY, platformWidth, stairPosX) {
        // Platform
        this.ctx = ctx
        this.gameSize = gameSize
        this.platformPos = { x: platformPosX, y: platformPosY }
        this.platformSize = { w: platformWidth, h: 30 }

        // Stair
        this.stairPos = { x: stairPosX, y: platformPosY }
        this.stairSize = { w: 80, h: gameSize.h - platformPosY - 20 }

        this.init()
    }

    init() {
        /// ########## AQUÍ NO SÉ QUE PONER :S
    }

    draw() {

        // Platform
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)

        // Stairs
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.stairPos.x, this.stairPos.y, this.stairSize.w, this.stairSize.h)
    }


}