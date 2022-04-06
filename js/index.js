window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        document.querySelector('.start-game').setAttribute('class', 'start-game hide')
        document.getElementById('canvas').classList.toggle("hide")

        startGame()
    }


    function startGame() {
        pangApp.init('canvas')
    }
}

const pangApp = {
    name: 'PANG',
    description: 'Project 1',
    version: '1.0.0',
    author: 'HA & CP',
    license: undefined,

    gameSize: { w: undefined, h: undefined },
    canvasNode: undefined,
    ctx: undefined,
    player1: undefined,
    lives1: [],
    bullets1: [],
    enemies1: [],
    livesCounter: 3,
    frameCounter: 0,



    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')

        this.setDimensions()
        this.createPlayer()
        this.createPlatformStairs()
        this.drawAll()
        this.createEnemies()
        this.createLives()

        this.setEventListeners()
        this.start()
    },

    setDimensions() {
        this.gameSize = {
            w: this.canvasNode.getAttribute('width'),
            h: this.canvasNode.getAttribute('height')
        }
    },




    // Scenario creation and drawing
    drawAll() {
        this.drawGround()
        this.drawHeader()
        this.drawHearts()

        this.catchLives()
        this.platform1.draw()
        this.player1.draw()
        this.bullets1.forEach((eachBullet) => {
            eachBullet.draw()
        })
        this.enemies1.forEach((eachElement) => {
            eachElement.draw()
        })
        this.bulletEnemyCollision()
        this.playerEnemyCollision()


        if (this.frameCounter > 150 && this.frameCounter < 500) {
            this.generateLives()

        } else if (this.frameCounter === 1000) {
            this.frameCounter = 0
            this.createLives()
        }


    },

    drawGround() {
        this.ctx.fillStyle = 'greenyellow'
        this.ctx.fillRect(0, 630, this.gameSize.w, 20)
    },

    drawHeader() {
        this.ctx.fillStyle = 'greenyellow'
        this.ctx.fillRect(0, 0, this.gameSize.w, 45)
    },

    drawHearts() {
        // this.ctx.fillStyle = 'red'
        // this.ctx.fillRect(20, 7.5, 110, 30)
        let heartPic 
        switch (this.livesCounter) {
            case 1: 
                heartPic = "./img/1heart.png"
                break
            case 2:
                heartPic = "./img/2hearts.png"
                break
            case 3:
                heartPic = "./img/3hearts.png"
                break
        }

        this.heartsIntance = new Image()
        this.heartsIntance.src = heartPic

        this.ctx.drawImage(
            this.heartsIntance,
            20,
            7.5,
            100,
            30
        )

    },
    
    createPlayer() {
        this.player1 = new Player(this.ctx, this.gameSize.w / 2, this.gameSize.h - 95, 75, 75, this.gameSize)
    },

    createPlatformStairs() {
        this.platform1 = new PlatformsStairs(this.ctx, this.gameSize, 300, 375, 700, 300)
    },

    createLives() {
        this.lives1.push(new Lives(this.ctx, this.platform1.platformPos.x, this.platform1.platformPos.y))
    },

    createBullets() {
        this.bullets1.push(new Bullets(this.ctx, this.player1.playerPos.x, this.player1.playerPos.y, this.player1.playerSize.w, this.player1.playerSize.h))
    },

    createEnemies() {
        this.enemies1.push(new Enemies(this.ctx, this.gameSize, 250, 150, 150, 150, 1))
        this.enemies1.push(new Enemies(this.ctx, this.gameSize, 1000, 50, 150, 150, -1))

    },



    // Player's movement
    setEventListeners() {
        document.onkeydown = event => {
            const { key } = event

            if (key === 'ArrowLeft') {

                if (this.player1.playerPos.y + this.player1.playerSize.h === this.platform1.platformPos.y) {
                    if (this.player1.playerPos.x <= this.platform1.platformPos.x) {
                    } else {
                        this.player1.moveLeft()
                    }
                } else if (this.player1.playerPos.y + this.player1.playerSize.h !== this.platform1.stairPos.y + this.platform1.stairSize.h && this.player1.playerPos.y + this.player1.playerSize.h !== this.platform1.platformPos.y) {
                } else {
                    this.player1.moveLeft()
                }
            }
            if (key === 'ArrowRight') {
                if (this.player1.playerPos.y + this.player1.playerSize.h === this.platform1.platformPos.y) {
                    if (this.player1.playerPos.x + this.player1.playerSize.w >= this.platform1.platformPos.x + this.platform1.platformSize.w) {
                    } else {
                        this.player1.moveRight()
                    }
                } else if (this.player1.playerPos.y + this.player1.playerSize.h !== this.platform1.stairPos.y + this.platform1.stairSize.h && this.player1.playerPos.y + this.player1.playerSize.h !== this.platform1.platformPos.y) {
                } else {
                    this.player1.moveRight()
                }
            }
            if (key === 'ArrowUp') {
                if (this.player1.playerPos.x + this.player1.playerSize.w <= this.platform1.stairPos.x + this.platform1.stairSize.w && this.player1.playerPos.x + this.player1.playerSize.w >= this.platform1.stairPos.x) {

                    if (this.player1.playerPos.y + this.player1.playerSize.h <= this.platform1.platformPos.y) {
                        this.player1.playerPos.y = this.platform1.platformPos.y - this.player1.playerSize.h
                    } else {
                        this.player1.moveUp()
                    }
                }
            }
            if (key === 'ArrowDown') {
                if (this.player1.playerPos.x > this.platform1.stairPos.x && this.player1.playerPos.x < this.platform1.stairPos.x + this.platform1.stairSize.w) {

                    if (this.player1.playerPos.y >= this.gameSize.h - 95) {
                        this.player1.playerPos.y = this.gameSize.h - 95
                    } else {
                        this.player1.moveDown()
                    }
                }
            }
            if (key === ' ') {
                this.createBullets()
            }
        }
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.frameCounter++
            
        }, 30)
    },
    
    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },
    
    
    
    
    // Lives - power ups
    generateLives() {
        this.lives1[0]?.draw()
        console.log(this.platform1.stairSize.h)
        
    },

    catchLives() {
        this.lives1?.forEach((elmnt) => {

            if (this.player1.playerPos.y === this.platform1.platformPos.y - this.player1.playerSize.h && this.player1.playerPos.x + this.player1.playerSize.w <= elmnt.livesPos.x + elmnt.livesSize.w && this.player1.playerPos.x + this.player1.playerSize.w >= elmnt.livesPos.x) {
                if (this.livesCounter <= 3) {
                    this.livesCounter++
                    // switch (this.livesCounter) {
                    //     case 1: 
                    //         this.
                        
                    // }
                }
                this.lives1 = []
            }
        }


        )
    },



    // Collisions
    // // 1. Enemies
    bulletEnemyCollision() {

        this.enemies1.forEach(eachEnemy => {
            this.bullets1.forEach(eachBullet => {

                if (eachEnemy.enemyPos.x < eachBullet.bulletPos.x + eachBullet.bulletSize.w &&
                    eachEnemy.enemyPos.x + eachEnemy.enemySize.w > eachBullet.bulletPos.x &&
                    eachEnemy.enemyPos.y < eachBullet.bulletPos.y + eachBullet.bulletSize.h &&
                    eachEnemy.enemySize.h + eachEnemy.enemyPos.y > eachBullet.bulletPos.y) {

                    this.enemyReduction(eachEnemy)

                    this.enemies1.splice(this.enemies1.indexOf(eachEnemy), 1)
                    this.bullets1.splice(this.bullets1.indexOf(eachBullet), 1)
                }
            })
        })

    },

    enemyReduction(eachEnemy) {

        if (eachEnemy.enemySize.w < 50) {

        } else {
            this.enemies1.push(new Enemies(this.ctx, this.gameSize, eachEnemy.enemyPos.x, eachEnemy.enemyPos.y, eachEnemy.enemySize.w / 2, eachEnemy.enemySize.w / 2, 1))

            this.enemies1.push(new Enemies(this.ctx, this.gameSize, eachEnemy.enemyPos.x, eachEnemy.enemyPos.y, eachEnemy.enemySize.w / 2, eachEnemy.enemySize.w / 2, -1))
        }
    },

    // // 2. Player
    playerEnemyCollision() {

        this.enemies1.forEach(eachEnemy => {

            if (eachEnemy.enemyPos.x < this.player1.playerPos.x + this.player1.playerSize.w &&
                eachEnemy.enemyPos.x + eachEnemy.enemySize.w > this.player1.playerPos.x &&
                eachEnemy.enemyPos.y < this.player1.playerPos.y + this.player1.playerSize.h &&
                eachEnemy.enemySize.h + eachEnemy.enemyPos.y > this.player1.playerPos.y) {

                eachEnemy.invertVelocityX()
                eachEnemy.invertVelocityY()


                if (this.livesCounter > 1) {
                    this.livesCounter--
                    console.log(this.livesCounter)
                } else {
                    //// ####### AQUI SE MUERE  :(
                    this.endGameDeath()
                }

            }
        })

    },


    endGameDeath() {

    }


}