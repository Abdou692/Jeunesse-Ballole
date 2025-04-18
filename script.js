document.addEventListener("DOMContentLoaded", function () {
    // Partie Don (si vous l'avez incluse dans votre HTML)
    const optionsDon = document.querySelectorAll(".option-don");
    const boutonsFreq = document.querySelectorAll(".bouton-freq-don");
    const boutonDonnerMaintenant = document.querySelector(".donner-maintenant");
    let montantSelectionne = 50;
    let frequenceSelectionnee = "Mensuel";

    if (optionsDon && boutonsFreq && boutonDonnerMaintenant) {
        optionsDon.forEach(option => {
            option.addEventListener("click", function () {
                optionsDon.forEach(opt => opt.classList.remove("actif"));
                this.classList.add("actif");
                montantSelectionne = this.getAttribute("data-montant");
                mettreAJourBoutonDon();
            });
        });

        boutonsFreq.forEach(button => {
            button.addEventListener("click", function () {
                boutonsFreq.forEach(btn => btn.classList.remove("actif"));
                this.classList.add("actif");
                frequenceSelectionnee = this.innerText;
                mettreAJourBoutonDon();
            });
        });

        function mettreAJourBoutonDon() {
            boutonDonnerMaintenant.innerHTML = `<img src="images/Icone2.png" alt="Icône" style="height:1em; vertical-align:middle;"> Faire un don de ${montantSelectionne}€/${frequenceSelectionnee.toLowerCase()}`;
        }
    }
});