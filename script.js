function searchAgriculturalLands() {
    const searchBar = document.getElementById('searchBar');
    const searchQuery = searchBar.value.toLowerCase();

    const typeDropdown = document.getElementById('typeDropdown');
    const selectedType = typeDropdown.value.toLowerCase();

    const districtDropdown = document.getElementById('districtDropdown');
    const selectedDistrict = districtDropdown.value.toLowerCase();

    const priceRangeDropdown = document.getElementById('priceRangeDropdown');
    const selectedPriceRange = priceRangeDropdown.value.toLowerCase();

    // Hide all cards initially
    const agriculturalCards = document.querySelectorAll('.card');
    agriculturalCards.forEach(card => {
        card.style.display = 'none';
    });

    // Show cards that match the search query and dropdown selections
    agriculturalCards.forEach(card => {
        const cardText = card.innerText.toLowerCase();
        const cardType = card.getAttribute('data-type').toLowerCase();
        const cardDistrict = card.getAttribute('data-district').toLowerCase();
        const cardPrice = card.getAttribute('data-price').toLowerCase();

        if (
            cardText.includes(searchQuery) &&
            (selectedType === '' || cardType === selectedType) &&
            (selectedDistrict === '' || cardDistrict === selectedDistrict) &&
            (selectedPriceRange === '' || cardPrice === selectedPriceRange)
        ) {
            card.style.display = 'inline';
        }
    });
}


// Add the following code to your existing JavaScript or create a new JS file

// Functions to open/close the login modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
  }
  
  function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
  }
  
  // Function to submit login form (replace with actual login logic)
  function submitLoginForm() {
    // Add your login logic here
    alert("Login button clicked!");
  }
  