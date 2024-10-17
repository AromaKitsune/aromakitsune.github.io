function openTab_4(evt, tabName) {
  // Declare all variables
  var i, tabcontent_4, tablinks_4;

  // Get all elements with class="tabcontent" and hide them
  tabcontent_4 = document.getElementsByClassName("tabcontent_4");
  for (i = 0; i < tabcontent_4.length; i++) {
    tabcontent_4[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks_4 = document.getElementsByClassName("tablinks_4");
  for (i = 0; i < tablinks_4.length; i++) {
    tablinks_4[i].className = tablinks_4[i].className.replace(" active_tab", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active_tab";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen_4").click();
