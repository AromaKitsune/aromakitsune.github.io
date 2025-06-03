---
layout: page
title: 3DS - Custom Home Menu UI
permalink: /3DS-Custom-Home-Menu-UI
---

The custom Home Menu UI for the Nintendo 3DS.

Check out the
[Home Menu UI Layout Customization Guide](/3DS-Home-Menu-UI-Layout-Customization)
for creating your own customized Home Menu UI for 3DS!

---

<details class="expandable-details">
  <summary>
    <b>Table of Contents</b>
  </summary>
  <ul>
    <li>
      <p>
        <a href="#kitsunes-custom-home-menu-ui">
        Kitsune's Custom Home Menu UI</a>
      </p>
    </li>
    <li>
      <p>
        <a href="#choose-how-you-want-to-install-the-mod">
        Installing & Uninstalling the Mod</a>
      </p>
    </li>
    <li>
      <p>
        <a href="#extra-stuff">
        Extra Stuff</a>
      </p>
    </li>
  </ul>
</details>


## Kitsune's Custom Home Menu UI

A customized Home Menu UI made by me.

<div class="container_gallery">
  <!-- Full-width images with number text -->
  <div class="mySlides_gallery" align="center">
    <img src="/images/3DS/3DS-Custom-Home-Menu-UI_1.gif">
  </div>

  <div class="mySlides_gallery" align="center">
    <img src="/images/3DS/3DS-Custom-Home-Menu-UI_2.png">
  </div>

  <div class="mySlides_gallery" align="center">
    <img src="/images/3DS/3DS-Custom-Home-Menu-UI_3.png">
  </div>

  <div class="mySlides_gallery" align="center">
    <img src="/images/3DS/3DS-Custom-Home-Menu-UI_4.png">
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
      <img class="demo_gallery cursor_gallery" src="/images/3DS/3DS-Custom-Home-Menu-UI_1.gif" style="width:100%"
        onclick="currentSlide(1)" alt="Spinning Cursor">
    </div>

    <div class="column_gallery">
      <img class="demo_gallery cursor_gallery" src="/images/3DS/3DS-Custom-Home-Menu-UI_2.png" style="width:100%"
        onclick="currentSlide(2)" alt="Blue Applets">
    </div>

    <div class="column_gallery">
      <img class="demo_gallery cursor_gallery" src="/images/3DS/3DS-Custom-Home-Menu-UI_3.png" style="width:100%"
        onclick="currentSlide(3)" alt="No Miiverse Applet">
    </div>

    <div class="column_gallery">
      <img class="demo_gallery cursor_gallery" src="/images/3DS/3DS-Custom-Home-Menu-UI_4.png" style="width:100%"
        onclick="currentSlide(4)" alt="Blue Shutdown Screen">
    </div>
  </div>
</div>

Target system firmware version: `11.17.0-50`
<br>and future FW versions, unless major changes are made to Home Menu

The system font is a separate system file. To install a custom system font, [go here](/3DS-Custom-System-Fonts).

Last updated: 2024-10-07

### Download Mod:

<!-- Tab links -->
<div class="tab_0">
  <button class="tablinks_0" onclick="openTab_0(event, 'Normal')" id="defaultOpen_0">Normal</button>
  <button class="tablinks_0" onclick="openTab_0(event, 'NoMvs')">No Miiverse Applet</button>
</div>

<!-- Tab content -->
<div id="Normal" class="tabcontent_0">
  <ul>
    <li>
      <p>
        <a href="/files/3DS/Kitsune-CustomHomeMenuUI.zip">
        LayeredFS</a>
      </p>
    </li>
    <li>
      <p>
        <a href="/files/3DS/Kitsune-CustomHomeMenuUI_EUR.cia">
        CIA - for EUR console</a>
      </p>
    </li>
    <li>
      <p>
        <a href="/files/3DS/Kitsune-CustomHomeMenuUI_USA.cia">
        CIA - for USA console</a>
      </p>
    </li>
    <li>
      <p>
        <a href="/files/3DS/Kitsune-CustomHomeMenuUI_JPN.cia">
        CIA - for JPN console</a>
      </p>
    </li>
  </ul>
</div>

<!-- Tab content -->
<div id="NoMvs" class="tabcontent_0">
  <ul>
    <li>
      <p>
        <a href="/files/3DS/Kitsune-CustomHomeMenuUI_NoMvs.zip">
        LayeredFS</a>
      </p>
    </li>
    <li>
      <p>
        <a href="/files/3DS/Kitsune-CustomHomeMenuUI_EUR_NoMvs.cia">
        CIA - for EUR console</a>
      </p>
    </li>
    <li>
      <p>
        <a href="/files/3DS/Kitsune-CustomHomeMenuUI_USA_NoMvs.cia">
        CIA - for USA console</a>
      </p>
    </li>
    <li>
      <p>
        <a href="/files/3DS/Kitsune-CustomHomeMenuUI_JPN_NoMvs.cia">
        CIA - for JPN console</a>
      </p>
    </li>
  </ul>

  <p class="note-blue">
    For those who don’t want to use a Miiverse replacement service such as Pretendo Network’s Juxtaposition
  </p>
</div>


### Choose how you want to install the mod:

<!-- Tab links -->
<div class="tab_fullwidth_0">
  <button class="tablinks_fullwidth_0" onclick="openTab_fullwidth_0(event, 'LayeredFS')" id="defaultOpen_fullwidth_0">SD Card File Redirection (LayeredFS)</button>
  <button class="tablinks_fullwidth_0" onclick="openTab_fullwidth_0(event, 'CIA_File')">System File Replacement (CIA File)</button>
</div>

<!-- Tab content -->
<div id="LayeredFS" class="tabcontent_fullwidth_0">
  <h2 id="adding-the-home-menu-applet-patch">
  Adding the Home Menu Applet Patch</h2>

  <!-- Tab links -->
  <div class="tab_1">
    <button class="tablinks_1" onclick="openTab_1(event, '3DS_Install')" id="defaultOpen_1">3DS</button>
    <button class="tablinks_1" onclick="openTab_1(event, 'Azahar_Install')">Azahar</button>
  </div>

  <!-- Tab content -->
  <div id="3DS_Install" class="tabcontent_1">
    <p>
      Luma3DS custom firmware is required to use the mod.
      <a href="https://3ds.hacks.guide/" target="_blank">
      Install CFW if you haven't already.</a>
    </p>

    <p class="note-info">
      LayeredFS is a Luma3DS feature that redirects games/apps assets to modded assets files in the SD Card without patching the ROMs or system files directly.
    </p>

    <p class="note-warning-yellow">
      LayeredFS patching is unstable for system applets which causes Home Menu to crash.
      This happens when Home Menu is opened 11 times total
      (by suspending a game or exiting an applet)
      during the whole session (after booting the system).
      <br>
      <b>This method should be used for testing purposes.</b>
      To avoid crashes, install this mod with the CIA file instead.
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
        <p>Activate “Enable game patching”.</p>
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
  <div id="Azahar_Install" class="tabcontent_1">
    <p>
      You can also add the Home Menu applet patch to
      <a href="https://azahar-emu.org/" target="_blank">
      Azahar emulator</a>.
    </p>

    <p class="note-info">
      The system files need to be installed to a virtual NAND before continuing.
      Follow the instructions for 
      <a href="https://github.com/azahar-emu/ArticSetupTool" target="_blank">
      setting up system files</a> on an emulator. A real 3DS is required.
    </p>

    <ol>
      <li>
        <p>Launch Azahar.</p>
      </li>
      <li>
        <p>Go to <code>File</code> → <code>Open Azahar Folder</code>.</p>
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


  <h2 id="removing-the-home-menu-applet-patch">
  Removing the Home Menu Applet Patch</h2>

  <!-- Tab links -->
  <div class="tab_2">
    <button class="tablinks_2" onclick="openTab_2(event, '3DS_Uninstall')" id="defaultOpen_2">3DS</button>
    <button class="tablinks_2" onclick="openTab_2(event, 'Azahar_Uninstall')">Azahar</button>
  </div>

  <!-- Tab content -->
  <div id="3DS_Uninstall" class="tabcontent_2">
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
  <div id="Azahar_Uninstall" class="tabcontent_2">
    <ol>
      <li>
        <p>Launch Azahar.</p>
      </li>
      <li>
        <p>Go to <code>File</code> → <code>Open Azahar Folder</code>.</p>
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
</div>

<!-- Tab content -->
<div id="CIA_File" class="tabcontent_fullwidth_0">
  <h2 id="backing-up-the-home-menu-applet">
  Backing Up the Home Menu Applet</h2>

  <p>
    Luma3DS custom firmware is required to use the mod.
    <a href="https://3ds.hacks.guide/" target="_blank">
    Install CFW if you haven't already.</a>
  </p>

  <p class="note-blue">
    It is <strong>recommended</strong> to backup your Home Menu applet
    as you'll be able to restore it later on if the custom Home Menu applet is installed with the CIA file.
  </p>

  <ol>
    <li>
      <p>Launch GodMode9.</p>
    </li>
    <li>
      <p>Press the <code>Home</code> button.</p>
    </li>
    <li>
      <p>Select <code>Scripts...</code> → <code>GM9Megascript</code> → <code>Miscellaneous</code> → <code>Title Options</code> → <code>Dump HomeMenu to .cia</code>.</p>
    </li>
    <li>
      <p>Proceed dumping this system applet.</p>
    </li>
    <li>
      <p>If it asks you to decrypt the CIA file afterwards, select "No".</p>
    </li>
  </ol>

  <p class="note-green">
    The <code>homemenu.cia</code> file is saved to <code>SDCARD:/gm9/out</code>.
    Copy that file to a safe place in your computer.
  </p>


  <h2 id="installing-the-custom-home-menu-applet">
  Installing the Custom Home Menu Applet</h2>

  <p class="note-info">
    Create a NAND backup before modifying any system files!
    <br>
    Make sure you have a backup of the Home Menu applet before proceeding.
    <br>
    Modifying the Home Menu applet is safe and can be restored by re-installing the original Home Menu applet, instead of restoring a NAND backup.
    <br>
    If you messed up and the Home Menu fails to launch, it is NOT "bricked",
    you can still access GodMode9 and install an original <code>.cia</code> file for Home Menu applet to fix it.
    <br>
    To restore the Home Menu applet, see the
    <a href="#restoring-the-home-menu-applet">
    restore section</a>.
  </p>

  <p class="note-warning">
    Never uninstall CFW while any modded system files are installed, doing so will <b>actually</b> brick the console!
    If you bricked your console that way, you'll need a
    <a href="https://www.flashcarts.net/ds-quick-start-guide" target="_blank">
    DS flashcart with ntrboot</a>
    to re-install Boot9Strap to unbrick your console.
    <br>
    Modified system files are not signed which they don't work on the original firmware, as the signature check fails.
    <br>
    To safely uninstall CFW, you must restore the system files first, then follow the
    <a href="https://3ds.hacks.guide/uninstall-cfw" target="_blank">
    CFW uninstallation instructions</a>.
    <br>
    Only uninstall CFW if you don't need it anymore and you wanna give/sell away your console.
  </p>

  <details class="expandable-details">
    <summary>
      <b>System Update note</b>
    </summary>
    <p>
      System Update will fail while the custom Home Menu applet is installed.
      To update your system, you must restore the Home Menu applet back to its original state.
      <br>
      After a system update, backup the <code>homemenu.cia</code> file again in case the Home Menu is also updated.
    </p>
    <p>
      The current Home Menu mod is likely compatible with future system firmware versions.
      If this mod stops working, I will update the base Home Menu applet for this mod.
    </p>
  </details>

  <p class="note-blue">
    The CIA file must be installed with GodMode9. Do not install it with FBI,
    the installation will fail as the Home Menu applet is being used by another process.
  </p>

  <p>
    You must have GodMode9 v2.0.0 or higher to be able to install <code>.cia</code> files.
    Get the
    <a href="https://github.com/d0k3/GodMode9" target="_blank">
    latest version of GodMode9 here</a>.
  </p>

  <ol>
    <li>
      <p>Add the downloaded CIA file to the SD Card.</p>
    </li>
    <li>
      <p>Launch GodMode9.</p>
    </li>
    <li>
      <p>Browse and select the CIA file.</p>
    </li>
    <li>
      <p>Select <code>CIA image options...</code> → <code>Install game image</code>.</p>
      <ul>
        <li>
          <p>CIA files are encrypted by default, so there's no need to re-encrypt it.</p>
        </li>
      </ul>
    </li>
    <li>
      <p>Reboot the console.</p>
    </li>
  </ol>

  <p class="note-green">
    The custom Home Menu applet has been installed.
  </p>


  <h2 id="restoring-the-home-menu-applet">
  Restoring the Home Menu Applet</h2>

  <!-- Tab links -->
  <div class="tab_3">
    <button class="tablinks_3" onclick="openTab_3(event, 'Restore1')" id="defaultOpen_3">Method 1</button>
    <button class="tablinks_3" onclick="openTab_3(event, 'Restore2')">Method 2</button>
    <button class="tablinks_3" onclick="openTab_3(event, 'Restore3')">Method 3</button>
  </div>

  <!-- Tab content -->
  <div id="Restore1" class="tabcontent_3">
    <p class="note-blue">
      If you've dumped the <code>homemenu.cia</code> file with GodMode9, follow this section.
    </p>

    <ol>
      <li>
        <p>Launch GodMode9.</p>
      </li>
      <li>
        <p>Go to <code>SDCARD:/gm9/out</code> and select the <code>homemenu.cia</code> file.</p>
      </li>
      <li>
        <p>Select <code>CIA image options...</code> → <code>Install game image</code>.</p>
      </li>
      <li>
        <p>Reboot the console.</p>
      </li>
    </ol>

    <p class="note-green">
      The Home Menu applet has been restored.
    </p>
  </div>

  <!-- Tab content -->
  <div id="Restore2" class="tabcontent_3">
    <p class="note-blue">
      If you've lost the <code>homemenu.cia</code> file from your SD Card and computer, follow this section.
      <br>
      The target system firmware version is <code>11.17.0-50</code>.
    </p>

    <ol>
      <li>
        <p>Download the original Home Menu applet:</p>
        <ul>
          <li>
            <a href="/files/3DS/HomeMenu_EUR.cia">EUR</a> |
            <a href="/files/3DS/HomeMenu_USA.cia">USA</a> |
            <a href="/files/3DS/HomeMenu_JPN.cia">JPN</a>
          </li>
        </ul>
      </li>
      <li>
        <p>Add the <code>HomeMenu_???.cia</code> file to the SD Card.</p>
      </li>
      <li>
        <p>Launch GodMode9.</p>
      </li>
      <li>
        <p>Browse and select the <code>HomeMenu_???.cia</code> file.</p>
      </li>
      <li>
        <p>Select <code>CIA image options...</code> → <code>Install game image</code>.</p>
      </li>
      <li>
        <p>Reboot the console.</p>
      </li>
    </ol>

    <p class="note-green">
      The Home Menu applet has been restored.
    </p>
  </div>

  <!-- Tab content -->
  <div id="Restore3" class="tabcontent_3">
    <p class="note-blue">
      Alternatively, download the system file for your system firmware version other than <code>11.17.0-50</code>.
    </p>

    <ol>
      <li>
        <p>
          Download
          <a href="https://github.com/wyatt8740/3DNUS" target="_blank">
          3DNUS</a>.
        </p>
      </li>
      <li>
        <p>Launch 3DNUS.</p>
      </li>
      <li>
        <p>Input your system’s current firmware version and region (ex: <code>11.15.0-47E</code>).</p>
      </li>
      <li>
        <p>Click “New 3DS” or “Old 3DS” for your 3DS system model.</p>
      </li>
      <li>
        <p>Click “Begin Download”, and wait for the download to complete.</p>
      </li>
      <li>
        <p>Enter the firmware folder and find the <code>.cia</code> file for Home Menu inside the <code>updates</code> folder.</p>
        <ul>
          <li>
            <p>EUR: <code>0004003000009802.cia</code></p>
          </li>
          <li>
            <p>USA: <code>0004003000008F02.cia</code></p>
          </li>
          <li>
            <p>JPN: <code>0004003000008202.cia</code></p>
          </li>
        </ul>
      </li>
      <li>
        <p>Rename the <code>000400300000??02.cia</code> file to <code>HomeMenu.cia</code>.</p>
      </li>
      <li>
        <p>Place it in the SD Card.</p>
      </li>
      <li>
        <p>Launch GodMode9.</p>
      </li>
      <li>
        <p>Browse and select the <code>HomeMenu.cia</code> file.</p>
      </li>
      <li>
        <p>Select <code>CIA image options...</code> → <code>Install game image</code>.</p>
      </li>
      <li>
        <p>Reboot the console.</p>
      </li>
    </ol>

    <p class="note-green">
      The Home Menu applet has been restored.
    </p>
  </div>
</div>


## Extra Stuff

### Home Menu Mods Made by Other People

- <a href="https://github.com/cooolgamer/Custom-Homemenu-3DS" target="_blank">
  Custom Homemenu 3DS by Cooolgamer</a>

- <a href="https://github.com/James-Makoto/3ds-battery-patches" target="_blank">
  3DS Battery Patches by James Makoto</a> - Show the battery percentage in the status bar
  and make the battery icon display each bar as 25% of battery charge.

- <a href="https://github.com/lividhen/HomeMenu_Custom" target="_blank">
  Fairly Simple Custom Home Menu by Lividhen</a>

- <a href="https://github.com/AromaKitsune/aromakitsune.github.io/issues/1#issuecomment-2540272922" target="_blank">
  Kitsune + Cooolgamer's Custom Home Menu</a> - 
  My Custom Home Menu UI with Coool's custom assets such as animations and dialogs

<p class="note-blue">
  These releases contain only the RomFS folder. Again, LayeredFS patching for applets is unstable, so crash may happen.
  It is recommended to compile a CIA file and install it so Home Menu doesn't crash.
  <br>
  <br>
  To build it as a CIA file, follow
  <a href="https://3ds.codeberg.page/homemenu/" target="_blank">
  derberg's 3DS Home Menu Customization Guide</a>
  for RomFS extraction (do not decompress all LZ files).
  After extracting, copy the mod's RomFS contents to <code>/HMRT/ExtractedRomFS</code> (overwrite all),
  launch HMRT and build a CIA file.
  Launch GodMode9, encrypt the compiled CIA file and install it.
</p>

<script src="/assets/js/gallery.js"></script>
<script src="/assets/js/tabs_0.js"></script>
<script src="/assets/js/tabs_1.js"></script>
<script src="/assets/js/tabs_2.js"></script>
<script src="/assets/js/tabs_3.js"></script>
<script src="/assets/js/tabs_fullwidth_0.js"></script>
<script src="/assets/js/tabs_fullwidth_1.js"></script>
