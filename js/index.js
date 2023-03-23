// navbar active
var navbarButton = document.querySelectorAll('.svg__imagee');

navbarButton.forEach(function (button) {
    button.addEventListener('click', function (e) {
        navbarButton.forEach(function (button) {
            button.classList.remove('navbar__icons-svg-active');
        });
        e.target.classList.add('navbar__icons-svg-active');
    });
});


// layout icons active

var layoutButton = document.querySelectorAll('.svg__image');

layoutButton.forEach(function (button) {
    button.addEventListener('click', function (e) {
        layoutButton.forEach(function (button) {
            button.classList.remove('svg__image-active');
        });
        e.target.classList.add('svg__image-active');
    });
});



// Grid and List Layout
var button_grid = document.getElementById("grid_layout");
var button_list = document.getElementById("list_layout");

if (button_grid || button_list) {
    var grid_class = document.getElementsByClassName('main__grid__Section');
    var list_class = document.getElementsByClassName('main__list__section');

    button_grid.addEventListener("click", function () {
        grid_class[0].style.display = "block";
        list_class[0].style.display = "none";
    });

    button_list.addEventListener("click", function () {
        grid_class[0].style.display = "none";
        list_class[0].style.display = "block";
    })
}

// previous tab
var backButton = document.getElementById('prevTab');

if (backButton) {
    backButton.addEventListener('click', function () {
        window.history.back();
    })
}



