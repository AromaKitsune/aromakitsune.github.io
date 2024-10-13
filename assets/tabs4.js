function openTab4(evt, tabName) {
  // Declare all variables
  var i, tabcontent4, tablinks4;

  // Get all elements with class="tabcontent" and hide them
  tabcontent4 = document.getElementsByClassName("tabcontent4");
  for (i = 0; i < tabcontent4.length; i++) {
    tabcontent4[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks4 = document.getElementsByClassName("tablinks4");
  for (i = 0; i < tablinks4.length; i++) {
    tablinks4[i].className = tablinks4[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen4").click();
