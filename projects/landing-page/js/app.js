/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.body.onload = function(){
    addMenuBar();
    window.addEventListener('scroll', function (event) {
        let allSections = document.querySelectorAll('section')
        for (let i = 0; i < allSections.length;i++){
            //console.log(allSection[i]);
            var bounding = allSections[i].getBoundingClientRect();
            if (bounding.y >= 0 && bounding.y <= (0.10 * window.innerHeight)){
                var active = document.getElementsByClassName("your-active-class");
                var activeId = document.getElementById(active[0].id);
                activeId.classList.remove("your-active-class");
                allSections[i].classList.add("your-active-class");
            }
        }
    });

    // document.onmouseover = function(event){
    //     //console.log(event.target.nodeName);
    //     if (event.target.nodeName == "SECTION"){
    //         console.log(event.target.parentNode.id);

    //         var active = document.getElementsByClassName("your-active-class");
    //         var activeId = document.getElementById(active[0].id);
    //         activeId.classList.remove("your-active-class");
    //         //debugger;
    //         var newActive = document.getElementById(event.target.parentNode.id);
    //         newActive.classList.add("your-active-class");
    //     }
    // }
};

function addMenuBar () { 
    let current = document.getElementById("navbar__list"); 
    let sectionLength = document.querySelectorAll('section').length;
    for (let i = 1; i < sectionLength + 1; i++){
        let li = document.createElement("li");  
        let a = document.createElement('a');
        let linkText = document.createTextNode("Section " + i);
        a.appendChild(linkText);
        //a.id = "section"+i;
        //a.title = "my title text";
        a.href = "#section"+i;      
        a.onclick = function(event){
            //console.log(event.target.hash);
            var active = document.getElementsByClassName("your-active-class");
            var activeId = document.getElementById(active[0].id);
            activeId.classList.remove("your-active-class");
            //debugger;
            var newActive = document.querySelector(event.target.hash);
            newActive.classList.add("your-active-class");
            //console.log(active[0].id);
        } 
        li.appendChild(a);  
        current.append(li); 
    }
}



// Scroll to section on link click

// Set sections as active


