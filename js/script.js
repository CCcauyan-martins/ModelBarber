let toggleButton = document.getElementById("toggle-button");
let bars = document.getElementById("bars");
let X = document.getElementById("X");

let navBar = document.getElementById("nav-bar");

toggleButton.addEventListener('click', openMenuMobile);

function openMenuMobile() {

    if(bars.classList.contains('open')) {
        
        bars.classList.remove('open');
        bars.classList.add('close');

        X.classList.remove('close');
        X.classList.add('open');

        navBar.style.display = 'flex';

    } else if (X.classList.contains('open')) {
        
        X.classList.remove('open');
        X.classList.add('close');

        bars.classList.remove('close');
        bars.classList.add('open');

        navBar.style.display = 'none';

    }

}


