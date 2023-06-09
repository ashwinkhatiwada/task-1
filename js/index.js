// navbar active
const navbarButton = document.querySelectorAll('.svg__imagee');

if (window.location.pathname === '/index.html') {
    navbarButton[0].classList.add('navbar__icons-svg-active')
};

if (window.location.pathname === '/add-item.html') {
    navbarButton[1].classList.add('navbar__icons-svg-active')
};

if (window.location.pathname === '/gallary.html') {
    navbarButton[2].classList.add('navbar__icons-svg-active')
};

if (window.location.pathname === '/bookmark.html') {
    navbarButton[3].classList.add('navbar__icons-svg-active')
};


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

        const formData = submitForm.elements;

        const name = formData.name.value;
        const destination = formData.dest.value;
        const race = formData.race.value;
        const season = formData.season.value;
        const budget = formData.budget.value;
        const startDate = formData.startDate.value;
        const endDate = formData.endDate.value;
        const whoAreYou = Array.from(formData.way).filter((item) => item.checked).map((item) => item.value);

        const modal = document.getElementById("modal");
        const homepage = document.getElementsByClassName("main__homepage");
        homepage[0].style.opacity = 0.3;
        modal.style.display = "flex";

        const yesButton = document.getElementById('yes');
        const noButton = document.getElementById('no');

        if (yesButton) {
            yesButton.addEventListener('click', function (e) {
                if (e.target != modal) {
                    modal.style.display = "none";
                    uploadedImage.style.display = "none";
                    const data = { name, destination, race, season, budget, whoAreYou, startDate, endDate }
                    localStorage.setItem('data', JSON.stringify(data));
                    submitForm.reset();
                    homepage[0].style.opacity = 1;
                }
            })
        }

        if (noButton) {
            noButton.addEventListener('click', function (e) {
                if (e.target != modal) {
                    modal.style.display = "none";
                    homepage[0].style.opacity = 1;
                }
            })
        }

        window.addEventListener('click', function (e) {
            if (e.target != modal) {
                modal.style.display = "none";
                homepage[0].style.opacity = 1;
            }
        });
    });
}




