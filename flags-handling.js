// Connection to the Flagsmith environment
flagsmith.init({
  environmentID: 'ExdQSzC8hksUtUQZaidDKZ',
  onChange: (oldFlags, params) => {
    if (flagsmith.hasFeature('sales_banner_position', uuid)) {
      const position = flagsmith.getValue('sales_banner_position');
      console.log(position);
      if (position == "popup") {
        document.getElementById("banner").style.display = "none";
        document.getElementById("card").style.margin = "100px 0 3rem 0";
        document.getElementById("backgroundPopup").style.display = "flex";
        document.body.style.overflow = "hidden";
      }
    }
  },
});

flagsmith.identify(uuid);
