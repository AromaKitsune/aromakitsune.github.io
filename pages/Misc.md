---
layout: page
title: Misc
permalink: /Misc
---

This page is for testing some HTML stuff :P

<a href="#bottom" id="top">
Jump to bottom page</a>
/
<a href="/Misc">
Back to this page</a>

# Header (1) / Title

## Header (2)

### Header (3)

#### Header (4)


## Font Display

*Sample*

**Sample**

***Sample***


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

<p class="note-yellow">
  The quick brown fox jumps over the lazy dog.
</p>

<p class="note-red">
  The quick brown fox jumps over the lazy dog.
</p>

<details class="expandable-details">
  <summary>
    <b>Details</b>
  </summary>
  <p>
    The quick <code>brown fox</code> jumps over the <code>lazy dog</code>.
    <br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</details>


## Lists

<ul>
  <li>
    <p>ListItem1</p>
  </li>
  <li>
    <p>
      ListItem2 with
      <a href="https://github.com/" target="_blank">
      link</a>.
    </p>
  </li>
  <li>
    <p>ListItem3</p>
    <ul>
      <li>
        <p>SubListItem1</p>
      </li>
      <li>
        <p>
          SubListItem2 with
          <a href="https://github.com/" target="_blank">
          link</a>.
        </p>
      </li>
      <li>
        <p>SubListItem3</p>
      </li>
    </ul>
  </li>
  <li>
    <p>ListItem4</p>
  </li>
</ul>


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
    Description1
    <br>
    Description2
    <br>
    <small>
      Description3
    </small>
  </p>
</div>

<div class="container_gallery">
  <!-- Full-width images with number text -->
  <div class="mySlides_gallery" align="center">
    <img src="/images/Sample/Windows11_Light.jpg">
  </div>

  <div class="mySlides_gallery" align="center">
    <img src="/images/Sample/Windows11_Dark.jpg">
  </div>

  <div class="mySlides_gallery" align="center">
    <img src="/images/Sample/Glow.jpg">
  </div>

  <div class="mySlides_gallery" align="center">
    <img src="/images/Sample/CapturedMotion.jpg">
  </div>

  <!-- Next and previous buttons -->
  <a class="prev_gallery" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next_gallery" onclick="plusSlides(1)">&#10095;</a>

  <!-- Image text -->
  <div class="caption-container_gallery">
    <p id="caption_gallery"></p>
  </div>

  <!-- Thumbnail images -->
  <div class="row_gallery">
    <div class="column_gallery">
      <img class="demo_gallery cursor_gallery" src="/images/Sample/Windows11_Light.jpg" style="width:100%"
        onclick="currentSlide(1)" alt="Windows 11 - Light">
    </div>

    <div class="column_gallery">
      <img class="demo_gallery cursor_gallery" src="/images/Sample/Windows11_Dark.jpg" style="width:100%"
        onclick="currentSlide(2)" alt="Windows 11 - Dark">
    </div>

    <div class="column_gallery">
      <img class="demo_gallery cursor_gallery" src="/images/Sample/Glow.jpg" style="width:100%"
        onclick="currentSlide(3)" alt="Glow">
    </div>

    <div class="column_gallery">
      <img class="demo_gallery cursor_gallery" src="/images/Sample/CapturedMotion.jpg" style="width:100%"
        onclick="currentSlide(4)" alt="Captured Motion">
    </div>
  </div>
</div>


## Tabs

<!-- Tab links -->
<div class="tab_0">
  <button class="tablinks_0" onclick="openTab_0(event, 'Tab1')" id="defaultOpen_0">Tab1</button>
  <button class="tablinks_0" onclick="openTab_0(event, 'Tab2')">Tab2</button>
  <button class="tablinks_0" onclick="openTab_0(event, 'Tab3')">Tab3</button>
</div>

<!-- Tab content -->
<div id="Tab1" class="tabcontent_0">
  <p>This is Tab1</p>
</div>

<!-- Tab content -->
<div id="Tab2" class="tabcontent_0">
  <p>This is Tab2</p>
</div>

<!-- Tab content -->
<div id="Tab3" class="tabcontent_0">
  <p>This is Tab3</p>
</div>

<!-- Tab links -->
<div class="tab_1">
  <button class="tablinks_1" onclick="openTab_1(event, 'Tab4')" id="defaultOpen_1">Tab4</button>
  <button class="tablinks_1" onclick="openTab_1(event, 'Tab5')">Tab5</button>
  <button class="tablinks_1" onclick="openTab_1(event, 'Tab6')">Tab6</button>
</div>

<!-- Tab content -->
<div id="Tab4" class="tabcontent_1">
  <p>This is Tab4</p>
</div>

<!-- Tab content -->
<div id="Tab5" class="tabcontent_1">
  <p>This is Tab5</p>
</div>

<!-- Tab content -->
<div id="Tab6" class="tabcontent_1">
  <p>This is Tab6</p>
</div>


### Full-width Tabs

<!-- Tab links -->
<div class="tab_fullwidth_0">
  <button class="tablinks_fullwidth_0" onclick="openTab_fullwidth_0(event, 'FullWidthTab1')" id="defaultOpen_fullwidth_0">FullWidthTab1</button>
  <button class="tablinks_fullwidth_0" onclick="openTab_fullwidth_0(event, 'FullWidthTab2')">FullWidthTab2</button>
</div>

<!-- Tab content -->
<div id="FullWidthTab1" class="tabcontent_fullwidth_0">
  <!-- Tab links -->
  <div class="tab_2">
    <button class="tablinks_2" onclick="openTab_2(event, 'NestedTab1')" id="defaultOpen_2">NestedTab1</button>
    <button class="tablinks_2" onclick="openTab_2(event, 'NestedTab2')">NestedTab2</button>
    <button class="tablinks_2" onclick="openTab_2(event, 'NestedTab3')">NestedTab3</button>
  </div>

  <!-- Tab content -->
  <div id="NestedTab1" class="tabcontent_2">
    <p>This is NestedTab1</p>
  </div>

  <!-- Tab content -->
  <div id="NestedTab2" class="tabcontent_2">
    <p>This is NestedTab2</p>
  </div>

  <!-- Tab content -->
  <div id="NestedTab3" class="tabcontent_2">
    <p>This is NestedTab3</p>
  </div>
</div>

<!-- Tab content -->
<div id="FullWidthTab2" class="tabcontent_fullwidth_0">

<pre class="highlight"><code>The quick brown fox jumps over the lazy dog.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</code></pre>

  <p class="note-blue">
    The quick brown fox jumps over the lazy dog.
  </p>
</div>


## Buttons

<a href="/files/3DS/Kitsune-CustomHomeMenuUI_EUR.cia">
<button class="btn">Button1</button>
</a>

<a href="/files/3DS/Kitsune-CustomHomeMenuUI_USA.cia">
<button class="btn">Button2</button>
</a>

<a href="/files/3DS/Kitsune-CustomHomeMenuUI_JPN.cia">
<button class="btn">Button3</button>
</a>


<a href="#top" id="bottom">
Jump to top page</a>

<script src="/assets/js/gallery.js"></script>
<script src="/assets/js/tabs_0.js"></script>
<script src="/assets/js/tabs_1.js"></script>
<script src="/assets/js/tabs_2.js"></script>
<script src="/assets/js/tabs_fullwidth_0.js"></script>
