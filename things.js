class Things {
    constructor(x, y, w, h, image) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.flags = 'none';
        this.image = image;
        this.status = false;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

    draw() {
        let img = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, this.x, this.y, this.w, this.h);
        };
        img.src = this.image;
    }
    move() {
        //this.ctx.clearRect(this.x,this.y , this.w, this.h);
        this.y = this.y + 1;
        this.draw();
    }
}




