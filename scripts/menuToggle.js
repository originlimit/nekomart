function menuToggle(){
    const nav = document.getElementById("nav-list");
    nav.className === "nav-list container" ? nav.className += " nav-list-toggle" : nav.className = "nav-list container";
}