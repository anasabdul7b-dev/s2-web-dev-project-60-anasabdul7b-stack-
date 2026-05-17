// Redirect user to booking
function goBook(trip) {
  window.location.href = trip ? "contact.html?trip=" + encodeURIComponent(trip) : "contact.html";
}
