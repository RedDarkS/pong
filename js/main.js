//on creer un nouvel objet a partir de ceux de HTML/CSS
/**
 *Initialise un nouveau terrain pour le jeu
 * @type {Terrain}
 */
let terrain = new Terrain($("#terrain"));

/**
 *Initialise une nouvelle balle
 * @type {Balle}
 */
let balle = new Balle($("#balle"));

/**
 *Initialise une raquette gauche
 * @type {Raquette}
 */
let raquetteGauche = new Raquette($("#gauche"));

/**
 *Initialise une raquette droite
 * @type {Raquette}
 */
let raquetteDroite = new Raquette($("#droite"));

/**
 *
 * @type {Joueur}
 */
let joueur0 = new Joueur($("#Sgauche"));

/**
 *
 * @type {Joueur}
 */
let joueur1 = new Joueur($("#Sdroite"));

let son = new Son();

//boucle afin de modifier la position de la balle et des raquettes toutes les 10 millisecondes
//les if servent à tester les collisions avec les bordures du terrain, et ainsi de faire rebondir la balle ou la laquette

let demarrer = false;

/**
 * Boucle de jeu, permet d'actualiser le déplacement des raquettes et de la balle
 */
setInterval(function () {
    if(demarrer){
        //appel de fonction des classes correspondant aux objets
        balle.bouger();

        raquetteGauche.bouger();
        raquetteDroite.bouger();
    }
}, 10);

// $("#btn-jouer").on("mousedown", function (event) {
//     event.preventDefault(); //je ne vous explique pas pour l'instant à quoi ça sert c'est trop complexe
//     console.log("tu as appuyé sur $btn-jouer");
// });

$("#btn-jouer").on("mouseup", function (event) {
    event.preventDefault();
    demarrer = true;
    son.playNoteDef(0);
    $("#ecran-debut").addClass("invisible");
});

//Ouverture des listeners pour écouter quelles touchent sont utilisées
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return
    }

    //Les touches sont detectées on va les bouger
    if (event.key === "a") {
        raquetteGauche.monter();
    }
    if (event.key === "q") {
        raquetteGauche.descendre();
    }
    if (event.key === "p") {
        raquetteDroite.monter();
    }
    if (event.key === "m") {
        raquetteDroite.descendre();
    }
    event.preventDefault();
}, true);


window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return
    }
    //Les touches sont detectées on va les arreter
    if (event.key === "a" || event.key === "q") {
        raquetteGauche.arret();
    }
    if (event.key === "p" || event.key === "m") {
        raquetteDroite.arret();
    }
    event.preventDefault();
}, true);