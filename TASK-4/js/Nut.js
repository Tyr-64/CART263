class Nut {

    constructor(x,y,size, color){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.nut = document.createElement("img");

    }


    renderNut(){
        this.nut.src = "/media/nut.png";
        this.nut.classList.add("nut");
        this.nut.style.left = this.x + "px";
        this.nut.style.top = this.y + "px";
        this.nut.style.width = this.size + "px";
        this.nut.style.position = "absolute";
        this.nut.style.filter = "hue-rotate(" + this.color + "deg)";
        console.log("rendering");
        document.getElementsByClassName("grass")[0].appendChild(this.nut);
    }
}