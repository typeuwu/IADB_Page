//Sub menus region primary

var acc = document.getElementsByClassName("menu-btn");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
            panel.style.display = "none";
            }  else {
            panel.style.display = "block";
        }
    });
}

//Desplegable footer
var acc = document.getElementsByClassName("btn-acc");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var menu = this.nextElementSibling;
    if (menu.style.display === "block") {
      menu.style.display = "none";
    }  else {
      menu.style.display = "block";
    }
  });
}


//Block.search

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function search() {
    document.getElementById("block-search").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("block-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
      }
    }
  }
}

//Language

function language() {
  document.getElementById("language-switch").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-language')) {
    var dropdowns = document.getElementsByClassName("language-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//Toggle

function togglenav() {
  var x = document.getElementById("toggle");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}