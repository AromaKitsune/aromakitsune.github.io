---
layout: page
title: 3DS - Custom Home Menu UI
permalink: /3DS-Custom-Home-Menu-UI
---

The custom Home Menu UI for the Nintendo 3DS.

Check out the
[Home Menu UI Layout Customization Guide](/3DS-Home-Menu-UI-Layout-Customization)
for creating your own customized Home Menu UI for 3DS!


## Kitsune's Custom Home Menu UI

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

  <div class="mySlides" align="center">
      <img src="/images/3DS/3DS-Custom-Home-Menu-UI_4.png">
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
      <img class="demo cursor" src="/images/3DS/3DS-Custom-Home-Menu-UI_1.gif" style="width:100%" onclick="currentSlide(1)" alt="Spinning Cursor">
    </div>

    <div class="column">
      <img class="demo cursor" src="/images/3DS/3DS-Custom-Home-Menu-UI_2.png" style="width:100%" onclick="currentSlide(2)" alt="Blue Applets">
    </div>

    <div class="column">
      <img class="demo cursor" src="/images/3DS/3DS-Custom-Home-Menu-UI_3.png" style="width:100%" onclick="currentSlide(3)" alt="No Miiverse Applet">
    </div>

    <div class="column">
      <img class="demo cursor" src="/images/3DS/3DS-Custom-Home-Menu-UI_4.png" style="width:100%" onclick="currentSlide(4)" alt="Blue Shutdown Screen">
    </div>
  </div>
</div>
<br>

Target system firmware version: `11.17.0-50`

The system font is a separate system file. To install the custom system font, [go here](/3DS-Custom-System-Fonts).

Last updated: 2024-10-07

### Download Mod:

<!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'Normal')" id="defaultOpen">Normal</button>
  <button class="tablinks" onclick="openTab(event, 'NoMvs')">No Miiverse Applet</button>
</div>

<!-- Tab content -->
<div id="Normal" class="tabcontent">
  <ul>
    <li>
      <p><a href="/files/3DS/Kitsune-CustomHomeMenuUI.zip">LayeredFS</a></p>
    </li>
    <li>
      <p><a href="/files/3DS/Kitsune-CustomHomeMenuUI_EUR.cia">CIA - for EUR console</a></p>
    </li>
    <li>
      <p><a href="/files/3DS/Kitsune-CustomHomeMenuUI_USA.cia">CIA - for USA console</a></p>
    </li>
    <li>
      <p><a href="/files/3DS/Kitsune-CustomHomeMenuUI_JPN.cia">CIA - for JPN console</a></p>
    </li>
  </ul>
</div>

<!-- Tab content -->
<div id="NoMvs" class="tabcontent">
  <ul>
    <li>
      <p><a href="/files/3DS/Kitsune-CustomHomeMenuUI_NoMvs.zip">LayeredFS</a></p>
    </li>
    <li>
      <p><a href="/files/3DS/Kitsune-CustomHomeMenuUI_EUR_NoMvs.cia">CIA - for EUR console</a></p>
    </li>
    <li>
      <p><a href="/files/3DS/Kitsune-CustomHomeMenuUI_USA_NoMvs.cia">CIA - for USA console</a></p>
    </li>
    <li>
      <p><a href="/files/3DS/Kitsune-CustomHomeMenuUI_JPN_NoMvs.cia">CIA - for JPN console</a></p>
    </li>
  </ul>

  <p>
    For those who don’t use a Miiverse replacement service such as Pretendo Network’s Juxtaposition
  </p>
</div>


#### Installation Method 1: LayeredFS

## Adding the Home Menu Applet Patch

<!-- Tab links -->
<div class="tab2">
  <button class="tablinks2" onclick="openTab2(event, '3DS-inst')" id="defaultOpen2">3DS</button>
  <button class="tablinks2" onclick="openTab2(event, 'Lime3DS-inst')">Lime3DS</button>
</div>

<!-- Tab content -->
<div id="3DS-inst" class="tabcontent2">
  <p>
    Luma3DS custom firmware is required to use the mod.
    <a href="https://3ds.hacks.guide/" target="_blank">
    Install CFW if you haven't already.</a>
  </p>
  
  <p class="note-info">
    LayeredFS patching is unstable for applets which causes Home Menu to randomly crash if Home Menu is opened several times
    (by suspending a game or exiting an applet).
    <br>
    <a href="#installation-method-2-cia-file">
    Consider using the CIA file method for now.</a>
    <br>
    LayeredFS method can be used on Lime3DS emulator without any crashes.
  </p>

  <ol>
    <li>
      <p>Unpack the downloaded archive file and enter the <code>LayeredFS</code> folder.</p>
    </li>
    <li>
      <p>Enter a folder matching your console region.</p>
    </li>
    <li>
      <p>Copy the <code>luma</code> folder to the root of the SD Card.</p>
    </li>
    <li>
      <p>Launch the Luma3DS config by holding the <code>Select</code> button while booting.</p>
    </li>
    <li>
      <p>Activate "Enable game patching".</p>
    </li>
    <li>
      <p>Save and exit.</p>
    </li>
  </ol>

  <p class="note-green">
    The custom Home Menu UI has been installed.
  </p>
</div>

<!-- Tab content -->
<div id="Lime3DS-inst" class="tabcontent2">
  <p>
    You can also add the Home Menu applet patch to
    <a href="https://lime3ds.github.io/" target="_blank">
    Lime3DS emulator</a>.
  </p>

  <p class="note-info">
    AES Keys are required to install encrypted contents to Lime3DS.
    <a href="https://github.com/Lime3DS/Lime3DS/tree/master/dist/dumpkeys" target="_blank">
    Read here for more info.</a>
    <br>
    If you have Citra emulator, the installation process works the same.
  </p>

  <ol>
    <li>
      <p>Launch Lime3DS emulator.</p>
    </li>
    <li>
      <p>Go to <code>Emulation</code> → <code>Configure...</code> → <code>System</code>.</p>
    </li>
    <li>
      <p>Under the <code>3GX Plugins Loader</code> options, pick the system model and system region, then click <code>Download</code>.</p>
    </li>
    <li>
      <p>Wait for the system firmware download to complete.</p>
  
    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-System-Font-Customization_10.png">
      </p>
    </div>

    </li>
    <li>
      <p>Close the configuration window.</p>
    </li>
    <li>
      <p>Go to <code>File</code> → <code>Open Lime3DS Folder</code>.</p>
    </li>
    <li>
      <p>Go to <code>/load/mods</code>. Create folders if those don’t exist.</p>
    </li>
    <li>
      <p>Unpack the downloaded archive file and enter the <code>LayeredFS</code> folder.</p>
    </li>
    <li>
      <p>Go to <code>/[region]/luma/titles</code>.</p>
    </li>
    <li>
      <p>Copy the <code>000400300000??02</code> folder to the <code>mods</code> folder.</p>
    </li>
    <li>
      <p>Launch the Home Menu by going to <code>File</code> → <code>Boot Home Menu</code> → <code>EUR</code>/<code>USA</code>/<code>JPN</code>.</p>
    </li>
  </ol>

  <p class="note-green">
    The custom Home Menu UI has been installed.
  </p>
</div>


## Removing the Home Menu Applet Patch (3DS)

<!-- Tab links -->
<div class="tab3">
  <button class="tablinks3" onclick="openTab3(event, '3DS-uninst')" id="defaultOpen3">3DS</button>
  <button class="tablinks3" onclick="openTab3(event, 'Lime3DS-uninst')">Lime3DS</button>
</div>

<!-- Tab content -->
<div id="3DS-uninst" class="tabcontent3">
  <ol>
    <li>
      <p>Launch GodMode9.</p>
    </li>
    <li>
      <p>Go to <code>SDCARD:/luma/titles</code>.</p>
    </li>
    <li>
      <p>Delete or rename the <code>000400300000??02</code> folder.</p>
  
      <ul>
        <li>
          <p>EUR: <code>0004003000009802</code></p>
        </li>
        <li>
          <p>JPN: <code>0004003000008202</code></p>
        </li>
        <li>
          <p>USA: <code>0004003000008F02</code></p>
        </li>
      </ul>
    </li>
    <li>
      <p>Reboot the console.</p>
    </li>
  </ol>

  <p class="note-green">
    The Home Menu UI has been restored.
  </p>
</div>

<!-- Tab content -->
<div id="Lime3DS-uninst" class="tabcontent3">
  <ol>
    <li>
      <p>Launch Lime3DS emulator.</p>
    </li>
    <li>
      <p>Go to <code>File</code> → <code>Open Lime3DS Folder</code>.</p>
    </li>
    <li>
      <p>Go to <code>/load/mods</code>.</p>
    </li>
    <li>
      <p>Delete or rename the <code>000400300000??02</code> folder.</p>
  
      <ul>
        <li>
          <p>EUR: <code>0004003000009802</code></p>
        </li>
        <li>
          <p>JPN: <code>0004003000008202</code></p>
        </li>
        <li>
          <p>USA: <code>0004003000008F02</code></p>
        </li>
      </ul>
    </li>
    <li>
      <p>Launch the Home Menu by going to <code>File</code> → <code>Boot Home Menu</code> → <code>EUR</code>/<code>USA</code>/<code>JPN</code>.</p>
    </li>
  </ol>

  <p class="note-green">
    The Home Menu UI has been restored.
  </p>
</div>


#### Installation Method 2: CIA File

## Backing Up the Home Menu Applet

Luma3DS custom firmware is required to use the mod.
<a href="https://3ds.hacks.guide/" target="_blank">
Install CFW if you haven't already.</a>

<p class="note-blue">
  It is <strong>recommended</strong> to backup your Home Menu applet
  as you'll be able to restore it later on if the custom Home Menu applet is installed with the CIA file.
</p>

1.  Launch GodMode9.

2.  Press the `Home` button.

3.  Select `Scripts...` → `GM9Megascript` → `Miscellaneous` → `Title Options` → `Dump HomeMenu to .cia`.

4.  Proceed dumping this system applet.

5.  When asked to decrypt the CIA file, pick "No".

<p class="note-blue">
  The <code>homemenu.cia</code> file is saved to <code>SDCARD:/gm9/out</code>.
  Copy that file to a safe place in your computer.
</p>


## Installing the Custom Home Menu Applet

<p class="note-info">
  Create a NAND backup before modifying any system files!
  <br>
  Make sure you have a backup of the Home Menu applet before proceeding.
  <br>
  Modifying the Home Menu applet is safe and can be restored by re-installing the original Home Menu applet, instead of restoring a NAND backup.
  <br>
  To restore the Home Menu applet, see the
  <a href="#restoring-the-home-menu-applet---method-1">
  restore section</a>.
</p>

<p class="note-warning">
  Never uninstall CFW while any modded system files are installed, doing so will brick the console! A
  <a href="https://www.flashcarts.net/ds-quick-start-guide" target="_blank">
  DS flashcart with ntrboot</a>
  is required to re-install B9S.
  <br>
  Modified system files are not signed which they don't work on the original firmware, as the signature check fails.
  <br>
  If you wanna uninstall CFW before selling your console, you must restore the system files first, then follow the
  <a href="https://3ds.hacks.guide/uninstall-cfw" target="_blank">
  CFW uninstallation instructions</a>.
</p>

<p class="note-blue">
  System Update will fail while the custom Home Menu applet is installed.
  To update your system, you must restore the Home Menu applet back to its original state.
  <br>
  After a system update, backup the <code>homemenu.cia</code> file again in case the Home Menu is also updated.
  <br><br>
  The current Home Menu mod is likely compatible with future system firmware versions.
  If this mod stops working, I will update the base Home Menu applet for this mod.
</p>

<p class="note-blue">
  The CIA file must be installed with GodMode9. Do not install it with FBI,
  the installation will fail as the Home Menu applet is being used by another process.
</p>

1.  Add the downloaded CIA file to the SD Card.

2.  Launch GodMode9.

3.  Browse and select the CIA file.

4.  Select `CIA image options...` → `Install game image`.

    - CIA files are encrypted by default, so there's no need to re-encrypt it.

5.  Reboot the console.

<p class="note-green">
  The custom Home Menu applet has been installed.
</p>


## Restoring the Home Menu Applet - Method 1

<p class="note-blue">
  If you've dumped the <code>homemenu.cia</code> file with GodMode9, follow this section.
</p>

1.  Launch GodMode9.

2.  Go to `SDCARD:/gm9/out` and select the `homemenu.cia` file.

3.  Select `CIA image options...` → `Install game image`.

4.  Reboot the console.

<p class="note-green">
  The Home Menu applet has been restored.
</p>


## Restoring the Home Menu Applet - Method 2

<p class="note-blue">
  If you've lost the <code>homemenu.cia</code> file from your SD Card and computer, follow this section.
  <br>
  The target system firmware version is <code>11.17.0-50</code>.
</p>

1.  Download the original Home Menu applet:

    - [EUR](/files/3DS/HomeMenu_EUR.cia) \| [USA](/files/3DS/HomeMenu_USA.cia) \| [JPN](/files/3DS/HomeMenu_JPN.cia)

2.  Add the `HomeMenu_???.cia` file to the SD Card.

3.  Launch GodMode9.

4.  Browse and select the `HomeMenu_???.cia` file.

5.  Select `CIA image options...` → `Install game image`.

6.  Reboot the console.

<p class="note-green">
  The Home Menu applet has been restored.
</p>


## Restoring the Home Menu Applet - Method 3

<p class="note-blue">
  Alternatively, download the system file for your system firmware version other than <code>11.17.0-50</code>.
</p>

1.  Download
    <a href="https://github.com/wyatt8740/3DNUS" target="_blank">
    3DNUS</a>.

2.  Launch 3DNUS.

3.  Input your system's current firmware version and region (ex: `11.15.0-47E`).

4.  Click "New 3DS" or "Old 3DS" for your 3DS system model.

5.  Click "Begin Download", and wait for the download to complete.

6.  Enter the firmware folder and find the `.cia` file for Home Menu inside the `updates` folder.

    - EUR: `0004003000009802.cia`

    - USA: `0004003000008F02.cia`

    - JPN: `0004003000008202.cia`

7.  Rename the `000400300000??02.cia` file to `HomeMenu.cia`.

8.  Place it in the SD Card.

9.  Launch GodMode9.

10. Browse and select the `HomeMenu.cia` file.

11. Select `CIA image options...` → `Install game image`.

12. Reboot the console.

<p class="note-green">
  The Home Menu applet has been restored.
</p>

<script src="/assets/slideshow-gallery.js"></script>
<script src="/assets/tabs.js"></script>
<script src="/assets/tabs2.js"></script>
<script src="/assets/tabs3.js"></script>
