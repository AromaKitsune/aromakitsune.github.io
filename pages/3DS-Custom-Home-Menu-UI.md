---
layout: page
title: 3DS - Custom Home Menu UI
permalink: /3DS-Custom-Home-Menu-UI
---

The custom Home Menu UI for the Nintendo 3DS.

Check out the
[Home Menu UI Layout Customisation Guide](/3DS-Home-Menu-UI-Layout-Customization)
for creating your own custom Home Menu UI for 3DS!

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
        Installing the Mod</a>
      </p>
    </li>
    <li>
      <p>
        <a href="#uninstalling-the-mod">
        Uninstalling the Mod</a>
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

A customised Home Menu UI made by me.

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

<details class="expandable-details">
  <summary>
    <b>What's edited</b>
  </summary>
  <ul>
    <li>
      <p>Clock HUD moved to the top center of the top screen</p>
    </li>
    <li>
      <p>Green battery indicator icon</p>
    </li>
    <li>
      <p>
        Removed the connection bar and its texts (Internet, StreetPass, etc.),
        leaving only the signal indicator
      </p>
    </li>
    <li>
      <p>Date HUD moved to the bottom right corner of the top screen</p>
    </li>
    <li>
      <p>
        Play Coins count and steps count moved to the bottom left corner of the
        top screen
      </p>
    </li>
    <li>
      <p>Blue applet icons</p>
    </li>
    <li>
      <p>Slightly rotated applet and app icons</p>
    </li>
    <li>
      <p>Spinning cursor</p>
    </li>
    <li>
      <p>Removed the Miiverse applet icon (optional)</p>
    </li>
    <li>
      <p>Blue shutdown screen</p>
    </li>
  </ul>
</details>

Target system firmware version: `11.17.0-50`
<br>and future FW versions, unless major changes are made to Home Menu

The system font is a separate system file. To install a custom system font,
[go here](/3DS-Custom-System-Fonts).

Last updated: 2024-10-07

### Download Mod:

<!-- Tab links -->
<div class="tab_0">
  <button class="tablinks_0" onclick="openTab_0(event, 'Normal')" id="defaultOpen_0">Variant 1: Default</button>
  <button class="tablinks_0" onclick="openTab_0(event, 'NoMvs')">Variant 2: No Miiverse Applet</button>
</div>

<!-- Tab content -->
<div id="Normal" class="tabcontent_0">
  <a href="/files/3DS/Kitsune-CustomHomeMenuUI.zip">
    <button class="download-button-fullwidth">
      <i class="fa fa-download"></i> LayeredFS for 3DS console or Azahar Emulator
    </button> 
  </a>
  <a href="/files/3DS/Kitsune-CustomHomeMenuUI_EUR.cia">
    <button class="download-button-fullwidth">
      <img src="/assets/country-flags/EU.svg"> CIA File for 3DS console (EUR)
    </button> 
  </a>
  <a href="/files/3DS/Kitsune-CustomHomeMenuUI_USA.cia">
    <button class="download-button-fullwidth">
    <img src="/assets/country-flags/US.svg"> CIA File for 3DS console (USA)
    </button> 
  </a>
  <a href="/files/3DS/Kitsune-CustomHomeMenuUI_JPN.cia">
    <button class="download-button-fullwidth">
      <img src="/assets/country-flags/JP.svg"> CIA File for 3DS console (JPN)
    </button> 
  </a>
</div>

<!-- Tab content -->
<div id="NoMvs" class="tabcontent_0">
  <a href="/files/3DS/Kitsune-CustomHomeMenuUI_NoMvs.zip">
    <button class="download-button-fullwidth">
      <i class="fa fa-download"></i> LayeredFS for 3DS console or Azahar Emulator
    </button> 
  </a>
  <a href="/files/3DS/Kitsune-CustomHomeMenuUI_EUR_NoMvs.cia">
    <button class="download-button-fullwidth">
      <img src="/assets/country-flags/EU.svg"> CIA File for 3DS console (EUR)
    </button> 
  </a>
  <a href="/files/3DS/Kitsune-CustomHomeMenuUI_USA_NoMvs.cia">
    <button class="download-button-fullwidth">
      <img src="/assets/country-flags/US.svg"> CIA File for 3DS console (USA)
    </button> 
  </a>
  <a href="/files/3DS/Kitsune-CustomHomeMenuUI_JPN_NoMvs.cia">
    <button class="download-button-fullwidth">
      <img src="/assets/country-flags/JP.svg"> CIA File for 3DS console (JPN)
    </button> 
  </a>

  <div class="note-blue">
    <p>
      For those who don't want to use a Miiverse replacement service such as
      Pretendo Network's Juxtaposition
    </p>
  </div>
</div>


### Choose how you want to install the mod:

<!-- Tab links -->
<div class="tab_fullwidth_0">
  <button class="tablinks_fullwidth_0" onclick="openTab_fullwidth_0(event, 'LayeredFS_Install')" id="defaultOpen_fullwidth_0">SD Card File Redirection (LayeredFS)</button>
  <button class="tablinks_fullwidth_0" onclick="openTab_fullwidth_0(event, 'CIA_File_Install')">System File Replacement (CIA File)</button>
</div>

<!-- Tab content -->
<div id="LayeredFS_Install" class="tabcontent_fullwidth_0">
  <h2 id="adding-the-home-menu-applet-patch">
  Adding the Home Menu Applet Patch</h2>

  <!-- Tab links -->
  <div class="tab_1">
    <button class="tablinks_1" onclick="openTab_1(event, '3DS_Install')" id="defaultOpen_1">3DS</button>
    <button class="tablinks_1" onclick="openTab_1(event, 'Azahar_Install')">Azahar</button>
  </div>

  <!-- Tab content -->
  <div id="3DS_Install" class="tabcontent_1">
    <div class="note-blue">
      <p>
        Luma3DS custom firmware is required to use the mod.
        <a href="https://3ds.hacks.guide/" target="_blank">
        Install CFW if you haven't already.</a>
      </p>
    </div>

    <div class="note-blue">
      <p>
        LayeredFS is a Luma3DS feature that redirects games/apps assets to
        modded assets files in the SD Card without patching the ROMs or system
        files directly.
      </p>
    </div>

    <div class="note-yellow">
      <p>
        LayeredFS patching is unstable for system applets which causes Home Menu
        to crash. This happens when the Home Menu is opened 11 times total (by
        suspending a game or exiting an applet) after booting the system.
        <a href="https://github.com/LumaTeam/Luma3DS/issues/1954" target="_blank">
        Refer to this bug reported on the Luma3DS repo on GitHub.</a>
      </p>
      <p>
        If you open the Home Menu often, I recommend trying the experimental
        version of Luma3DS that fixes the LayeredFS issue, which can be
        <a href="/files/3DS/boot.firm">downloaded here</a>.
        Commit version:
        <a href="https://github.com/LumaTeam/Luma3DS/commit/a608ad82412eb9114b1fecc3411c14d270858154" target="_blank">
        a608ad8</a>
      </p>
      <p>
        Once the new Luma3DS version with this fix is officially released. Those
        patched CIA files here will be removed in the future.
      </p>
    </div>

    <ol>
      <li>
        <p>Unpack the downloaded archive file.</p>
      </li>
      <li>
        <p>Go to <code>/LayeredFS/[region]</code>.</p>
      </li>
      <li>
        <p>Copy the <code>luma</code> folder to the root of the SD Card.</p>
      </li>
      <li>
        <p>
          Boot the console while holding the <code>Select</code> button to
          launch Luma3DS configuration.
        </p>
      </li>
      <li>
        <p>Activate &quot;Enable game patching&quot;.</p>
      </li>
      <li>
        <p>Save and exit.</p>
      </li>
    </ol>

    <div class="note-green">
      <p>
        The custom Home Menu UI has been installed.
      </p>
    </div>
  </div>

  <!-- Tab content -->
  <div id="Azahar_Install" class="tabcontent_1">
    <p>
      You can also add the Home Menu applet patch to
      <a href="https://azahar-emu.org/" target="_blank">
      Azahar emulator</a>.
    </p>

    <div class="note-blue">
      <p>
        The system files need to be installed to a virtual NAND before
        continuing. Follow the instructions for 
        <a href="https://github.com/azahar-emu/ArticSetupTool" target="_blank">
        setting up system files</a> on an emulator. A real 3DS is required.
      </p>
    </div>

    <ol>
      <li>
        <p>Launch Azahar.</p>
      </li>
      <li>
        <p>Go to <code>File</code> → <code>Open Azahar Folder</code>.</p>
      </li>
      <li>
        <p>
          Go to <code>/load/mods</code>. Create folders if those don't exist.
        </p>
      </li>
      <li>
        <p>Unpack the downloaded archive file.</p>
      </li>
      <li>
        <p>Go to <code>/LayeredFS/[region]/luma/titles</code>.</p>
      </li>
      <li>
        <p>
          Copy the <code>000400300000??02</code> folder to the <code>mods</code>
          folder.
        </p>
      </li>
      <li>
        <p>
          Launch the Home Menu by going to <code>File</code> → <code>Boot Home
          Menu</code> → <code>EUR</code>/<code>USA</code>/<code>JPN</code>.
        </p>
      </li>
    </ol>

    <div class="note-green">
      <p>
        The custom Home Menu UI has been installed.
      </p>
    </div>
  </div>
</div>

<!-- Tab content -->
<div id="CIA_File_Install" class="tabcontent_fullwidth_0">
  <h2 id="backing-up-the-home-menu-applet">
  Backing Up the Home Menu Applet</h2>

  <div class="note-blue">
    <p>
      Luma3DS custom firmware is required to use the mod.
      <a href="https://3ds.hacks.guide/" target="_blank">
      Install CFW if you haven't already.</a>
    </p>
  </div>

  <div class="note-blue">
    <p>
      The Home Menu applet will be backed up to the SD card so if you modified
      the Home Menu applet, you can restore it.
    </p>
  </div>

  <ol>
    <li>
      <p>
        Boot the console while holding the <code>Start</code> button to launch
        GodMode9.
      </p>
    </li>
    <li>
      <p>Press the <code>Home</code> button.</p>
    </li>
    <li>
      <p>
        Select <code>Scripts...</code> → <code>GM9Megascript</code> →
        <code>Miscellaneous</code> → <code>Title Options</code> →
        <code>Dump HomeMenu to .cia</code>.
      </p>
    </li>
    <li>
      <p>Proceed dumping this system applet.</p>
    </li>
    <li>
      <p>
        If it asks you to decrypt the CIA file afterwards, select
        &quot;No&quot;.
      </p>
    </li>
  </ol>

  <div class="note-green">
    <p>
      The <code>homemenu.cia</code> file is saved to
      <code>SDCARD:/gm9/out</code>. Copy that file to a safe place in your
      computer.
    </p>
  </div>


  <h2 id="installing-the-custom-home-menu-applet">
  Installing the Custom Home Menu Applet</h2>

  <div class="note-blue">
    <p>
      Create a NAND backup before modifying any system files! Modifying the Home
      Menu applet is safe since Boot9Strap provides brick protection, allowing
      recovery with GodMode9. If you messed up and the Home Menu fails to
      launch, use GodMode9 to restore the Home Menu applet.
    </p>
  </div>

  <div class="note-red">
    <p>
      Never uninstall CFW while any modded system files are installed,
      doing so will remove Boot9Strap and <b>fully</b> brick the console!
      If you fully bricked your console, you'll need a
      <a href="https://www.flashcarts.net/ds-quick-start-guide" target="_blank">
      DS flashcart with ntrboot</a>
      to re-install Boot9Strap to unbrick your console.
    </p>
  </div>

  <details class="expandable-details">
    <summary>
      <b>System Update note</b>
    </summary>
    <p>
      System Update will fail while the custom Home Menu applet is installed.
      To update your system, you must restore the Home Menu applet back to its
      original state.
      <br>
      After a system update, backup the <code>homemenu.cia</code> file again in
      case the Home Menu is also updated.
    </p>
    <p>
      The current Home Menu mod is likely compatible with future system firmware
      versions. If this mod stops working, I will update the base Home Menu
      applet for this mod.
    </p>
  </details>

  <div class="note-blue">
    <p>
      The CIA file must be installed with GodMode9. Do not install it with FBI,
      the installation will fail as the Home Menu applet is being used by
      another process.
    </p>
    <p>
      GodMode9 v2.0.0 or above is required to install <code>.cia</code> files.
      Get the
      <a href="https://github.com/d0k3/GodMode9" target="_blank">
      latest version of GodMode9 here</a>.
    </p>
  </div>

  <ol>
    <li>
      <p>Add a downloaded CIA file to the SD Card.</p>
    </li>
    <li>
      <p>
        Boot the console while holding the <code>Start</code> button to launch
        GodMode9.
      </p>
    </li>
    <li>
      <p>Browse and select a CIA file.</p>
    </li>
    <li>
      <p>
        Select <code>CIA image options...</code> →
        <code>Install game image</code>.
      </p>
      <ul>
        <li>
          <p>
            CIA files downloaded from this page are already encrypted, so
            there's no need to re-encrypt it.
          </p>
        </li>
      </ul>
    </li>
    <li>
      <p>Reboot the console.</p>
    </li>
  </ol>

  <div class="note-green">
    <p>
      The custom Home Menu applet has been installed.
    </p>
  </div>
</div>


### Uninstalling the mod:

<!-- Tab links -->
<div class="tab_fullwidth_1">
  <button class="tablinks_fullwidth_1" onclick="openTab_fullwidth_1(event, 'LayeredFS_Uninstall')" id="defaultOpen_fullwidth_1">SD Card File Redirection (LayeredFS)</button>
  <button class="tablinks_fullwidth_1" onclick="openTab_fullwidth_1(event, 'CIA_File_Uninstall')">System File Replacement (CIA File)</button>
</div>

<!-- Tab content -->
<div id="LayeredFS_Uninstall" class="tabcontent_fullwidth_1">
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
        <p>
          Boot the console while holding the <code>Start</code> button to launch
          GodMode9.
        </p>
      </li>
      <li>
        <p>Go to <code>SDCARD:/luma/titles</code>.</p>
      </li>
      <li>
        <p>Delete or rename the <code>000400300000??02</code> folder:</p>
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

    <div class="note-green">
      <p>
        The Home Menu UI has been restored.
      </p>
    </div>
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
        <p>Delete or rename the <code>000400300000??02</code> folder:</p>
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
        <p>
          Launch the Home Menu by going to <code>File</code> → <code>Boot Home
          Menu</code> → <code>EUR</code>/<code>USA</code>/<code>JPN</code>.
        </p>
      </li>
    </ol>

    <div class="note-green">
      <p>
        The Home Menu UI has been restored.
      </p>
    </div>
  </div>
</div>

<!-- Tab content -->
<div id="CIA_File_Uninstall" class="tabcontent_fullwidth_1">
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
    <div class="note-blue">
      <p>
        If you've dumped the <code>homemenu.cia</code> file with GodMode9,
        follow this section.
      </p>
    </div>

    <ol>
      <li>
        <p>
          Boot the console while holding the <code>Start</code> button to launch
          GodMode9.
        </p>
      </li>
      <li>
        <p>
          Go to <code>SDCARD:/gm9/out</code> and select a
          <code>homemenu.cia</code> file.
        </p>
      </li>
      <li>
        <p>
          Select <code>CIA image options...</code> →
          <code>Install game image</code>.
        </p>
      </li>
      <li>
        <p>Reboot the console.</p>
      </li>
    </ol>

    <div class="note-green">
      <p>
        The Home Menu applet has been restored.
      </p>
    </div>
  </div>

  <!-- Tab content -->
  <div id="Restore2" class="tabcontent_3">
    <div class="note-blue">
      <p>
        If you've lost the <code>homemenu.cia</code> file from your SD Card and
        computer, follow this section.
        <br>
        The target system firmware version is <code>11.17.0-50</code>.
      </p>
    </div>

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
        <p>Add a <code>HomeMenu_[region].cia</code> file to the SD Card.</p>
      </li>
      <li>
        <p>
          Boot the console while holding the <code>Start</code> button to launch
          GodMode9.
        </p>
      </li>
      <li>
        <p>Browse and select a <code>HomeMenu_[region].cia</code> file.</p>
      </li>
      <li>
        <p>
          Select <code>CIA image options...</code> →
          <code>Install game image</code>.
        </p>
      </li>
      <li>
        <p>Reboot the console.</p>
      </li>
    </ol>

    <div class="note-green">
      <p>
        The Home Menu applet has been restored.
      </p>
    </div>
  </div>

  <!-- Tab content -->
  <div id="Restore3" class="tabcontent_3">
    <div class="note-blue">
      <p>
        Alternatively, download the system file for your system firmware version
        other than <code>11.17.0-50</code>.
      </p>
    </div>

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
        <p>
          Input your system's current firmware version and region (ex:
          <code>11.15.0-47E</code>).
        </p>
      </li>
      <li>
        <p>
          Click &quot;New 3DS&quot; or &quot;Old 3DS&quot; for your 3DS system
          model.
        </p>
      </li>
      <li>
        <p>
          Click &quot;Begin Download&quot;, and wait for the download to
          complete.
        </p>
      </li>
      <li>
        <p>
          Go to <code>/[firmware]/updates</code> and find the <code>.cia</code>
          file for Home Menu:
        </p>
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
        <p>
          Rename the <code>000400300000??02.cia</code> file to
          <code>HomeMenu.cia</code>.
        </p>
      </li>
      <li>
        <p>Place it in the SD Card.</p>
      </li>
      <li>
        <p>
          Boot the console while holding the <code>Start</code> button to launch
          GodMode9.
        </p>
      </li>
      <li>
        <p>Browse and select a <code>HomeMenu.cia</code> file.</p>
      </li>
      <li>
        <p>
          Select <code>CIA image options...</code> →
          <code>Install game image</code>.
        </p>
      </li>
      <li>
        <p>Reboot the console.</p>
      </li>
    </ol>

    <div class="note-green">
      <p>
        The Home Menu applet has been restored.
      </p>
    </div>
  </div>
</div>


## Extra Stuff

### Home Menu Mods Made by Other People

- <a href="https://github.com/cooolgamer/Custom-Homemenu-3DS" target="_blank">
  Custom Homemenu 3DS by Cooolgamer</a>

- <a href="https://github.com/R-YaTian/3ds-battery-patches" target="_blank">
  3DS Battery Patches by R-YaTian</a> - Show the battery percentage in the
  status bar and have the battery icon bars divided in 25% chunks.

- <a href="https://github.com/lividhen/HomeMenu_Custom" target="_blank">
  Fairly Simple Custom Home Menu by Lividhen</a>

- <a href="https://github.com/AromaKitsune/aromakitsune.github.io/discussions/3#discussioncomment-13598964" target="_blank">
  Kitsune + Cooolgamer's Custom Home Menu by Misteryesman</a> - My Custom Home
  Menu UI combined with Coool's custom assets such as animations and dialogs

<div class="note-blue">
  <p>
    These releases contain only the RomFS folder. Again, LayeredFS patching for
    applets is unstable, Home Menu crashes if the Home Menu is opened 11 times
    total after booting the system.
  <p>
  </p>
    It is recommended to compile a CIA file and install it so Home Menu doesn't
    crash.
  </p>
</div>

<details class="expandable-details">
  <summary>
    <b>Compiling a CIA file</b>
  </summary>
  <ol>
    <li>
      <p>
        Follow
        <a href="https://3ds.codeberg.page/homemenu/" target="_blank">
        derberg's 3DS Home Menu Customization Guide</a>,
        sections 1 and 2 for RomFS extraction. On section 2, step 6, launch the
        Home Menu Rebuilding Tool and extract the RomFS assets, but don't
        decompress all LZ files too.
      </p>
    </li>
    <li>
      <p>
        After extracting, copy the mod's RomFS contents to
        <code>/HMRT/ExtractedRomFS</code> (overwrite all).
      </p>
      <ul>
        <li>
          <p>For ExeFS:</p>
        </li>
        <li>
          <p><code>code.bin</code> goes to <code>/HMRT/ExtractedExeFS</code></p>
        </li>
        <li>
          <p>
            <code>exheader.bin</code> renamed as
            <code>DecryptedExHeader.bin</code> goes to <code>/HMRT/HMRT</code>
          </p>
        </li>
        <div class="note-blue-nested">
          <p>
            Instead of <code>code.bin</code>, the <code>code.ips</code> file is
            provided and you must patch your original <code>code.bin</code> file
            with
            <a href="https://fusoya.eludevisibility.org/lips/" target="_blank">
            Lunar IPS</a>.
          </p>
          <ol>
            <li>
              <p>Launch Lunar IPS.</p>
            </li>
            <li>
              <p>Click "Apply IPS Patch".</p>
            </li>
            <li>
              <p>Select a <code>code.ips</code> file and click "Open".</p>
            </li>
            <li>
              <p>
                Click the "Most Common ROM Files" combo-box and select "All
                Files".
              </p>
            </li>
            <li>
              <p>
                Select an original <code>code.bin</code> file and click "Open"
                to patch it.
              </p>
            </li>
            <li>
              <p>
                Copy the patched <code>code.bin</code> file to
                <code>/HMRT/ExtractedExeFS</code>.
              </p>
            </li>
          </ol>
        </div>
      </ul>
    </li>
    <li>
      <p>Launch HMRT and build a CIA file.</p>
    </li>
    <li>
      <p>Add a CIA file to the SD card.</p>
    </li>
    <li>
      <p>
        Boot the console while holding the <code>Start</code> button to launch
        GodMode9.
      </p>
    </li>
    <li>
      <p>Browse and select a compiled CIA file.</p>
    </li>
    <li>
      <p>
        Select <code>CIA image options...</code> → <code>Encrypt file</code> →
        <code>Encrypt inplace</code>.
      </p>
    </li>
    <li>
      <p>Select an encrypted CIA file again.</p>
    </li>
    <li>
      <p>
        Select <code>CIA image options...</code> →
        <code>Install game image</code>.
      </p>
    </li>
    <li>
      <p>Reboot the console.</p>
    </li>
  </ol>
</details>

<script src="/assets/js/gallery.js"></script>
<script src="/assets/js/tabs_0.js"></script>
<script src="/assets/js/tabs_1.js"></script>
<script src="/assets/js/tabs_2.js"></script>
<script src="/assets/js/tabs_3.js"></script>
<script src="/assets/js/tabs_fullwidth_0.js"></script>
<script src="/assets/js/tabs_fullwidth_1.js"></script>
