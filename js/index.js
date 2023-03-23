// navbar active
const navbarButton = document.querySelectorAll('.svg__imagee');

navbarButton.forEach(function (button) {
    button.addEventListener('click', function (e) {
        navbarButton.forEach(function (button) {
            button.classList.remove('navbar__icons-svg-active');
        });
        e.target.classList.add('navbar__icons-svg-active');
    });
});


// layout icons active

const layoutButton = document.querySelectorAll('.svg__image');

layoutButton.forEach(function (button) {
    button.addEventListener('click', function (e) {
        layoutButton.forEach(function (button) {
            button.classList.remove('svg__image-active');
        });
        e.target.classList.add('svg__image-active');
    });
});



// Grid and List Layout
const button_grid = document.getElementById("grid_layout");
const button_list = document.getElementById("list_layout");

if (button_grid || button_list) {
    const grid_class = document.getElementsByClassName('main__grid__Section');
    const list_class = document.getElementsByClassName('main__list__section');

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
const backButton = document.getElementById('prevTab');

if (backButton) {
    backButton.addEventListener('click', function () {
        window.history.back();
    })
}


// image upload
const imageInput = document.getElementById('image');
const uploadedImage = document.getElementById('uploaded-image');
const cameraIcon = document.getElementsByClassName('camera__icon')

imageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            uploadedImage.setAttribute('src', this.result);
            uploadedImage.style.display = "block";

        });
        reader.readAsDataURL(file);
    }
});

// submit form
const submitForm = document.getElementById('submit-form');

if (submitForm) {

    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = submitForm.elements.name.value;
        const destination = submitForm.elements.dest.value;
        const race = submitForm.elements.race.value;
        const season = submitForm.elements.season.value;
        const budget = submitForm.elements.budget.value;
        const whoAreYou = Array.from(submitForm.elements.way).filter((item) => item.checked).map((item) => item.value);
        const startDate = submitForm.elements.startDate.value;
        const endDate = submitForm.elements.endDate.value;

        const data = { name, destination, race, season, budget, whoAreYou, startDate, endDate }
        localStorage.setItem('data', JSON.stringify(data));

        const modal = document.getElementById("modal");
        modal.style.display = "flex";

        window.addEventListener('click', function (e) {
            if (e.target != modal) {
                modal.style.display = "none";
                submitForm.reset();
                uploadedImage.style.display = "none";
            }
        });
    });
}




