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

        this.direction = 1;
        this.vitesse = 3;
    }

    bouger()
    {
        this.positionY += this.vitesse*this.direction;
        this.limite();
        this.majHTML();
    }

    changeDirection()
    {
        this.direction *= -1;
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
            this.changeDirection();
        }
        if(this.positionY < 0)
        {
            this.positionY = 0;
            this.changeDirection();
        }
    }
}