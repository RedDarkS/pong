//Classe de création d'un objet balle
class Balle {
    /**
     *
     * @param $element
     */
    constructor($element) {
        this.$element = $element;

        /**
         *
         * @type {number}
         */
        this.hauteur = $element.height();

        /**
         *
         * @type {number}
         */
        this.largeur = $element.width();

        /**
         *
         * @type {number}
         */
        this.positionX = parseInt($element.css("left"));

        /**
         *
         * @type {number}
         */
        this.positionY = parseInt($element.css("top"));

        /**
         *
         * @type {number}
         */
        this.directionX = 0;

        /**
         *
         * @type {number}
         */
        this.directionY = 0;

        /**
         *
         * @type {number}
         */
        this.vitesseDepart = terrain.largeur / 500;

        /**
         *
         * @type {number}
         */
        this.vitesse = this.vitesseDepart;

        /**
         *
         * @type {number}
         */
        this.vitesseMax = terrain.largeur / 100;

        /**
         *
         * @type {number}
         */
        this.acceleration = 1.1;

        /**
         *
         * @type {number}
         */
        this.angle = Math.random() * 2 * Math.PI;
    }

    /**
     *
     * @returns {number}
     */
    get bas() {
        return this.positionY + this.hauteur;
    }

    /**
     *
     * @param value
     */
    set bas(value) {
        this.positionY = value - this.hauteur;
    }

    /**
     *
     * @returns {number}
     */
    get droite() {
        return this.positionX + this.largeur;
    }

    /**
     *
     * @param value
     */
    set droite(value) {
        this.positionX = value - this.largeur;
    }

    /**
     *Augmente la vitesse de la balle jusqu'à un maximum
     */
    accelerer() {
        if (Math.abs(this.vitesse) < this.vitesseMax)
        {
            this.vitesse *= this.acceleration;
            console.log(Math.abs(this.vitesse));
        }
        else{
            this.vitesse = this.vitesseMax;
        }
    }

    /**
     *Recentre la balle au milieu du terrain
     */
    recentrer() {
        this.positionX = terrain.largeur / 2 - this.largeur / 2;
        this.positionY = terrain.hauteur / 2 - this.hauteur / 2;

        this.reinitialiserVitesse();
    }

    /**
     *Remet la vitesse de la balle à celle de départ
     */
    reinitialiserVitesse() {
        this.vitesse = this.vitesseDepart;
    }

    /**
     *Fait se déplacer la balle
     */
    bouger() {
        this.positionX += Math.cos(this.angle) * this.vitesse;
        this.positionY += Math.sin(this.angle) * this.vitesse;
        console.log(this.vitesse);

        this.limite();
        this.majHTML();
    }

    /**
     *Défini les limites que la balle ne doit pas dépasser
     */
    limite() {
        //droite
        if ((this.droite) > terrain.largeur) {
            terrain.tiltDroite();

            joueur1.ajoutScore();

            this.droite = terrain.largeur;
            this.angle = Math.PI - this.angle;
            this.recentrer();
        }
        //gauche
        if (this.positionX < 0) {
            terrain.tiltGauche();

            joueur0.ajoutScore();

            this.positionX = 0;
            this.angle = Math.PI - this.angle;
            this.recentrer();
        }
        //bas
        if (this.bas > terrain.hauteur) {
            terrain.tiltBas();

            this.bas = terrain.hauteur;
            this.angle = -(this.angle);
        }
        //haut
        if (this.positionY < 0) {
            terrain.tiltHaut();

            this.positionY = 0;
            this.angle = -(this.angle);
        }
        //Rebonds sur les raquettes
        //Gauche
        if (this.positionX < raquetteGauche.droite) { //si la balle dépasse à gauche de la raquette gauche
            if (this.bas > raquetteGauche.positionY) { //et si la balle est plus basse que le haut de la raquette
                if (this.positionY < raquetteGauche.bas) { // et si la balle est plus haute que le bas de la raquette

                    this.accelerer();
                    this.angle = Math.PI - this.angle;

                    raquetteGauche.changerCouleur();
                }
            }
        }
        //Droite
        if (this.droite > raquetteDroite.positionX) { //si la balle dépasse à droite la raquette droite
            if (this.bas > raquetteDroite.positionY) { //et si la balle est plus basse que le haut de la raquette
                if (this.positionY < raquetteDroite.bas) { // et si la balle est plus haute que le bas de la raquette

                    this.accelerer();
                    this.angle = Math.PI - this.angle;

                    raquetteDroite.changerCouleur();
                }
            }
        }
    }

    /**
     *
     */
    majHTML() {
        this.$element.css("left", balle.positionX);
        this.$element.css("top", balle.positionY);
    }
}