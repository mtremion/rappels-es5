lg = console.log

var ville = ['nantes','paris','saint-nazaire','angers','le mans']
var villesSansTiretSansEspace

var aff = function afficher(element)
            {
                lg(element)
            }

function isPresent(param) {
    return function (element)
    {
        return element.indexOf(param) >= 0
    }  
}

function sansTiretSansEspace(param1,param2)
{
    return function(element) {
        return !isPresent(param1)(element) && !isPresent(param2)(element)
    }
}

function sALaFin()
{
    return function (element)
    {
        return element.indexOf("s") === element.length-1
    }  
}

ville.forEach(aff)
lg("lettreADansToutesLesVilles = " +ville.every(isPresent("a")))
lg("auMoinsUneVilleAvecUnTiret = " +ville.some(isPresent("-")))
lg("villesSansTiretSansEspace  = " +ville.filter(sansTiretSansEspace(" ","-")))
lg("villesMajusculeSeTerminantParS  = " +ville.filter(sALaFin()).map(function(element){return element.toUpperCase()}))
