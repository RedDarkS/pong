//Classe de creation d'un objet terrain
class Terrain
{
    constructor($element)
    {
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();
    }

    tilt()
    {
        //ajouter une classe
        this.$element.addClass("tilt");
        let ici = this;

        setTimeout(
            function()
            {
                //retirer une classe
                ici.$element.removeClass("tilt");
            },200
        );
    }
}