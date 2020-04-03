
// Build menu 
document.body.onload = function(){
    addMenuBar();

};

// Add class 'active' to section when near top of viewport
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

// Added menu bar that scroll to the selected section
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
            var active = document.getElementsByClassName("your-active-class");
            var activeId = document.getElementById(active[0].id);
            activeId.classList.remove("your-active-class");
            var newActive = document.querySelector(event.target.hash);
            newActive.classList.add("your-active-class");
            //console.log(active[0].id);
        } 
        li.appendChild(a);  
        current.append(li); 
    } 
}


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