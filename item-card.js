function create_HTML_item (name, price, pictureURL) {
  var card = `<div class="item">
    <div>
      <img src='${pictureURL}' alt=''>
      <div class='info-text'>
        <h2>${name}</h2>
        <h3>$${price}</h3>
      </div>
    </div>
  </div>`;
  return card;
}
