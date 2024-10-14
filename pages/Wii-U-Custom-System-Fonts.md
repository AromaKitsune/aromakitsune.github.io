---
layout: page
title: Wii U - Custom System Fonts
permalink: /Wii-U-Custom-System-Fonts
---

A variety of custom system-wide fonts for the Wii U.

Check out the
[System Font Customization Guide](/Wii-U-System-Font-Customization)
for creating your own custom system font for Wii U!

---

### Table of Contents:

- [Pop Happiness Font](#pop-happiness)

- [Pop Joy Font](#pop-joy)

- [Installing the Custom System Font to Wii U / Cemu](#installing-the-custom-system-font)

- [Restoring the System Font](#restoring-the-system-font)

- [Some screenshots of games officially using those fonts](#screenshots)


## Pop Happiness

Pop Happiness (Popハッピネス) is a Point of Purchase typeface
<a href="https://fontworks.co.jp/fontsearch/pophappinessstd-eb/" target="_blank">
designed by Fontworks</a>.

It is used for the UI in many Nintendo games. It is also used for the tutorial sections in Hyperdimension Neptunia games for the PlayStation 3.

<div align="center">
  <p class="image">
    <img src="/images/Wii-U/Pop-Happiness-Font.png">
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
    Complete list of Mario related games using this font
  </a>

### Download Font:

- [TTF - for Wii U](/files/Wii-U/PopHappiness.ttf)

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
    This fix is included in the Wii U system font.
  </p>
</details>


## Pop Joy

Pop Joy (Popジョイ) is a rounded Point of Purchase typeface
<a href="https://fontworks.co.jp/fontsearch/popjoystd-b/" target="_blank">
designed by Fontworks</a>.

It is commonly used for the UI in Paper Mario games.

<div align="center">
  <p class="image">
    <img src="/images/Wii-U/Pop-Joy-Font.png">
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
    Complete list of Mario related games using this font
  </a>

### Download Font:

- [TTF - for Wii U](/files/Wii-U/PopJoy.ttf)

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
    Both tweaks are included in the Wii U system font to avoid text clipping/wrapping.
  </p>
</details>


## Installing the Custom System Font

<!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'Wii-U-inst')" id="defaultOpen">Wii U</button>
  <button class="tablinks" onclick="openTab(event, 'Cemu-inst')">Cemu</button>
</div>

<!-- Tab content -->
<div id="Wii-U-inst" class="tabcontent">
  <p>
    Aroma custom firmware is required to use the mod.
    <a href="https://wiiu.hacks.guide/" target="_blank">
    Install CFW if you haven't already.</a>
  </p>

  <p class="note-blue">
    No system files are modified in the process. The custom system font is loaded into RAM only.
  </p>

  <ol>
    <li>
      <p>Download the
        <a href="https://github.com/dkosmari/System-Font-Replacer" target="_blank">
        System Font Replacer plugin</a>.
      </p>
    </li>
    <li>
      <p>Add the downloaded font file to <code>SDCARD:/wiiu/fonts</code>.</p>
    </li>
    <li>
      <p>Open the Plugin menu (<code>L + D-Pad ↓ + Select</code>).</p>
    </li>
    <li>
      <p>Go to System Font Replacer.</p>
    </li>
    <li>
      <p>Activate this plugin.</p>
    </li>
    <li>
      <p>Select the downloaded font file for Standard font.</p>
    </li>
    <li>
      <p>Disable <code>Use custom fonts only for Wii U Menu</code> to apply the font system-wide.</p>
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
<div id="Cemu-inst" class="tabcontent">
  <p>
    You can also install the custom system font to
    <a href="https://cemu.info/" target="_blank">
    Cemu emulator</a>.
  </p>

  <p class="note-blue">
    The font files in <code>/Cemu/resources/sharedFonts</code> are replacement system fonts
    which are used if the real system fonts don't exist in a virtual MLC NAND.
    <br>
    Do not add the custom/real system fonts to this folder,
    as those added fonts will be overwritten with replacement ones after Cemu updates.
    <br>
    Instead, the custom/real system fonts should be added to a virtual MLC NAND.
  </p>

  <ol>
    <li>
      <p>Rename the downloaded font file to <code>CafeStd.ttf</code>.</p>
    </li>
    <li>
      <p>Launch Cemu.</p>
    </li>
    <li>
      <p>Go to <code>File</code> → <code>Open MLC folder</code>.</p>
    </li>
    <li>
      <p>Navigate to <code>/sys/title/0005001b/10042400/content</code>. Create folders if those don’t exist.</p>
    </li>
    <li>
      <p>Add the <code>CafeStd.ttf</code> file here.</p>
    </li>
    <li>
      <p>Launch any of the system apps (if installed) and see how the custom system font looks.</p>
    </li>
  </ol>

  <p class="note-green">
    The custom system font has been installed.
  </p>
</div>


## Restoring the System Font

<!-- Tab links -->
<div class="tab2">
  <button class="tablinks2" onclick="openTab2(event, 'Wii-U-uninst')" id="defaultOpen2">Wii U</button>
  <button class="tablinks2" onclick="openTab2(event, 'Cemu-uninst')">Cemu</button>
</div>

<!-- Tab content -->
<div id="Wii-U-uninst" class="tabcontent2">
  <ol>
    <li>
      <p>Open the Plugin menu (<code class="language-plaintext highlighter-rouge">L + D-Pad ↓ + Select</code>).</p>
    </li>
    <li>
      <p>Turn off this plugin.</p>
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
<div id="Cemu-uninst" class="tabcontent2">
  <ol>
    <li>
      <p>Launch Cemu.</p>
    </li>
    <li>
      <p>Go to <code>File</code> → <code>Open MLC folder</code>.</p>
    </li>
    <li>
      <p>Navigate to <code>/sys/title/0005001b/10042400/content</code>.</p>
    </li>
    <li>
      <p>Delete or rename the <code>CafeStd.ttf</code> file.</p>
    </li>
    <li>
      <p>Launch any of the system apps (if installed) and see how the original system font looks.</p>
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
    Hyperdimension Neptunia Victory Re;Birth3: V Generation
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

<script src="/assets/tabs.js"></script>
<script src="/assets/tabs2.js"></script>
