//Classe de creation d'un objet raquette
class Raquette {
    constructor($element) {
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();

        this.positionX = parseInt($element.css("left"));
        this.positionY = parseInt($element.css("top"));

        this.direction = 0;
        this.vitesse = 3;
    }

    bouger() {
        this.positionY += this.vitesse * this.direction;
        this.limite();
        this.majHTML();
    }

    monter() {
        this.direction = -1;
    }

    descendre() {
        this.direction = 1;
    }

    arret() {
        this.direction = 0;
    }

    majHTML() {
        this.$element.css("top", this.positionY);
    }

    limite() {
        if (this.positionY + this.hauteur > terrain.hauteur) {
            this.positionY = terrain.hauteur - this.hauteur;
            this.arret();
        }
        if (this.positionY < 0) {
            this.positionY = 0;
            this.arret();
        }
    }
}