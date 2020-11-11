
// this is to toggle it correctly

const toggleButton = document.querySelector('.toggleButton');
const navBar = document.querySelector('.navBar');

toggleButton.addEventListener('click', () => {

    if (navBar.classList.contains('slideToggleDown')) {
        navBar.classList.remove('slideToggleDown');
        navBar.classList.add('slideToggleUp');
    } else {
        navBar.classList.add('slideToggleDown');
        navBar.classList.remove('slideToggleUp');
    }





})




