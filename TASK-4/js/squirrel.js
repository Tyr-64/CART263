class Squirrel {

    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.body = document.createElement("img");
        this.isPickedUp = false;

    }


    renderSquirrel() {
        this.body.src = "/media/squirrel.jpg";
        this.body.classList.add("nut");
        this.body.style.left = this.x + "px";
        this.body.style.top = this.y + "px";
        this.body.style.width = this.size + "px";
        this.body.style.position = "absolute";
        this.body.style.filter = "hue-rotate(" + this.color + "deg)";
        console.log("rendering");
        document.getElementsByClassName("grass")[0].appendChild(this.body);
    }

}