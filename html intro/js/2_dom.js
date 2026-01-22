window.onload = setup
function setup(){
    console.log("running setup");
    //returns element from document. if no element returns null (can be useful)
    let second_element = document.getElementById("two");
    //more general function that returns any css item. must specify type for selector. "#" two makes it return an ID
    let second_again = document.querySelector("#two");
    //both functions just return single IDs, always returns first ID on page even if there are multiple with same name
    console.log(second_element);
    console.log(second_again);
    // returns a list of elements tagged "div". returns in order that it sees it top down, so index 0 would be at the top of the page
    let elements = document.getElementsByTagName("div");
    console.log(elements);
    //it is a list and therefore an array. can use "elements.length", for loops, "elements[0]" etc

    let firstDiv = document.querySelector("div");
    let allDivs = document.querySelectorAll("div");

    let elementsWithClass = document.getElementsByClassName("square_shape");
    //get all
    let allElementsWithClass = document.querySelectorAll(".square_shape");

    //get first
    //access element (via class name, so with ".")
    let firstEl = document.querySelector(".square_shape");
    let firstEl = document.querySelector(".square_shape").computedStyleMap.background; //possible to drill down further with dot notation
    //returns what is inside of element
    let htmlOfEl = firstEl.innerHTML;

    let idOfFive = document.querySelector("#five").getAttribute("id");
    let classOfFive = document.querySelector("#five").getAttribute("class");
    console.log(idOfFive);
    console.log(classOfFive);

    //(you can add your own attributes in the html and it will be seen as valid)

    let customEl = document.querySelector("#two").getAttribute("willow_attribute");
    console.log(customEl);
    //its not reccomended to do this because well.. it doesnt actually do anything
   
    // returns null when it goes past everything
    let allTheWayUpTheChain = document.querySelector("#one").parentElement.parentElement.parentElement.parentElement.parentElement;
    // returns list of children, again can use for loops and other array logic
    let childrenOfFlex = document.querySelector(".wrapper_flex_box").children;

    //and finally: modifying elements
    // equals changes the document object, so ID four's new html content is "<h3> a new h3 <h3>"
    document.querySelector("#four").innerHTML = "<h3> a new h3 </h3>";
    //can also do text content
    document.querySelector("#four").textContent = "a new h3";
    //can add and remove classes on the fly, must access class first then can change it
    document.querySelector(".square_shape").classList.remove("square_shape");

    //can .add classes as well. it will add it but if theres not a style associated with the class in the css then it won't actually do anything on its own
    // there are levels of immediacy/priority to the styles. inline styles have priority, then id, then classes. so if a new class is applied it won't do anything if its superceded
    //cascading stylesheets have an internal logic

    //creating and removing elements entirely
    //new element is created then given styles with classes and html content
    let newDiv = document.createElement("div");
    newDiv.classList.add("square_shape");
    newDiv.innerHTML = " NEW ELEMENT ";
    newDiv.style.backgroundColor ="purple";
    //to place the element where we want it in the html by assigning it a parent (get the parent first then set it to element):
    let parentElement = document.querySelector(".wrapper_flex_box");
    newDiv.appendChild(newDiv);
    //also insertBefore or insertAfter, plus removing elements from the DOM with removeChild

}