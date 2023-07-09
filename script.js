var facultySection = document.getElementById("faculty-section");
var facultyLink = document.getElementById("faculty-link");

facultyLink.addEventListener("mouseenter", function() {
  facultySection.classList.add("show-faculty-info");
});

facultyLink.addEventListener("mouseleave", function() {
  facultySection.classList.remove("show-faculty-info");
});
