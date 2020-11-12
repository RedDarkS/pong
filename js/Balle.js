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

    bouger()
    {
        this.positionX += Math.cos(this.angle) * this.vitesseX;
        this.positionY += Math.sin(this.angle) * this.vitesseY;

        this.limite();
        this.majHTML();
    }

    limite()
    {
        //droite
        if( (this.positionX + this.largeur) > terrain.largeur)
        {
            this.positionX = terrain.largeur - this.largeur;
            this.vitesseX *= -1;
        }
        //gauche
        if(this.positionX < 0)
        {
            this.positionX = 0;
            this.vitesseX *= -1;
        }
        //bas
        if( (this.positionY + this.hauteur) > terrain.hauteur)
        {
            terrain.tilt();
            this.positionY = terrain.hauteur - this.hauteur;
            this.vitesseY *= -1;
        }
        //haut
        if(this.positionY < 0)
        {
            terrain.tilt();
            this.positionY = 0;
            this.vitesseY *= -1;
        }
    }

    majHTML()
    {
        this.$element.css("left",balle.positionX);
        this.$element.css("top",balle.positionY);
    }
}