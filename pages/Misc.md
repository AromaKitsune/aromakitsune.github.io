---
layout: page
title: Misc
permalink: /Misc
---

This page is for testing some HTML stuff :P

<style>
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

# Header (1) / Title

## Header (2)

### Header (3)

---

## Code Blocks

In-line:

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


## Notes

<p class="note-info">
  The quick <code>brown fox</code> jumps over the <code>lazy dog</code>.
  <br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>

<p class="note-warning">
  The quick <code>brown fox</code> jumps over the <code>lazy dog</code>.
  <br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>

<p class="note-blue">
  The quick brown fox jumps over the lazy dog.
</p>

<p class="note-green">
  The quick brown fox jumps over the lazy dog.
</p>

<details>
  <summary>
    <b>Details</b>
  </summary>
  <p class="note-blue">
    The quick <code>brown fox</code> jumps over the <code>lazy dog</code>.
    <br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</details>


## Tables

Header 1         | Header 2 | Header 3
---------------- | -------- | --------
Row 1 - Column 1 | Column 2 | Column 3
Row 2 - Column 1 | Column 2 | Column 3
Row 3 - Column 1 | Column 2 | Column 3
Row 4 - Column 1 | Column 2 | Column 3
Row 5 - Column 1 | Column 2 | Column 3


## Images

<div align="center">
  <p class="image">
    <img src="/images/Sample/Windows11_Light.jpg">
  </p>
</div>


<div align="center">
  <p class="image">
    <a href="/images/Sample/Windows11_Light.jpg">
      <img src="/images/Sample/Windows11_Light.jpg">
    </a>
    <br>
    Windows 11
    <br>
    Light
    <br>
    <small>
      or Dark
    </small>
  </p>
</div>


<!-- Container for the image gallery -->
<div class="container">

  <!-- Full-width images with number text -->
  <div class="mySlides" align="center">
      <img src="/images/Sample/Windows11_Light.jpg">
  </div>

  <div class="mySlides" align="center">
      <img src="/images/Sample/Windows11_Dark.jpg">
  </div>

  <div class="mySlides" align="center">
      <img src="/images/Sample/Glow.jpg">
  </div>

  <div class="mySlides" align="center">
      <img src="/images/Sample/CapturedMotion.jpg">
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
      <img class="demo cursor" src="/images/Sample/Windows11_Light.jpg" style="width:100%" onclick="currentSlide(1)" alt="Windows 11 - Light">
    </div>

    <div class="column">
      <img class="demo cursor" src="/images/Sample/Windows11_Dark.jpg" style="width:100%" onclick="currentSlide(2)" alt="Windows 11 - Dark">
    </div>

    <div class="column">
      <img class="demo cursor" src="/images/Sample/Glow.jpg" style="width:100%" onclick="currentSlide(3)" alt="Glow">
    </div>

    <div class="column">
      <img class="demo cursor" src="/images/Sample/CapturedMotion.jpg" style="width:100%" onclick="currentSlide(4)" alt="Captured Motion">
    </div>
  </div>
</div>

<script src="/assets/slideshow-gallery.js"></script>
<br>


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
