---
layout: page
title: 3DS - Custom System Fonts
permalink: /3DS-Custom-System-Fonts
---

Custom system-wide fonts for the Nintendo 3DS

[System Font Customization Guide](/3DS-System-Font-Customization)

---

## Pop Happiness

<div align="center"><p><img src="/images/3DS/Pop-Happiness-Font.png"/></p></div>

![](/images/Pop-Happiness-Font_1.png)

![](/images/Pop-Happiness-Font_2.png)

The youthful and dynamic design of the Gothic style allows this typeface to express "joy", a fundamental human emotion.
The straight lines and rounded corners embody a dynamic atmosphere.

<div align="right"><p><a href="https://fontworks.co.jp/fontsearch/pophappinessstd-eb/">Font designed by Fontworks</a></p></div>

**List of games that use this font:**
- Luigi's Mansion
- Super Mario Sunshine
- Super Mario Galaxy
- Super Mario Galaxy 2
- Hyperdimension Neptunia
- Hyperdimension Neptunia Mk2
- Kirby's Return to Dream Land / Adventure Wii
- Hyperdimension Neptunia Victory / Re;Birth3
- Mario Tennis Open
- Mario Kart Arcade GP DX
- Mario Golf: World Tour
- Pokémon Super Mystery Dungeon

[Download font for 3DS](/files/3DS/PopHappinessFont.cia)

[Download font for anything else (OTF)](/files/FOT-PopHappinessStd-EB.otf)

[Download font for anything else (TTF)](/files/PopHappinessStd-EB.ttf) - Edited to fix the glyphs' side-bearings

---

## Installing a custom font

<p class="note">
Creating a NAND backup is recommended when modifying any system titles.
Modifying the system font is safe and can be restored without NAND backups, but you should make one anyways.
If you bricked your console OS, see the restore section below.
</p>

<p class="warning">
Never uninstall CFW while any modded system titles are installed,
doing so will brick the console! You'll need the
<a href="https://www.flashcarts.net/ds-quick-start-guide">ntrboot</a>
DS flashcart to re-install B9S.<br/>
Modified system titles are not signed which they don't work on the original firmware, as the signature check fails.
To safely uninstall CFW, you must restore the system titles first.
</p>

1. Download a custom system font (`.cia`) from above.

2. Add it to the SD Card.

3. Launch GodMode9.

4. Browse and select the CIA file.

5. Select `CIA image options...` → `Install game image`.

    - CIA files are already encrypted, so there's no need to.

6. Reboot the console.

7. A custom font has been installed.

## Restoring the system font

1. Download an [original system font](/files/3DS/SystemFont.cia).

2. Add the `SystemFont.cia` file to the SD Card.

3. Launch GodMode9.

4. Browse and select the `SystemFont.cia` file.

5. Select `CIA image options...` → `Install game image`.

6. Reboot the console.

7. The system font has been restored.
