
/**Déclaration de variables
let largeur = $("#balle").width();
let gauche = parseInt($("#balle").css("left"));
let haut = parseInt($("#balle").css("top"));
**/

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

        this.positionX = parseInt($element.css("left"));
        this.positionY = parseInt($element.css("top"));
        
        this.vitesseX = 2;
        this.vitesseY = 0.5;
        this.angle = Math.random()*2*Math.PI;
    }

    majHTML()
    {
        this.$element.css("left",balle.positionX);
        this.$element.css("top",balle.positionY);
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

        this.positionX = parseInt($element.css("left"));
        this.positionY = parseInt($element.css("top"));

        this.vitesse = 0.75;
    }

    majHTML()
    {
        this.$element.css("top",raquetteGauche.positionY);

        this.$element.css("top",raquetteDroite.positionY);
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
    balle.positionX += Math.cos(balle.angle) * balle.vitesseX;
    balle.positionY += Math.sin(balle.angle) * balle.vitesseY;

    switch(true){

        case this.posx < 0 :

            this.posx = 0;
            this.sensx = 1;
            break;
     
        case this.posy > terrain.hauteur - this.diametre :
            
            this.posy = terrain.hauteur - this.diametre;
            this.sensy = -1;
            break; 
    }

    //droite
    if( (balle.positionX + balle.largeur) > terrain.largeur)
    {
        balle.positionX = terrain.largeur - balle.largeur;
        balle.vitesseX *= -1;
    }
    //gauche
    if(balle.positionX < 0)
    {
        balle.positionX = 0;
        balle.vitesseX *= -1;
    }
    //bas
    if( (balle.positionY + balle.hauteur) > terrain.hauteur)
    {
        balle.positionY = terrain.hauteur - balle.hauteur;
        balle.vitesseY *= -1;
    }
    //haut
    if(balle.positionY < 0)
    {
        balle.positionY = 0;
        balle.vitesseY *= -1;
    }

    balle.majHTML();

    //section raquette gauche
    raquetteGauche.positionY += raquetteGauche.vitesse;

    if(raquetteGauche.positionY + raquetteGauche.hauteur > terrain.hauteur)
    {
        raquetteGauche.positionY = terrain.hauteur + raquetteGauche.hauteur;
        raquetteGauche.vitesse *= -1;
    }
    if(raquetteGauche.positionY < 0)
    {
        raquetteGauche.positionY = 0;
        raquetteGauche.vitesse *= -1;
    }

    raquetteGauche.majHTML();

    //section raquette droite
    raquetteDroite.positionY += raquetteDroite.vitesse;

    if(raquetteDroite.positionY + raquetteDroite.hauteur > terrain.hauteur)
    {
        raquetteDroite.positionY = terrain.hauteur - raquetteDroite.hauteur;
        raquetteDroite.vitesse *= -1;
    }
    if(raquetteDroite.positionY < 0)
    {
        raquetteDroite.positionY = 0;
        raquetteDroite.vitesse *= -1;
    }

    raquetteDroite.majHTML();
    
}, 10);