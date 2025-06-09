if (document.getElementById('orderForm')) {
  // Formulaire sur index.html
  document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const article = this.article.value;
    const billets = this.billets.value;

    localStorage.setItem("commande_article", article);
    localStorage.setItem("commande_billets", billets);

    window.location.href = "confirmation.html";
  });
} else if (document.getElementById('summary')) {
  // Affichage sur confirmation.html
  const article = localStorage.getItem("commande_article") || "non précisé";
  const billets = localStorage.getItem("commande_billets") || "0";
  document.getElementById('summary').innerText =
    `Vous avez commandé un panier avec : ${article} et un bouquet d'argent de ${billets} FCFA.`;
}
