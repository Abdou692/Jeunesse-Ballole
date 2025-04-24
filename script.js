document.addEventListener("DOMContentLoaded", function () {
    // Partie Don (si vous l'avez incluse dans votre HTML)
    const optionsDon = document.querySelectorAll(".option-don");
    const boutonsFreq = document.querySelectorAll(".bouton-freq-don");
    const boutonDonnerMaintenant = document.querySelector(".don-button");
    const montantPersonnaliseInput = document.getElementById("montant-personnalise");
    let montantSelectionne = 50;
    let frequenceSelectionnee = "Mensuel";

    if (optionsDon && boutonsFreq && boutonDonnerMaintenant && montantPersonnaliseInput) {
        optionsDon.forEach(option => {
            option.addEventListener("click", function () {
                optionsDon.forEach(opt => opt.classList.remove("actif"));
                this.classList.add("actif");
                if (this.getAttribute("data-montant") === "Autre") {
                    montantPersonnaliseInput.classList.remove("d-none");
                    montantPersonnaliseInput.addEventListener("input", function() {
                        montantSelectionne = this.value ? this.value : 0;
                        mettreAJourBoutonDon();
                    });
                } else {
                    montantPersonnaliseInput.classList.add("d-none");
                    montantSelectionne = this.getAttribute("data-montant");
                    mettreAJourBoutonDon();
                }
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

        // Initialisation de l'affichage du bouton au chargement de la page
        mettreAJourBoutonDon();
    }

    // --- Partie Mise en évidence du lien de navigation actif ---
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');

    function highlightNavLink() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 4 && pageYOffset < sectionTop + sectionHeight - sectionHeight / 4) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            } else if (currentSectionId === '' && link.getAttribute('href') === 'index.html') {
                link.classList.add('active'); // Si sur la page d'accueil et aucune section visible
            }
        });
    }

    // Écouteur d'événement pour mettre en évidence le lien de navigation au défilement
    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Appeler une fois au chargement pour la section initiale

    // --- Partie Fermeture du menu déroulant Bootstrap au clic ---
    const dropdownLinks = document.querySelectorAll('.dropdown-menu .dropdown-item');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.getComputedStyle(navbarCollapse).display !== 'none') {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});