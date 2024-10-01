---
layout: page
title: Misc
permalink: /Misc
---

This page is for testing some HTML stuff :P

<style>
/*************** Image Modal ***************/
body {font-family: Arial, Helvetica, sans-serif;}

#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  padding-bottom: 100px; /* Location of the box */
  padding-left: 200px;
  padding-right: 200px;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content, #caption {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.3s;
  animation-name: zoom;
  animation-duration: 0.3s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}

/*************** Gallery Slideshow ***************/
* {
  box-sizing: border-box;
}

/* Position the image container (needed to position the left and right arrows) */
.container {
  position: relative;
  background-color: #2c3f48;
  border: solid 1px #535355;
  border-radius: 10px;
  overflow: hidden;
  padding: 20px;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Add a pointer when hovering over the thumbnail images */
.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 5px;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 20px;
  border-radius: 5px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: #648fa3;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Container for image text */
.caption-container {
  text-align: center;
  background-color: #2c3f48;
  padding: 2px 16px;
  color: white;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Six columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 5px;
}

.column-2 {
  float: left;
  width: 33%;
  padding: 5px;
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 1;
}

.active,
.demo:hover {
  border: solid 5px #0078d7;
}

/*************** Style the tab ***************/
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
} 
</style>

### Code Blocks

Normal:

The quick `brown fox` jumps over the `lazy dog`.

Scroll bar:

```
The quick brown fox jumps over the lazy dog.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
```

Wrapped:

<p class="code-block-wrap">
  The quick brown fox jumps over the lazy dog.
  <br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>

<details>
  <summary>
    <b>Details</b>
  </summary>
  <p class="mini-note">
    The quick <code>brown fox</code> jumps over the <code>lazy dog</code>.
    <br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</details>

---

### Notes

<p class="note">
  The quick <code>brown fox</code> jumps over the <code>lazy dog</code>.
  <br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>

<p class="warning">
  The quick <code>brown fox</code> jumps over the <code>lazy dog</code>.
  <br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>

---

### Tables

Header 1         | Header 2 | Header 3
---------------- | -------- | --------
Row 1 - Column 1 | Column 2 | Column 3
Row 2 - Column 1 | Column 2 | Column 3
Row 3 - Column 1 | Column 2 | Column 3
Row 4 - Column 1 | Column 2 | Column 3
Row 5 - Column 1 | Column 2 | Column 3

---

### Screenshots

<div align="center">
  <p class="image">
    <img src="/images/3DS/3DS-System-Font-Customization_07.png">
  </p>
</div>

<!-- Container for the image gallery -->
<div class="container">

  <!-- Full-width images with number text -->
  <div class="mySlides" align="center">
      <img src="/images/3DS/3DS-Custom-Home-Menu-UI_1.gif">
  </div>

  <div class="mySlides" align="center">
      <img src="/images/3DS/3DS-Custom-Home-Menu-UI_2.png">
  </div>

  <div class="mySlides" align="center">
      <img src="/images/3DS/3DS-Custom-Home-Menu-UI_3.png">
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

  <!-- Image text -->
  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <!-- Thumbnail images -->
  <div class="row">
    <div class="column">
      <img class="demo cursor" src="/images/3DS/3DS-Custom-Home-Menu-UI_1.gif" style="width:100%" onclick="currentSlide(1)" alt="Spinny Cursor">
    </div>

    <div class="column">
      <img class="demo cursor" src="/images/3DS/3DS-Custom-Home-Menu-UI_2.png" style="width:100%" onclick="currentSlide(2)" alt="Purple Applets">
    </div>

    <div class="column">
      <img class="demo cursor" src="/images/3DS/3DS-Custom-Home-Menu-UI_3.png" style="width:100%" onclick="currentSlide(3)" alt="Blue Shutdown Screen">
    </div>
  </div>
</div>

<script src="/assets/slideshow-gallery.js"></script>
<br>

## Image Modal

[Source](https://www.w3schools.com/howto/howto_css_modal_images.asp)

<img id="myImg" src="/images/Wii-U/Pop-Happiness-Font.png" alt="Screenshot1">
<br>
<img id="myImg" src="/images/3DS/3DS-System-Font-Customization_06.png" alt="Screenshot2">

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
</script>

## Tabs

[Source](https://www.w3schools.com/howto/howto_js_tabs.asp)

 <!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'Tab1')" id="defaultOpen">Tab1</button>
  <button class="tablinks" onclick="openCity(event, 'Tab2')">Tab2</button>
  <button class="tablinks" onclick="openCity(event, 'Tab3')">Tab3</button>
</div>

<!-- Tab content -->
<div id="Tab1" class="tabcontent">
  <h3>Tab1</h3>
  <p>This is Tab1</p>
</div>


<!-- Tab content -->
<div id="Tab2" class="tabcontent">
  <h3>Tab2</h3>
  <p>This is Tab2</p>
</div>

<!-- Tab content -->
<div id="Tab3" class="tabcontent">
  <h3>Tab3</h3>
  <p>This is Tab3</p>
</div>

<script>
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>


### Screenshots

<div align="center">
  <p class="image">
    <a href="/images/Super-Mario-Galaxy_Dialogue.png">
      <img src="/images/Super-Mario-Galaxy_Dialogue.png">
    </a>
    <br>
    Super Mario Galaxy
    <br>
    Pop Happiness font used for the UI.
    <br>
    <small>
      Screenshot taken with Dolphin Emulator
    </small>
  </p>
</div>

<div align="center">
  <p class="image">
    <a href="/images/Hyperdimension-Neptunia-mk2_Tutorial.png">
      <img src="/images/Hyperdimension-Neptunia-mk2_Tutorial.png">
    </a>
    <br>
    Hyperdimension Neptunia mk2
    <br>
    Pop Happiness font used for the tutorial sections.
    <br>
    <small>
      Screenshot taken with RPCS3 emulator
    </small>
  </p>
</div>

