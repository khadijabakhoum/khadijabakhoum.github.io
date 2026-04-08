// ===========================
// 1. LES DONNÉES (les produits)
// ===========================
var produits = [
  { nom: "Gloss Brillant Rose Nude",      prix: 4500,  image: "img/img1.jpg" },
  { nom: "Rouge à Lèvres Matte Bordeaux", prix: 6800,  image: "img/img2.jpg" },
  { nom: "Fond de Teint Fluide HD",        prix: 18500, image: "img/img3.jpg" },
  { nom: "Mascara Volume Extrême",          prix: 8900,  image: "img/img4.jpg" },
  { nom: "Palette Fards 12 Teintes",        prix: 15500, image: "img/img5.jpg" },
  { nom: "Crème Hydratante Rose Hip",       prix: 21000, image: "img/img6.jpg" },
  { nom: "Sérum Vitamine C Éclat",          prix: 28500, image: "img/img7.jpg" },
  { nom: "Eau de Parfum Floral Rose",       prix: 45000, image: "img/img8.jpg" },
  { nom: "Lip Liner Précision",             prix: 3200,  image: "img/img9.jpg" },
  { nom: "Brume Corps Vanille",             prix: 12500, image: "img/img10.jpg" },
  { nom: "Eye-Liner Waterproof Noir",       prix: 5200,  image: "img/img11.jpg" },
  { nom: "Huile Corps Sèche Dorée",         prix: 15500, image: "img/img12.jpg" },
];

// ===========================
// 2. AFFICHER LES PRODUITS
// ===========================
function afficherProduits(liste) {
  var grille = document.getElementById("grille-produits");
  var messageVide = document.getElementById("message-vide");

  // Si aucun résultat
  if (liste.length === 0) {
    grille.innerHTML = "";
    messageVide.style.display = "block";
    return;
  }

  messageVide.style.display = "none";
  grille.innerHTML = "";

  // On boucle sur chaque produit pour créer une carte
  for (var i = 0; i < liste.length; i++) {
    var produit = liste[i];
    var prix = produit.prix.toLocaleString("fr-FR") + " FCFA";

    var carte = '<div class="carte">'
      + '<img src="' + produit.image + '" alt="' + produit.nom + '" />'
      + '<div class="carte-info">'
      + '<div class="carte-nom">' + produit.nom + '</div>'
      + '<div class="carte-prix">' + prix + '</div>'
      + '<button class="btn-commander" onclick="commander(\'' + produit.nom + '\')">'
      + '<i class="fa-brands fa-whatsapp"></i> Commander'
      + '</button>'
      + '</div>'
      + '</div>';

    grille.innerHTML = grille.innerHTML + carte;
  }
}

// ===========================
// 3. RECHERCHE
// ===========================
function rechercherProduits() {
  var recherche = document.getElementById("champRecherche").value;
  recherche = recherche.toLowerCase();

  var resultats = [];

  for (var i = 0; i < produits.length; i++) {
    var nomEnMinuscule = produits[i].nom.toLowerCase();
    if (nomEnMinuscule.indexOf(recherche) !== -1) {
      resultats.push(produits[i]);
    }
  }

  afficherProduits(resultats);
}

// ===========================
// LANCEMENT : attendre que la page soit chargée avant d'afficher
// ===========================
document.addEventListener("DOMContentLoaded", function() {
  afficherProduits(produits);

  // Recherche aussi quand on tape (événement)
  document.getElementById("champRecherche").addEventListener("input", function() {
    rechercherProduits();
  });
});

// ===========================
// 4. COMMANDER VIA WHATSAPP
// ===========================
function commander(nomProduit) {
  var message = "Bonjour Jaja's Shop ! 🌸\nJe souhaite commander : " + nomProduit + "\nMerci !";
  var url = "https://wa.me/221700000000?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

// ===========================
// 5. FORMULAIRE DE CONTACT
// ===========================
function envoyerMessage() {
  var nom = document.getElementById("nom").value;
  var telephone = document.getElementById("telephone").value;
  var message = document.getElementById("message").value;

  // Vérification que les champs sont remplis
  if (nom === "" || telephone === "" || message === "") {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  // Afficher le message de confirmation
  document.getElementById("message-confirmation").style.display = "block";

  // Vider le formulaire
  document.getElementById("nom").value = "";
  document.getElementById("telephone").value = "";
  document.getElementById("message").value = "";
}