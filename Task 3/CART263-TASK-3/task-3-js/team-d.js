setup_D();
/** THEME: DECEPTION  */
function setup_D() {
  console.log("in d");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_D`, "ani_canvD", aniA, aniB, aniC, aniD);

  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in ani-A -teamD");
  }


  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creatve, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
    console.log("in ani-B -teamD");

  }
  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   */

  function aniC(parentCanvas) {
    console.log("in ani-C -teamD");

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      console.log("d-down");
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      console.log(e);
      console.log("d-up");
    };
    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }

  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniD(parentCanvas) {
    //create a few starting variables to be used across functions
    let moving;
    let currentImg;
    let relativeX;
    let relativeY;
    let rotation = 0;
    let anim;
    let startHeight = 0;
    let shift = [];
    console.log("in ani-D -teamD");

    //create a few key image and div elements, append them to the canvas (or other divs) and set their style attributes directly
    let bgImage = document.createElement("img");
    parentCanvas.appendChild(bgImage);
    bgImage.src = "/media/bliss.jpg";
    bgImage.style.position = "absolute";
    bgImage.style.height = parentCanvas.clientHeight + "px";
    bgImage.style.width = parentCanvas.clientWidth + "px";

    let underflowControl = document.createElement("div");
    parentCanvas.appendChild(underflowControl);
    underflowControl.style.position = "absolute";
    underflowControl.style.width = parentCanvas.clientWidth + "px";
    underflowControl.style.height = parentCanvas.clientHeight + "px";
    underflowControl.style.overflow = "hidden";

    // this one is the parent for the lower shadow images
    let shade = document.createElement("div");
    underflowControl.appendChild(shade);
    shade.style.backgroundColor = "#F5F5DC";
    shade.style.width = parentCanvas.clientWidth + "px";
    shade.style.height = parentCanvas.clientHeight + "px";
    shade.style.top = -(parentCanvas.clientHeight) + "px";
    shade.style.position = "absolute";
    shade.style.opacity = "90%";

    // this one is specifically to be the parent to the upper moveable images
    //both use overflow control to keep the images spilling out of the canvas, i parent the shade handle to the unhidden canvas for a cute effect where it pops out at the bottom
    let overflowControl = document.createElement("div");
    parentCanvas.appendChild(overflowControl);
    overflowControl.style.position = "absolute";
    overflowControl.style.width = parentCanvas.clientWidth + "px";
    overflowControl.style.height = parentCanvas.clientHeight + "px";
    overflowControl.style.overflow = "hidden";

    let shadeHandle = document.createElement("img");
    parentCanvas.appendChild(shadeHandle);
    shadeHandle.src = "/media/screenbottom.png";
    shadeHandle.style.maxWidth = parentCanvas.clientWidth + 20 + "px";
    shadeHandle.style.position = "absolute";
    shadeHandle.style.left = - 12 + "px";
    shadeHandle.style.pointerEvents = "none";


    //create an array of all available images to be used as moveable elements
    let images = ["/media/cake.png", "/media/chair.png", "/media/jack.png", "/media/mannequin.png", "/media/pawn.png", "/media/rose.png", "/media/saw.png", "/media/scissors.png", "/media/toothbrush.png", "/media/whisk.png", "/media/ball.png", "/media/lamp.png", "/media/hoodie.png", "/media/camera.png", "/media/lettuce.png", "/media/gnome.png", "/media/vine.png", "/media/mop.png", "/media/illicit.png"];

    // biiiiig ol for loop to create 7 (or however many desired) random moveable images on the canvas, along with their shadow counterparts (necessary for the shade animation)
    //i create the image and assign it to its respective class, and id for convenient management. i give it random starting variables including image source, size, position, and rotation so that no run is the same
    for (let x = 0; x < 7; x++) {
      let left = Math.floor(Math.random() * 300) + "px";
      let top = Math.floor(Math.random() * 300) + "px";
      let rotate = Math.floor(Math.random() * 360) + "deg";
      let maxWidth = Math.floor(Math.random() * (150 - 60 + 1) + 60) + "px";
      let imageSelect = Math.floor(Math.random() * images.length)
      let image = document.createElement("img");
      image.classList.add("TEAM_D_ANI_D_img");
      image.setAttribute("draggable", "false");
      image.src = images[imageSelect];
      image.addEventListener("mousedown", imageMoveStart);
      image.addEventListener("mouseup", imageMoveEnd);
      image.addEventListener("mousemove", function (e) {
        relativeX = e.pageX - (parentCanvas.offsetLeft + parentCanvas.parentElement.offsetLeft);
        relativeY = e.pageY - (parentCanvas.offsetTop + parentCanvas.parentElement.offsetTop);
        imageMove();
      })
      image.style.left = left;
      image.style.top = top;
      image.style.rotate = rotate;
      image.style.maxWidth = maxWidth;
      image.setAttribute("id", "a" + x);
      overflowControl.appendChild(image);

      let shadeImage = document.createElement("img");
      shadeImage.classList.add("TEAM_D_ANI_D_shaded");
      shadeImage.setAttribute("draggable", "false");
      shadeImage.src = images[imageSelect];
      shadeImage.style.left = left;
      shadeImage.style.top = top;
      shadeImage.style.rotate = rotate;
      shadeImage.style.maxWidth = maxWidth;
      shadeImage.setAttribute("id", "a" + x);
      underflowControl.appendChild(shadeImage);
      if (Math.random() > .5) {
        image.style.transform = "scaleX(-1)";
        shadeImage.style.transform = "scaleX(-1)";
      }
    }
    //make an array of all of the upper image elements
    let imageElements = document.getElementsByClassName("TEAM_D_ANI_D_img");
    //listen for key events, in this case the arrow keys which control the shade animation and rotation of images
    window.addEventListener("keydown", function (event) {
      console.log("keypress");
      if (event.key === "ArrowDown") {
        //create an array of the starting positions of upper images before the animation starts, so that I can use them as reference in the animation.
        //i substract the start pos from the animation movement so that they stay in their place while their parent div moves (overflow = hidden hides the images as the div scrolls away, creating the shade effect)
        for (let x = 0; x < imageElements.length; x++) {
          shift[x] = parseInt(imageElements[x].style.top);
        }
        startHeight = 0;
        anim = requestAnimationFrame(shadeAnimate);
      }
      //same deal but in reverse. you cant move the images while the shade is down so no need to collect new starting positions
      if (event.key === "ArrowUp") {
        shadeHandle.style.top = 0 + "px";
        overflowControl.style.top = 0 + "px";
        anim = requestAnimationFrame(shadeUp);
      }
      //rotation variable necessary so I can collect the objects current rotation position before moving it, otherwise it would reset at zero before rotating every time
      if (event.key === "ArrowRight" && moving == true) {
        rotation += 3;
        currentImg.style.rotate = rotation + "deg";
        otherImg.style.rotate = rotation + "deg";
        console.log(rotation);
      }
      if (event.key === "ArrowLeft" && moving == true) {
        rotation -= 3;
        currentImg.style.rotate = rotation + "deg";
        otherImg.style.rotate = rotation + "deg";
      }
    })

    //starts moving the currently clicked image, sets that image as the 'currentImg' to be used in other functions until a new one is set with next click and drag
    //otherImg is the shadow image underneath, also moved at the same time
    function imageMoveStart() {
      moving = true;
      currentImg = this;
      otherImg = document.querySelector("#" + this.getAttribute('id'));
      rotation = parseInt(currentImg.style.rotate);
    }
    //when the user lets go it disables movement (click and drag action)
    function imageMoveEnd() {
      moving = false;
    }
    //as explained, divs down and uses overflow hidden to obscure the upper images. i also shrink and grow the overflowcontrol div so that when it moves down it doesnt also reveal the images outside of the canvas
    function shadeAnimate() {
      let endHeight = parentCanvas.clientHeight;
      startHeight += 2;
      overflowControl.style.top = startHeight + "px";
      overflowControl.style.height = parentCanvas.clientHeight - startHeight + "px";
      shade.style.top = startHeight - parentCanvas.clientHeight + "px";
      shadeHandle.style.top = startHeight - 3 + "px";
      for (let x = 0; x < imageElements.length; x++) {
        imageElements[x].style.top = shift[x] - startHeight + "px";
      }
      if (startHeight >= endHeight) {
        cancelAnimationFrame(anim);
      }
      else {
        anim = requestAnimationFrame(shadeAnimate);
      }
    }
    //reverse of shadeanimate
    function shadeUp() {
      let endHeight = 0;
      startHeight -= 2;
      overflowControl.style.top = startHeight + "px";
      overflowControl.style.height = parentCanvas.clientHeight - startHeight + "px";
      shade.style.top = startHeight - parentCanvas.clientHeight + "px";
      shadeHandle.style.top = startHeight - 3 + "px";
      for (let x = 0; x < imageElements.length; x++) {
        imageElements[x].style.top = shift[x] - startHeight + "px";
      }
      if (startHeight <= endHeight) {
        cancelAnimationFrame(anim);
      }
      else {
        anim = requestAnimationFrame(shadeUp);
      }
    }
    //uses the relative x y coords and changes css positioning accordingly, subtracts half height and width so the image stays centered on the mouse
    // (if i were to continue working on this I would find a way to prevent snapping to the center, instead it would just 'grab' where the user clicks. probably doable with more variables to store the location of the image or something)
    function imageMove() {
      if (moving == true) {
        currentImg.style.left = relativeX - (currentImg.width / 2) + "px";
        currentImg.style.top = relativeY - (currentImg.height / 2) + "px";
        otherImg.style.left = relativeX - (currentImg.width / 2) + "px";
        otherImg.style.top = relativeY - (currentImg.height / 2) + "px";
      }
    }
  }

}