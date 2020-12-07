class Son{
    /**
     * Gère la partie audio du projet
     * @see https://createjs.com/getting-started/soundjs
     */
    constructor(){
        //sounds
        createjs.Sound.registerSound("sound/seb-glissade.mp3", "seb-glissade");
        // createjs.Sound.registerSound("sound/re.mp3", "re");
        // createjs.Sound.registerSound("sound/mi.mp3", "mi");
        // createjs.Sound.registerSound("sound/fa.mp3", "fa");
        // createjs.Sound.registerSound("sound/sol.mp3","sol");
        // createjs.Sound.registerSound("sound/la.mp3", "la");
        // createjs.Sound.registerSound("sound/si.mp3", "si");
        //createjs.Sound.registerSound("sound/pong.mp3", "pong");
    }
    /**
     * Joue une note de piano aléatoire
     */
    playNote(){
        let notes=["seb-glissade"];
        let note =notes[Math.floor(Math.random() * notes.length)];
        createjs.Sound.play(note);
    }
    /**
     * Joue plusieurs notes ce qui produit un truc assez pété
     */
    fausseNote(){
        this.playNote();
        this.playNote();
        this.playNote();
        this.playNote();
        this.playNote();
    }
}