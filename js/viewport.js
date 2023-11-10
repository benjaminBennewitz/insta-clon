/*###############################
###
###     RESIZE SCRIPT INSTAGRAM CLON
###     version 1.0.0
###     author: Benjamin Benenwitz
###
###
***       ██████╗  ▀█
***       ██╔══██╗ █▄
***       ██████╦╝
***       ██╔══██╗
***       ██████╦╝
***       ╚═════╝
###
#################################*/

/*
*** FUNCTION FOR HIDE AND SHOW THE SIDEMENU ON DESKTOP WIDTH
*** depends on the resize event and add or remove the hide class
*** function first load when DOM ist complete loaded
*/
document.addEventListener('DOMContentLoaded', function() {
    function resizing() {
       let desktop = document.getElementById('sidemenu-desktop');
       let tablet = document.getElementById('sidemenu-tablet');
       let mobile = document.getElementById('sidemenu-mobile');

        if (window.innerWidth <= 1200) {
            desktop.classList.add('hide');
            tablet.classList.remove('hide');
        } else{
            desktop.classList.remove('hide');
            tablet.classList.add('hide');
        }

        if (window.innerWidth <= 768) {
            desktop.classList.add('hide');
            tablet.classList.add('hide');
            mobile.classList.remove('hide');
        } else{
            mobile.classList.add('hide');
        }
    }

    window.addEventListener('resize', resizing);
    resizing();
});
