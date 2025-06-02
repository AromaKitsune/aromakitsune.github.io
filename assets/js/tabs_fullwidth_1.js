function openTab_fullwidth_1(evt, tabName) {
  // Declare all variables
  var i, tabcontent_fullwidth_1, tablinks_fullwidth_1;

  // Get all elements with class="tabcontent" and hide them
  tabcontent_fullwidth_1 = document.getElementsByClassName("tabcontent_fullwidth_1");
  for (i = 0; i < tabcontent_fullwidth_1.length; i++) {
    tabcontent_fullwidth_1[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks_fullwidth_1 = document.getElementsByClassName("tablinks_fullwidth_1");
  for (i = 0; i < tablinks_fullwidth_1.length; i++) {
    tablinks_fullwidth_1[i].className = tablinks_fullwidth_1[i].className.replace(" active_tab", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active_tab";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen_fullwidth_1").click();
