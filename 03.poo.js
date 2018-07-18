lg = console.log

function Personne(nom,prenom,pseudo)
{
    this.nom = nom
    this.prenom = prenom
    this.pseudo = pseudo

    this.getNomComplet = function()
    {
        var str = this.nom+" "+this.prenom+" "+this.pseudo
        return str
    }
}

function afficherPersonne(personne)
{
    lg(personne.nom)
    lg(personne.prenom)
    lg(personne.pseudo)
    lg(personne.getNomComplet())
}

var jules = new Personne("Jules", "LEMAIRE", "jules77")
var paul = new Personne("Paul", "LEMAIRE", "paul44")

lg(jules.nom)
lg(jules.prenom)
lg(jules.pseudo)
lg(jules.getNomComplet())

afficherPersonne(paul)

jules.pseudo = "jules44"

lg(jules.getNomComplet())

lg(jules.age)

Personne.prototype.age = "NON RENSEIGNE"

lg(jules.age)

jules.age = 30

lg(jules.age)

function getInitials(){
    return this.nom.charAt(0)+this.prenom.charAt(0)
}

Personne.prototype.getInitials=getInitials

lg(jules.getInitials())

var robert = {
    prenom: "robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet: function() {return str = this.prenom+" "+this.nom+" "+this.pseudo}
};

afficherPersonne(robert)

function Client(nom,prenom,pseudo,numeroClient)
{
    Personne.call(this,nom,prenom,pseudo)
    this.numeroClient = numeroClient

    this.getInfos = function()
                    {
                        var str = this.numeroClient+" "+this.nom+" "+this.prenom
                        return str
                    }
}

var steeve = new Client("steeve","LUCAS","steeve44","A01")

afficherPersonne(steeve)
lg(steeve.numeroClient)
lg(steeve.getInfos())




