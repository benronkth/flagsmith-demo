// Connection to the Flagsmith environment
flagsmith.init({
  environmentID: '<Your environmentID here>',
  onChange: (oldFlags, params) => {
    if (flagsmith.hasFeature('sales_banner_position', uuid)) {
      discountPosition = flagsmith.getValue('sales_banner_position');
      if (discountPosition == "popup") {
        document.getElementById("banner").style.display = "none";
        document.getElementById("card").style.margin = "120px 0 3rem 0";
        document.getElementById("backgroundPopup").style.display = "flex";
        document.body.style.overflow = "hidden";
      }
    }
  },
});

userID = "dev_banner";
console.log("User ID: " + userID);

flagsmith.identify(userID);

if (page == "products.html?discount") {
  flagsmith.setTrait("clicked_discount_banner", true);
}
