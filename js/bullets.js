class Bullets {
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx
        this.playerPos = {x: playerPosX, y: playerPosY}
        this.playerSize = {w: playerWidth, h: playerHeight}
        
        this.bulletSize = {w: 10, h: 30}
    }
    


    draw() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.playerPos.x + this.playerSize.w / 2 - this.bulletSize.w / 2, this.playerPos.y - this.bulletSize.h, this.bulletSize.w, this.bulletSize.h)
        
        this.move()
    }

    move() {
        this.playerPos.y -= 15
    }
    



















}