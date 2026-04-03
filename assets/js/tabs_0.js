function openTab_0(evt, tabName) {
  // Declare all variables
  var i, tabcontent_0, tablinks_0;

  // Get all elements with class="tabcontent" and hide them
  tabcontent_0 = document.getElementsByClassName("tabcontent_0");
  for (i = 0; i < tabcontent_0.length; i++) {
    tabcontent_0[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks_0 = document.getElementsByClassName("tablinks_0");
  for (i = 0; i < tablinks_0.length; i++) {
    tablinks_0[i].className = tablinks_0[i].className.replace(" active_tab", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active_tab";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen_0").click();
