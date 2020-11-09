
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
        this.haut = parseInt($element.css("top"));
        this.gauche = parseInt($element.css("left"));
        this.vitesseX = 2;
        this.vitesseY = 0.5;
    }

    majHTML()
    {
        this.$element.css("left",balle.gauche);
        this.$element.css("top",balle.haut);
    }
}

//on créer un nouvel objet balle et terrain à partir de ceux de HTML/CSS
let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));

//boucle afin de modifier la position de la balle toutes les 10 millisecondes
//les if servent à tester les collisions avec les bordures du terrain, et ainsi de faire rebondir la balle
setInterval(function()
{
    balle.gauche = balle.gauche + balle.vitesseX;
    balle.haut = balle.haut + balle.vitesseY;
    
    if(balle.gauche > terrain.largeur)
    {
        balle.gauche = terrain.largeur;
        balle.vitesseX = -balle.vitesseX
    }
    if(balle.gauche < 0)
    {
        balle.gauche = 0;
        balle.vitesseX = -balle.vitesseX
    }
    if(balle.haut > terrain.hauteur)
    {
        balle.haut = terrain.hauteur;
        balle.vitesseY = -balle.vitesseY
    }
    if(balle.haut < 0)
    {
        balle.haut = 0;
        balle.vitesseY = -balle.vitesseY
    }
    balle.majHTML();
    
}, 10);