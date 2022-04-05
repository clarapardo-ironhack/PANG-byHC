class Enemies {

    constructor(ctx, gameSize, posX, posY, sizeW, sizeH, index) {
        this.ctx = ctx
        this.gameSize = gameSize
        
        this.enemyPos = { x: posX, y: posY }
        this.enemySize = { w: sizeW, h: sizeH }
        this.enemyVel = { x: 8 * index, y: 4 }

        // this.enemyPhysics = { gravity: 0.1 }

        this.init()
    }

    init() {
        ///     ######### AQUÍ NO SE QUE PONER :s
        this.draw()
    }


    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.enemyPos.x, this.enemyPos.y, this.enemySize.w, this.enemySize.h)

        this.move()
    }

    move() {

        this.enemyPos.x += this.enemyVel.x
        // this.enemyVel.y += this.enemyPhysics.gravity
        this.enemyPos.y += this.enemyVel.y

        if (this.enemyPos.y < 45) this.invertVelocityY()
        if (this.enemyPos.y + this.enemySize.h + 25 >= this.gameSize.h) this.invertVelocityY()
        if (this.enemyPos.x < 0) this.invertVelocityX()
        if (this.enemyPos.x >= this.gameSize.w - this.enemySize.w) this.invertVelocityX()
    }

    invertVelocityX() {
        this.enemyVel.x *= -1
    }

    invertVelocityY() {
        this.enemyVel.y *= -1
    }




}