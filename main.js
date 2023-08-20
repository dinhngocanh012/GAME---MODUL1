let cat = new Cat(200, 550, 50, 50);
let img1 = new Things(20, 5, 30, 30, 'images/1.png');
let img2 = new Things(100, 5, 30, 30, 'images/2.png');
let img3 = new Things(200, 5, 30, 30, 'images/3.png');
let img4 = new Things(300, 5, 30, 30, 'images/7.png');
let img5 = new Things(400, 5, 30, 30, 'images/8.png');
let img6 = new Things(500, 5, 30, 30, 'images/9.png');
let score = 0;
function init() {
    cat.draw();
    img1.draw();
    // img2.draw();
    // img3.draw();
    // img4.draw();
    // img5.draw();
    // img6.draw();
    displayThings();
    requestAnimationFrame(init)
}

window.addEventListener('keydown', (e) => {
    let keycode = e.code;
    if (keycode === 'ArrowLeft') {
        cat.moveLeft();
    }
    if (keycode === 'ArrowRight') {
        cat.moveRight();
    }
    console.log(keycode);
})
let things = [];
for (let i = 0; i < 10; i++) {
    let img1 = new Things(20, -(i * Math.floor(Math.random() * (200 - 1) + 1) + 60), 30, 30, 'images/1.png');
    // let img2 = new Things(100, -(i *Math.floor(Math.random() * (200 - 1) + 1)+60), 30, 30, 'images/2.png');
    // let img3 = new Things(200, -(i *Math.floor(Math.random() * (200 - 1) + 1)+60), 30, 30, 'images/3.png');
    // let img4 = new Things(300, -(i *Math.floor(Math.random() * (200 - 1) + 1)+60), 30, 30, 'images/7.png');
    // let img5 = new Things(400, -(i *Math.floor(Math.random() * (200 - 1) + 1)+70), 30, 30, 'images/8.png');
    // let img6 = new Things(500, -(i *Math.floor(Math.random() * (200 - 1) + 1)+80), 30, 30, 'images/9.png');
    things.push(img1);
}
function displayThings() {
    for (let i = 0; i < things.length; i++) {
        if (things[i].status == false) {
            cat.eat(things[i]);
            things[i].move();
            things[i].draw();

        }
    }
}

init()