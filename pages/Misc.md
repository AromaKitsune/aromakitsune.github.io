---
layout: page
title: Misc
permalink: /Misc
---

This page is for testing some HTML stuff


A customized Home Menu UI made by me.

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

