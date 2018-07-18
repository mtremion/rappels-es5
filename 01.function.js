var lg = console.log

lg("01- Fonctions")

var nombre1 = 10
var nombre2 = 20

var add = function additioner(nb1,nb2)
        {
            res = nb1 + nb2
            return res
        }

var somme = add

var mult = function multiplication(nb1,nb2)
            {
                res = nb1 * nb2
                return res
            }

var aff = function afficherOperation(nomOperation,nb1,nb2,operation)
            {
                res = nomOperation+"("+nb1+","+nb2+") =" + " " + operation(nb1,nb2)
                return res
            }

lg("resultat1 =",add(nombre1,nombre2))
lg("resultat2 =",somme(nombre1,nombre2))
lg("resultat3 =",mult(nombre1,nombre2))
lg(aff("Somme",20,40,somme))
lg(aff("Multiplication",10,20,mult))
lg(aff("Soustraction",15,5,function(nb1,nb2){res = nb1 - nb2; return res}))




