// Initialisation of the page, fill the page with the shop items
const items = items_list["items"];
itemsContainer = document.getElementById("itemsContainer");
content = "";

var urlAsArray = window.location.href.split("/");
var page = urlAsArray[urlAsArray.length - 1];
// Main page
var itemsToDisplay = (page == "main.html")
  ? items.slice(0, 4)
  : items;
// Products page
var itemsToDisplay = (page == "products.html?discount")
  ? items.filter( item  => item.discount === true)
  : itemsToDisplay;

for (var i of itemsToDisplay) {
  content += create_HTML_item(i.name, i.price, i.pictureURL);
}
itemsContainer.innerHTML = content;

////////////////////////////////////////////////////////////////////////////////
/* Give the anonymous user a Universally Unique Identifier (UUID) to affect
it to a specfic test bucket of users for A/B testing: control (80% of the cases),
option A and B (both 10% of the users). The string is hashed and a float is
generated using this hash value. Then, if the case A is given to 10% of the users
and if the float value obtained is less than 0.1, then the user see the case A.*/

/* This funciton shouldn't be used in production because Math.random might
duplicates*/

function createUUID() {
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
   });
}

uuid = createUUID();

////////////////////////////////////////////////////////////////////////////////
/* Closing the popup */
function closePopup () {
  document.getElementById("backgroundPopup").style.display = "none";
  document.body.style.overflow = "auto";
}

if (page == "main.html") {
  document.getElementById("backgroundPopup").addEventListener("click", (event) => {
    if (event.target == document.getElementById("backgroundPopup")) {
      closePopup();
    }
  })
}
