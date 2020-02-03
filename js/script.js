
// affiche les logs Javascript, peut être désactivée
var log = true;

window.addEventListener('DOMContentLoaded', (event) => {
    // la page a finie de charger toutes les ressources externes
    if (window.console && log) console.log('DOM entièrement chargé et analysé');

    // captation du menu <nav> avec l'id #nav-burger (utilisation du $ devant le nom de la variable pour indiquer qu'il s'agit d'un objet jQuery)
    var navBurger = document.getElementById('nav-burger');
    // contrôle de l'existance de notre élément dans le DOM
    var hasNavBurger = navBurger != null;

    // on a bien trouvé un élément
    if (hasNavBurger) {
        // assignation de l'évènement click sur notre élément
        navBurger.addEventListener('click', function(eventObject) {
            // Voici l'object de l'évènement
            if (window.console && log) console.log(eventObject, this.classList);

            // changement d'état, $(this) désinge notre object actuel, soit #nav-burger
            this.classList.toggle('is-open');
        });
    }
    // on a pas trouvé d'élément correspondant
    else {
        if (window.console && log) console.error('#nav-burger introuvable dans le DOM !');
    }
});
