//Classe de creation d'un objet terrain
class Terrain {
    constructor($element) {
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();
    }

    tiltHaut() {
        //ajouter une classe
        this.$element.addClass("tiltHaut");
        let buffer = this;

        setTimeout(
            function () {
                //retirer une classe
                buffer.$element.removeClass("tiltHaut");
            }, 200
        );
    }

    tiltBas() {
        //ajouter une classe
        this.$element.addClass("tiltBas");
        let buffer = this;

        setTimeout(
            function () {
                //retirer une classe
                buffer.$element.removeClass("tiltBas");
            }, 200
        );
    }

    tiltDroite() {
        //ajouter une classe
        this.$element.addClass("tiltDroite");
        let buffer = this;

        setTimeout(
            function () {
                //retirer une classe
                buffer.$element.removeClass("tiltDroite");
            }, 200
        );
    }

    tiltGauche() {
        //ajouter une classe
        this.$element.addClass("tiltGauche");
        let buffer = this;

        setTimeout(
            function () {
                //retirer une classe
                buffer.$element.removeClass("tiltGauche");
            }, 200
        );
    }
}