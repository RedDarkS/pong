
//on creer un nouvel objet a partir de ceux de HTML/CSS
let terrain = new Terrain($("#terrain"));

let balle = new Balle($("#balle"));

let raquetteGauche = new Raquette($("#gauche"));
let raquetteDroite = new Raquette($("#droite"));
raquetteDroite.changeDirection();

//boucle afin de modifier la position de la balle et des raquettes toutes les 10 millisecondes
//les if servent à tester les collisions avec les bordures du terrain, et ainsi de faire rebondir la balle ou la laquette
setInterval(function()
{
    //appel de fonction des classes correspondant aux objets
    balle.bouger();

    raquetteGauche.bouger();
    
    raquetteDroite.bouger();
}, 10);