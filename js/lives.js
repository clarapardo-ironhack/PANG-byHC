class Lives {

    constructor(ctx, posX, posY) {
        this.ctx = ctx
        this.platformPos = { x: posX, y: posY }

        this.livesSize = { w: 25, h: 25 }
        this.livesPos = { x: posX + 600 - this.livesSize.w, y: posY - this.livesSize.h - 7.5 }

        this.init()
    }

    init() {
        ////        ##### AQUÍ NO SE QUE PONER :S
    }

    draw() {
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.livesPos.x, this.livesPos.y, this.livesSize.w, this.livesSize.h)
    }

}