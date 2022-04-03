firstSetUp = true;
// Connection to the Flagsmith environment
flagsmith.init({
  environmentID: 'ExdQSzC8hksUtUQZaidDKZ',
  onChange: (oldFlags, params) => {
    if (flagsmith.hasFeature('sales_banner_position', uuid)) {
      discountPosition = flagsmith.getValue('sales_banner_position');
      if (discountPosition == "popup" && firstSetUp) {
        document.getElementById("banner").style.display = "none";
        document.getElementById("card").style.margin = "120px 0 3rem 0";
        document.getElementById("backgroundPopup").style.display = "flex";
        document.body.style.overflow = "hidden";
        firstSetUp = false;
      }
    }
    if (flagsmith.hasFeature('dark_mode_switch', uuid)) {
      document.getElementById("blackModeCheckboxContainer").style.display = "inline";
    }
    if (flagsmith.getTrait('dark_mode_activated')) {
      document.getElementById("blackModeCheckboxContainer").style.display = "inline";
      document.getElementById("blackModeCheckbox").checked = true;
      apply_dark_mode();
    }
  },
});

userID = "dev_banner";
console.log("User ID: " + userID);

flagsmith.identify(userID);

if (page == "products.html?discount") {
  flagsmith.setTrait("clicked_discount_banner", true);
}

document.getElementById("blackModeCheckbox").addEventListener('change', (event) => {
  dark_mode = document.getElementById("blackModeCheckbox").checked;
  if (dark_mode) {
    flagsmith.setTrait("dark_mode_activated", true);
  } else {
    flagsmith.setTrait("dark_mode_activated", false);
  }
});
