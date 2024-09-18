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

**Table of Contents:**

- [Pop Happiness Font](#pop-happiness)

- [Pop Joy Font](#pop-joy)

- [Installing the Custom System Font to Wii U](#installing-the-custom-system-font-to-wii-u)

- [Installing the Custom System Font to Cemu](#installing-the-custom-system-font-to-cemu)

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

**List of Games Using this Font for the UI:**
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

**Download Font:**

- [TTF - for Wii U](/files/Wii-U/PopHappiness.ttf)

- [OTF - for anything else](/files/FOT-PopHappinessStd-EB.otf)

- [TTF - for anything else](/files/PopHappinessStd-EB.ttf) (Fixed side-bearings) \*

<details>
  <summary>
    <b>Side-bearings Notes</b>
  </summary>
  <p class="mini-note">
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

**List of Games Using this Font for the UI:**
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

**Download Font:**

- [TTF - for Wii U](/files/Wii-U/PopJoy.ttf)

- [OTF - for anything else](/files/FOT-PopJoyStd-B.otf)

- [TTF - for anything else](/files/PopJoyStd-B.ttf) (Fixed side-bearings) ¹

- [TTF - for anything else](/files/PopJoyStd-B_Scaled.ttf) (Fixed side-bearings + Scaled) ²

<details>
  <summary>
    <b>Side-bearings Notes</b>
  </summary>
  <p class="mini-note">
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


## Installing the Custom System Font to Wii U

Aroma custom firmware is required to use the mod.
<a href="https://wiiu.hacks.guide/" target="_blank">
Install CFW if you haven't already.</a>

No system files are modified in the process. The custom system font is loaded into RAM only.

1.  Download the <a href="https://github.com/dkosmari/System-Font-Replacer" target="_blank">
    System Font Replacer plugin</a>.

2.  Add the downloaded font file to `SDCARD:/wiiu/fonts`.

3.  Open the Plugin menu (`L + D-Pad ↓ + Select`).

4.  Go to System Font Replacer.

5.  Select the downloaded font file for Standard font.

6.  Disable `Use custom fonts only for Wii U Menu` to apply the font system-wide.

7.  Reboot the console.

8.  The custom system font has been installed.


## Installing the Custom System Font to Cemu

You can also install the custom system font to <a href="https://cemu.info/" target="_blank">
Cemu emulator</a>.

1.  Rename the downloaded font file to `CafeStd.ttf`.

2.  Launch Cemu.

3.  Go to `File` → `Open MLC folder`.

4.  Navigate to `/sys/title/0005001b/10042400/content`. Create folders if those don't exist.

5.  Add the `CafeStd.ttf` file here.

6.  Launch any of the system apps (if installed) and see how the custom system font looks.

<p class="note">
  Do not add the <code>CafeStd.ttf</code> file to <code>/Cemu/resources/sharedFonts</code>,
  those are replacement system fonts which are used if the real system fonts don't exist.
  <br>
  Any custom/real system font files placed in this folder will be overwritten with replacement ones after Cemu updates.
</p>


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
