function openTab_3(evt, tabName) {
  // Declare all variables
  var i, tabcontent_3, tablinks_3;

  // Get all elements with class="tabcontent" and hide them
  tabcontent_3 = document.getElementsByClassName("tabcontent_3");
  for (i = 0; i < tabcontent_3.length; i++) {
    tabcontent_3[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks_3 = document.getElementsByClassName("tablinks_3");
  for (i = 0; i < tablinks_3.length; i++) {
    tablinks_3[i].className = tablinks_3[i].className.replace(" active_tab", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active_tab";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen_3").click();
