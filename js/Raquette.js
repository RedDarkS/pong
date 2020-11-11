//Classe de creation d'un objet raquette
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

    bouger()
    {
        this.positionY += this.vitesse;
        this.limite();
        this.majHTML();
    }

    majHTML()
    {
        this.$element.css("top",this.positionY);
    }

    limite()
    {
        if(this.positionY + this.hauteur > terrain.hauteur)
        {
            this.positionY = terrain.hauteur - this.hauteur;
            this.vitesse *= -1;
        }
        if(this.positionY < 0)
        {
            this.positionY = 0;
            this.vitesse *= -1;
        }
    }
}