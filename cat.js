class Cat {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.score = 0;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");

    }

    draw() {
        let image = new Image();
        image.onload = () => {
            // ctx.resize(200, 200);
            this.ctx.drawImage(image, this.x, this.y, this.w, this.h);
        };
        image.src = "images/cat.png";
    }

    moveLeft() {
        this.ctx.clearRect(this.x, this.y, this.w, this.h)
        this.x -= 5;
    }

    moveRight() {
        this.ctx.clearRect(this.x, this.y, this.w, this.h)
        this.x += 5;
    }
    eat(thing) {
        if (thing.status == false && thing.y + thing.h >= this.y && this.x >= thing.x && this.x + this.h >= thing.x + thing.w) {
            this.score++;
            console.log(this.score);
            thing.status = true;
        }
    }
}
