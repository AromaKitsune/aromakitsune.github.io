function openTab_2(evt, tabName) {
  // Declare all variables
  var i, tabcontent_2, tablinks_2;

  // Get all elements with class="tabcontent" and hide them
  tabcontent_2 = document.getElementsByClassName("tabcontent_2");
  for (i = 0; i < tabcontent_2.length; i++) {
    tabcontent_2[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks_2 = document.getElementsByClassName("tablinks_2");
  for (i = 0; i < tablinks_2.length; i++) {
    tablinks_2[i].className = tablinks_2[i].className.replace(" active_tab", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active_tab";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen_2").click();
