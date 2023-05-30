//HOME
var homeLink = document.getElementById('homeLink');
  homeLink.addEventListener('click', function(event) {
    event.preventDefault(); // Menghentikan perilaku bawaan dari tautan
    location.reload(); // Me-reload halaman
  });
  

  var contactLink = document.getElementById('contactLink');
  var contactIcons = document.getElementById('contactIcons');
  
  contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    contactIcons.classList.toggle('show');
  });
  
//GET NOW BUTTON
document.getElementById('getNowButton').addEventListener('click', function() {
    // Show the subscription popup
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.popup').style.display = 'block';
});

//PRODUCT
document.getElementById('productsLink').addEventListener('click', function() {
    // Show the subscription popup
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.popup').style.display = 'block';
});

//CLOSE POP UP
document.querySelector('.close').addEventListener('click',function(event) {
  event.preventDefault(); // Menghentikan perilaku bawaan dari tautan
  location.reload(); // Me-reload halaman
});


// SUBSCRIPTION? (TIDAK DIPERLUKAN)
var subscriptionOptions = document.getElementsByName('subscription');
var benefitText = document.getElementById('benefitText');

for (var i = 0; i < subscriptionOptions.length; i++) {
  subscriptionOptions[i].addEventListener('change', function() {
    var selectedOption = document.querySelector('input[name="subscription"]:checked');
    if (selectedOption) {
      var tooltip = selectedOption.parentNode.getAttribute('data-tooltip');
      benefitText.textContent = tooltip;
    } else {
      benefitText.textContent = '';
    }
  });
}


//GET VPN BUTTON

// Function to show the form overlay and popup
function showForm() {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".popup").style.display = "block";
}

// Function to hide the form overlay and popup
function hideForm() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".popup").style.display = "none";
}

// Function to show the VPN form
function showVPNForm() {
  showForm();
  document.getElementById("vpnForm").style.display = "block";
  document.getElementById("registform").style.display = "none";
}

// Function to show the registration form
function showRegistrationForm() {
  showForm();
  document.getElementById("vpnForm").style.display = "none";
  document.getElementById("registform").style.display = "block";
}

// Event listener for the "Get VPN" button in the VPN form
document.getElementById("getVPN").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission

  var subscriptionOptions = document.getElementsByName('subscription');
  var selectedOption = false;

  for (var i = 0; i < subscriptionOptions.length; i++) {
      if (subscriptionOptions[i].checked) {
          selectedOption = true;
          break;
      }
  }

  if (!selectedOption) {
      alert("Please select a subscription option.");
  } else {
      // Switch to the registration form
      showRegistrationForm();
  }
});

// Event listener for the "Back" button in the registration form
document.getElementById("backButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission

  // Switch back to the VPN form
  showVPNForm();
});

//CONTACT


