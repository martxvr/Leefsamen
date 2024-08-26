
  document.addEventListener('DOMContentLoaded', function() {
    const checkoutButton = document.querySelector('.cart__blocks');

    // Functie om de foutmelding te controleren en weer te geven
    function checkErrorMessage() {
      const cartItems = document.querySelectorAll('.cart-item');
      let hasStartPakket = false;
      let hasStandaardPakket = false;
      let hasCompleetPakket = false;
      let hasBasisAbonnement = false;
      let hasPlusAbonnement = false;

      cartItems.forEach(item => {
        const productTitle = item.querySelector('.cart-item__name').textContent.toLowerCase();

        if (productTitle.includes('start pakket')) {
          hasStartPakket = true;
        } else if (productTitle.includes('standaard pakket')) {
          hasStandaardPakket = true;
        } else if (productTitle.includes('compleet pakket')) {
          hasCompleetPakket = true;
        } else if (productTitle.includes('basis abonnement')) {
          hasBasisAbonnement = true;
        } else if (productTitle.includes('plus abonnement')) {
          hasPlusAbonnement = true;
        }
      });

      if ((hasBasisAbonnement || hasPlusAbonnement) && !(hasStartPakket || hasStandaardPakket || hasCompleetPakket)) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Foutmelding: U moet minstens een van de drie pakketten toevoegen aan uw winkelwagen.';
        errorMessage.classList.add('error-message'); // Voeg de class 'error-message' toe
        document.getElementById('successMessage').appendChild(errorMessage);

        // Verberg de checkout-knop
        if (checkoutButton) {
          checkoutButton.style.display = 'none';
        }
      } else if ((hasStartPakket || hasStandaardPakket || hasCompleetPakket) && !(hasBasisAbonnement || hasPlusAbonnement)) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Foutmelding: U moet minstens een abonnement toevoegen aan uw winkelwagen.';
        errorMessage.classList.add('error-message'); // Voeg de class 'error-message' toe
        document.getElementById('successMessage').appendChild(errorMessage);

        // Verberg de checkout-knop
        if (checkoutButton) {
          checkoutButton.style.display = 'none';
        }
      } else {
        // Verwijder het foutbericht en toon de checkout-knop
        const errorMessage = document.querySelector('#successMessage p');
        if (errorMessage) {
          errorMessage.remove();
        }
        if (checkoutButton) {
          checkoutButton.style.display = 'block';
        }
      }
    }

    // Observer om veranderingen in de winkelwagen te detecteren
    const observer = new MutationObserver(checkErrorMessage);
    const cartContainer = document.getElementById('main-cart-items');
    observer.observe(cartContainer, { childList: true, subtree: true });

    // Controleer de foutmelding wanneer de pagina geladen is
    checkErrorMessage();
  });

