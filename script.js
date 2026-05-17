// Redirect user to booking
function goBook(trip) {
  window.location.href = trip ? "contact.html?trip=" + encodeURIComponent(trip) : "contact.html";
}
// Wait for page ready
document.addEventListener("DOMContentLoaded", function () {
  // Wire trip booking buttons
  document.querySelectorAll("[data-book]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      goBook(btn.getAttribute("data-book"));
    });
  });

  // Preselect trip from query
  var trip = new URLSearchParams(location.search).get("trip");
  var sel = document.getElementById("trip-select");
  if (trip && sel && ["mountain", "safari", "diving"].includes(trip)) sel.value = trip;

  // Locate form status elements
  var form = document.getElementById("booking-form");
  var msg = document.getElementById("form-message");
  if (!form || !msg) return;
   // Handle form submit message
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    var name = document.getElementById("name").value.trim();
    var tripName = sel.options[sel.selectedIndex].text;
    msg.textContent = "Thanks, " + name + ". Your request for " + tripName + " has been received. Our team will contact you shortly.";
    form.reset();
  });
});