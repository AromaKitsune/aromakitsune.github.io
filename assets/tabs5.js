function openTab5(evt, tabName) {
  // Declare all variables
  var i, tabcontent5, tablinks5;

  // Get all elements with class="tabcontent" and hide them
  tabcontent5 = document.getElementsByClassName("tabcontent5");
  for (i = 0; i < tabcontent5.length; i++) {
    tabcontent5[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks5 = document.getElementsByClassName("tablinks5");
  for (i = 0; i < tablinks5.length; i++) {
    tablinks5[i].className = tablinks5[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen5").click();
