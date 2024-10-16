---
layout: page
title: 3DS - Custom System Fonts
permalink: /3DS-Custom-System-Fonts
---

A variety of custom system-wide fonts for the Nintendo 3DS.

Check out the
[System Font Customization Guide](/3DS-System-Font-Customization)
for creating your own custom system font for 3DS!

---

### Table of Contents:

- [Pop Happiness Font](#pop-happiness)

- [Pop Joy Font](#pop-joy)

- [Installing the Custom System Font to 3DS / Lime3DS](#installing-the-custom-system-font)

- [Restoring the System Font](#restoring-the-system-font)

- [Some screenshots of games officially using those fonts](#screenshots)


## Pop Happiness

Pop Happiness (Popハッピネス) is a Point of Purchase typeface
<a href="https://fontworks.co.jp/fontsearch/pophappinessstd-eb/" target="_blank">
designed by Fontworks</a>.

It is used for the UI in many Nintendo games. It is also used for the tutorial sections in Hyperdimension Neptunia games for the PlayStation 3.

<div align="center">
  <p class="image">
    <img src="/images/3DS/Pop-Happiness-Font.png">
    <br><br>
    <img src="/images/Pop-Happiness-Font_1.png">
    <br><br>
    <img src="/images/Pop-Happiness-Font_2.png">
  </p>
</div>

### List of Games Using this Font for the UI:
- Luigi's Mansion
- Super Mario Sunshine
- Mario Golf: Toadstool Tour
- Super Mario Galaxy
- Super Mario Galaxy 2
- Hyperdimension Neptunia
- Hyperdimension Neptunia mk2
- Kirby's Return to Dream Land / Adventure Wii
- Mario Tennis Open
- Hyperdimension Neptunia Victory / Re;Birth3: V Generation
- Pokémon Mystery Dungeon: Gates to Infinity
- Mario Kart Arcade GP DX
- Mario Golf: World Tour
- Pokémon Super Mystery Dungeon
- <a href="https://www.mariowiki.com/List_of_fonts#Pop_Happiness" target="_blank">
  Complete list of Mario related games using this font</a>

### Download Font:

- [CIA - for 3DS](/files/3DS/PopHappinessFont.cia)

- [OTF - for anything else](/files/FOT-PopHappinessStd-EB.otf)

- [TTF - for anything else](/files/PopHappinessStd-EB.ttf) (Fixed side-bearings)

<details>
  <summary>
    <b>Side-bearings Notes</b>
  </summary>
  <p class="note-blue">
    Fixed the side-bearings (spacing) for Greek glyphs, Cyrillic glyphs,
    <br>
    and the following glyphs: <code>° ´ ‘ ’ “ ” ′ ″</code>
    <br>
    This fix is included in the 3DS system font.
  </p>
</details>


## Pop Joy

Pop Joy (Popジョイ) is a rounded Point of Purchase typeface
<a href="https://fontworks.co.jp/fontsearch/popjoystd-b/" target="_blank">
designed by Fontworks</a>.

It is commonly used for the UI in Paper Mario games.

<div align="center">
  <p class="image">
    <img src="/images/3DS/Pop-Joy-Font.png">
    <br><br>
    <img src="/images/Pop-Joy-Font_1.png">
    <br><br>
    <img src="/images/Pop-Joy-Font_2.png">
  </p>
</div>

### List of Games Using this Font for the UI:
- Dr. Mario 64
- Mario Golf: Toadstool Tour
- Paper Mario: The Thousand-Year Door
- Super Paper Mario
- Donkey Kong: Jungle Climber
- Hyperdimension Neptunia Victory
- Paper Mario: Sticker Star
- Paper Mario: Color Splash
- Paper Mario: The Origami King
- <a href="https://www.mariowiki.com/List_of_fonts#Pop_Joy" target="_blank">
  Complete list of Mario related games using this font</a>

### Download Font:

- [CIA - for 3DS](/files/3DS/PopJoyFont.cia)

- [OTF - for anything else](/files/FOT-PopJoyStd-B.otf)

- [TTF - for anything else](/files/PopJoyStd-B.ttf) (Fixed side-bearings)

- [TTF - for anything else](/files/PopJoyStd-B_Scaled.ttf) (Fixed side-bearings + Scaled)

<details>
  <summary>
    <b>Side-bearings Notes</b>
  </summary>
  <p class="note-blue">
    Fixed the side-bearings (spacing) for Greek glyphs, Cyrillic glyphs,
    <br>
    and the following glyphs: <code>° ´ ‘ ’ “ ” ′ ″</code>
    <br>
    <br>
    The glyphs' horizontal scale has been adjusted to be less wider.
    <br>
    Both tweaks are included in the 3DS system font to avoid text clipping/wrapping.
  </p>
</details>


## Installing the Custom System Font

<!-- Tab links -->
<div class="tab_0">
  <button class="tablinks_0" onclick="openTab_0(event, '3DS-inst')" id="defaultOpen_0">3DS</button>
  <button class="tablinks_0" onclick="openTab_0(event, 'Lime3DS-inst')">Lime3DS</button>
</div>

<!-- Tab content -->
<div id="3DS-inst" class="tabcontent_0">
  <p>
    Luma3DS custom firmware is required to use the mod.
    <a href="https://3ds.hacks.guide/" target="_blank">
    Install CFW if you haven't already.</a>
  </p>

  <p class="note-info">
    Create a NAND backup before modifying any system files!
    <br>
    Modifying the system font is safe and can be restored by re-installing the original system font, instead of restoring a NAND backup.
    <br>
    To restore the system font, see the
    <a href="#restoring-the-system-font">
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
        <li>CIA files are encrypted by default, so there’s no need to re-encrypt it.</li>
      </ul>
    </li>
    <li>
      <p>Reboot the console.</p>
    </li>
  </ol>

  <p class="note-green">
    The custom system font has been installed.
  </p>
</div>

<!-- Tab content -->
<div id="Lime3DS-inst" class="tabcontent_0">
  <p>
    You can also install the custom system font to
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
      <p>Go to <code>File</code> → <code>Install CIA...</code>.</p>
    </li>
    <li>
      <p>Select the downloaded CIA file.</p>
    </li>
    <li>
      <p>Launch the Home Menu by going to <code>File</code> → <code>Boot Home Menu</code> → <code>EUR</code>/<code>USA</code>/<code>JPN</code>.</p>
    </li>
  </ol>

  <p class="note-green">
    The custom system font has been installed.
  </p>
</div>

## Restoring the System Font

<!-- Tab links -->
<div class="tab_1">
  <button class="tablinks_1" onclick="openTab_1(event, '3DS-uninst')" id="defaultOpen_1">3DS</button>
  <button class="tablinks_1" onclick="openTab_1(event, 'Lime3DS-uninst')">Lime3DS</button>
</div>

<!-- Tab content -->
<div id="3DS-uninst" class="tabcontent_1">
  <ol>
    <li>
      <p>Download the <a href="/files/3DS/SystemFont.cia">original system font</a>.</p>
    </li>
    <li>
      <p>Add the <code>SystemFont.cia</code> file to the SD Card.</p>
    </li>
    <li>
      <p>Launch GodMode9.</p>
    </li>
    <li>
      <p>Browse and select the <code>SystemFont.cia</code> file.</p>
    </li>
    <li>
      <p>Select <code>CIA image options...</code> → <code>Install game image</code>.</p>
    </li>
    <li>
      <p>Reboot the console.</p>
    </li>
  </ol>

  <p class="note-green">
    The system font has been restored.
  </p>
</div>

<!-- Tab content -->
<div id="Lime3DS-uninst" class="tabcontent_1">
  <ol>
    <li>
      <p>Download the <a href="/files/3DS/SystemFont.cia">original system font</a>.</p>
    </li>
    <li>
      <p>Launch Lime3DS.</p>
    </li>
    <li>
      <p>Go to <code>File</code> → <code>Install CIA...</code>.</p>
    </li>
    <li>
      <p>Select the <code>SystemFont.cia</code> file.</p>
    </li>
    <li>
      <p>Launch the Home Menu by going to <code>File</code> → <code>Boot Home Menu</code> → <code>EUR</code>/<code>USA</code>/<code>JPN</code>.</p>
    </li>
  </ol>

  <p class="note-green">
    The system font has been restored.
  </p>
</div>


## Screenshots

Some screenshots of games officially using those fonts.

<div align="center">
  <small>
    Click any of the screenshots below for full view.
  </small>
</div>

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

<div align="center">
  <p class="image">
    <a href="/images/Hyperdimension-Neptunia-Victory_Teach-Me-Histy.png">
      <img src="/images/Hyperdimension-Neptunia-Victory_Teach-Me-Histy.png">
    </a>
    <br>
    Hyperdimension Neptunia Victory / Re;Birth3: V Generation
    <br>
    Pop Happiness font used for the "Teach Me, Histy!" display text, it is shown each time a tutorial is unlocked.
    <br>
    <small>
      Screenshot taken with RPCS3 emulator (Victory)
    </small>
  </p>
</div>

<div align="center">
  <p class="image">
    <a href="/images/Paper-Mario-The-Thousand-Year-Door_Dialogue.png">
      <img src="/images/Paper-Mario-The-Thousand-Year-Door_Dialogue.png">
    </a>
    <br>
    Paper Mario: The Thousand-Year Door
    <br>
    Pop Joy font used for the UI.
    <br>
    <small>
      Screenshot taken with Dolphin Emulator
    </small>
  </p>
</div>

<div align="center">
  <p class="image">
    <a href="/images/Hyperdimension-Neptunia-Victory_Tutorial.png">
      <img src="/images/Hyperdimension-Neptunia-Victory_Tutorial.png">
    </a>
    <br>
    Hyperdimension Neptunia Victory
    <br>
    Pop Joy font used for the tutorial sections.
    <br>
    <small>
      Screenshot taken with RPCS3 emulator
    </small>
  </p>
</div>

<div align="center">
  <p class="image">
    <a href="/images/Paper-Mario-Color-Splash_Dialogue.png">
      <img src="/images/Paper-Mario-Color-Splash_Dialogue.png">
    </a>
    <br>
    Paper Mario: Color Splash
    <br>
    Pop Joy font used for the UI.
    <br>
    <small>
      Screenshot taken with Cemu emulator
    </small>
  </p>
</div>

<div align="center">
  <p class="image">
    <a href="/images/Paper-Mario-The-Origami-King_Dialogue.png">
      <img src="/images/Paper-Mario-The-Origami-King_Dialogue.png">
    </a>
    <br>
    Paper Mario: The Origami King
    <br>
    Pop Joy font used for the UI.
    <br>
    <small>
      Screenshot taken with Ryujinx emulator
    </small>
  </p>
</div>

<script src="/assets/js/tabs_0.js"></script>
<script src="/assets/js/tabs_1.js"></script>
