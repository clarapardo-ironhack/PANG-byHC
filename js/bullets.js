class Bullets {
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.playerSize = { w: playerWidth, h: playerHeight }

        this.bulletSize = { w: 10, h: 30 }
        this.bulletPos = { x: playerPosX + playerWidth / 2 - this.bulletSize.w / 2, y: playerPosY - this.bulletSize.h }
    }



    draw() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.bulletPos.x, this.bulletPos.y, this.bulletSize.w, this.bulletSize.h)

        this.move()
    }

    move() {
        this.bulletPos.y -= 15
    }




















}