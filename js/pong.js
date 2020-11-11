
//Déclaration de variables
let largeur = $("#balle").width();
let gauche = parseInt($("#balle").css("left"));
let haut = parseInt($("#balle").css("top"));

//Classe de création d'un objet terrain
class Terrain
{
    constructor($element)
    {
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();
    }
}

//Classe de création d'un objet balle
class Balle
{
    constructor($element)
    {
        this.$element = $element;

        this.hauteur = $element.height();
        this.largeur = $element.width();

        this.haut = parseInt($element.css("top"));
        this.gauche = parseInt($element.css("left"));

        this.vitesseX = 2;
        this.vitesseY = 0.5;
        this.angle = Math.random()*2*Math.PI;
    }

    majHTML()
    {
        this.$element.css("left",balle.gauche);
        this.$element.css("top",balle.haut);
    }
}

//Classe de création d'un objet raquette
class Raquette
{
    constructor($element)
    {
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();

        this.haut = parseInt($element.css("top"));
        this.gauche = parseInt($element.css("left"));

        this.vitesse = 0.75;
    }

    majHTML()
    {
        this.$element.css("left",raquetteGauche.gauche);
        this.$element.css("top",raquetteGauche.haut);

        this.$element.css("left",raquetteDroite.gauche);
        this.$element.css("top",raquetteDroite.haut);
    }
}

//on créer un nouvel objet à partir de ceux de HTML/CSS
let terrain = new Terrain($("#terrain"));

let balle = new Balle($("#balle"));

let raquetteGauche = new Raquette($("#raquetteGauche"));
let raquetteDroite = new Raquette($("#raquetteDroite"));

//boucle afin de modifier la position de la balle et des raquettes toutes les 10 millisecondes
//les if servent à tester les collisions avec les bordures du terrain, et ainsi de faire rebondir la balle ou la laquette
setInterval(function()
{
    //section balle
    balle.gauche += Math.cos(balle.angle) * balle.vitesseX;
    balle.haut += Math.sin(balle.angle) * balle.vitesseY;
    
    if( (balle.gauche + balle.largeur) > terrain.largeur)
    {
        balle.gauche = terrain.largeur - balle.largeur;
        balle.vitesseX = -balle.vitesseX;
    }
    if(balle.gauche < 0)
    {
        balle.gauche = 0;
        balle.vitesseX = -balle.vitesseX;
    }
    if( (balle.haut + balle.hauteur) > terrain.hauteur)
    {
        balle.haut = terrain.hauteur - balle.hauteur;
        balle.vitesseY = -balle.vitesseY;
    }
    if(balle.haut < 0)
    {
        balle.haut = 0;
        balle.vitesseY = -balle.vitesseY;
    }

    balle.majHTML();

    //section raquette gauche
    raquetteGauche.haut += raquetteGauche.vitesse;

    if(raquetteGauche.haut + raquetteGauche.hauteur > terrain.hauteur)
    {
        raquetteGauche.haut = terrain.hauteur + raquetteGauche.hauteur;
        raquetteGauche.vitesse = -raquetteGauche.vitesse;
    }
    if(raquetteGauche.haut < 0)
    {
        raquetteGauche.haut = 0;
        raquetteGauche.vitesse = -raquetteGauche.vitesse;
    }

    raquetteGauche.majHTML();

    //section raquette droite
    raquetteDroite.haut += raquetteDroite.vitesse;

    if(raquetteDroite.haut + raquetteDroite.hauteur > terrain.hauteur)
    {
        raquetteDroite.haut = terrain.hauteur - + raquetteDroite.hauteur;
        raquetteDroite.vitesse = -raquetteDroite.vitesse;
    }
    if(raquetteDroite.haut < 0)
    {
        raquetteDroite.haut = 0;
        raquetteDroite.vitesse = -raquetteDroite.vitesse;
    }

    raquetteDroite.majHTML();
    
}, 10);