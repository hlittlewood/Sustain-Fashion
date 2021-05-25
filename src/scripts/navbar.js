const nav_toggle = document.querySelector("#nav_toggle");
const sidebar = document.querySelector("#sidebar");
const dropdown_toggle = document.querySelectorAll(".dropdown_toggle");

nav_toggle.addEventListener('click', function () {
    var target_width = "100%";

    if (sidebar.style.width == target_width) {
        sidebar.style.width = "0";
        document.querySelector("#page_content").style.display = "block";
    } else {
        sidebar.style.width = "100%";
        document.querySelector("#page_content").style.display = "none";
    }
});

dropdown_toggle.forEach(item => {
    item.addEventListener('click', event => {
        var dropdown = item.nextElementSibling;
    
        if (dropdown.style.display == "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }); 
});