function updateTotal() {
  let total = 0;
  const form = document.getElementById('giftForm');
  const items = form.querySelectorAll('input[type="checkbox"]:checked');

  // Additionner les prix des articles cochés
  items.forEach(item => {
    total += parseInt(item.getAttribute('data-price'));
  });

  // Ajouter le montant entré pour les billets
  const customMoney = document.getElementById('customMoney');
  if (customMoney && customMoney.value) {
    total += parseInt(customMoney.value);
  }

  // Affichage du total dans la page
  document.getElementById('total').textContent = total;
}

// Attacher updateTotal à tous les checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(input => {
  input.addEventListener('change', updateTotal);
});

// Attacher updateTotal au champ des billets (au cas où on tape sans clic)
const moneyInput = document.getElementById('customMoney');
if (moneyInput) {
  moneyInput.addEventListener('input', updateTotal);
}

// Gestion du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const method = document.querySelector('input[name="method"]:checked').value;

  const name = this.elements["name"].value;
  const message = this.elements["message"].value;

  if (method === "whatsapp") {
    const phone = "+237689478869"; // Remplace par ton numéro WhatsApp
    const url = `https://wa.me/${phone}?text=${encodeURIComponent("Bonjour, je suis " + name + " : " + message)}`;
    window.open(url, "_blank");
  } else {
    emailjs.sendForm("service_n6knin4", "template_2j1e8ng", this)
      .then(() => {
        alert("Message envoyé avec succès !");
      }, (error) => {
        alert("Erreur lors de l'envoi : " + error.text);
      });
  }
});


// Thème saisonnier
function changeTheme() {
  const theme = document.getElementById('season').value;
  document.body.style.backgroundColor = theme === "valentin" ? "#ffe6ea" 
                            : theme === "noel" ? "#f0fff0"
                            : "#fff8f9";
}
// Animation d'apparition avec Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".gallery img, .video, .cta").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Animation menu
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.1)";
      link.style.transition = "0.3s ease";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
    });
  });
});
const images = ["../img/wasp.jpeg", "../img/wasp2.jpeg"]; // noms exacts des images
let current = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url('${images[current]}')`;
  current = (current + 1) % images.length;
}

// Démarrer le changement toutes les 5 secondes
setInterval(changeBackground, 5000);
changeBackground(); // initialisation

