////////////////////////////////////////////////
////////////////////////////////////////////////
////// The Slideing menu function
////////////////////////////////////////////////
////////////////////////////////////////////////
let isOpen = false;

let slideMenu = function(){
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUL = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");



    if(isOpen === false){
        getSidebarUL.style.visibility ="visible";
        getSidebar.style.width = "272px"
        getSidebarTitle.style.opacity = "0.5"

        let arrayLength = getSidebarLinks.length;
        for(var i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity= "1";
        }

        isOpen = true;
    }

    else if(isOpen === true){
        
        getSidebar.style.width = "60px"
        getSidebarTitle.style.opacity = "0"

        let arrayLength = getSidebarLinks.length;
        for(var i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity= "0";
        }
        getSidebarUL.style.visibility ="hidden";
        isOpen = false;
    }
}
function save(){
    alert("Your order was palced.")
}
