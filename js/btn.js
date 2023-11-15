const btn = document.querySelector('.btnhaut');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})
function ouvrirPage() {
    var a = document.getElementById("search").value.toLowerCase().replace(/\s+/g, "");

    if (a === "home" || a.match(/^page/) || a.match(/^home/) || a.match(/^accueil/) || a === "accueil" || a === "morlaix" || a === "communauté") {
        window.open("index.html");
    }

    else if (a === "plougonven" || a.match(/^commune/) || a.match(/^elu/) || a === "Commune" || a === "elu" || a === "elue" || a === "elus" || a === "elues" || a === "élus" || a === "élue" || a === "élues") {
        window.open("commune.html");
    }

    else if (a === "lieux" || a.match(/^lieux/) || a.match(/^touristique/) || a === "touristiques" || a === "touristique" || a === "lieux touristiques") {
        window.open("Ltouristique.html");
    }
    else if (a === "service" || a.match(/^service/) || a.match(/^ligne/) || a.match(/^démarche/) || a === "service en ligne" || a === "démarche" || a === "demarche") {
        window.open("Service en ligne.html");
    }
    else {
        // Rediriger vers une page par défaut si aucune correspondance n'est trouvée
        window.open("erreur.html");
    }

}

