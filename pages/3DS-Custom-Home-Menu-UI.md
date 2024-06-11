---
layout: page
title: 3DS - Custom Home Menu UI
permalink: /3DS-Custom-Home-Menu-UI
---

Custom Home Menu UI for the Nintendo 3DS

---

## Kitsune's Custom Home Menu UI

<div align="center"><p><img src="/images/3DS/3DS-Custom-Home-Menu-UI_1.gif"/></p></div>

<div align="center"><p><img src="/images/3DS/3DS-Custom-Home-Menu-UI_2.png"/></p></div>

[Download - LayeredFS](/files/3DS/Kitsune-CustomHomeMenuUI.zip)

[Download - EUR](/files/3DS/Kitsune-CustomHomeMenuUI_EUR.cia)

[Download - USA](/files/3DS/Kitsune-CustomHomeMenuUI_USA.cia)

[Download - JPN](/files/3DS/Kitsune-CustomHomeMenuUI_JPN.cia)

- A system font is a separate system title. To install a custom font, [go here](/3DS-Custom-System-Fonts).

---

## Installing a custom Home Menu UI (LayeredFS)

ℹ️ Luma3DS's applet patching is unstable and causes Home Menu to randomly crash if Home Menu is opened several times. Consider using the CIA file method for now.

1. Download a custom Home Menu UI (`.zip`) from above.

2. Extract the zip file and enter the `LayeredFS` folder.

3. Choose the region folder that matches your 3DS region.

4. Copy the `luma` folder to the root of the SD Card.

5. Launch the Luma3DS config by holding the `Select` button while booting.

6. Activate "Enable game patching".

7. Save and exit.

8. A custom Home Menu UI has been installed.

## Restoring a Home Menu UI (LayeredFS)

1. Launch the Luma3DS config by holding the `Select` button while booting.

2. Deactivate "Enable game patching".

3. Save and exit.

4. A Home Menu UI has been restored.

5. Go to `SD:\luma\titles` and delete the `000400300000??02` folder (optional).
- EUR: `0004003000009802`
- JPN: `0004003000008202`
- USA: `0004003000008F02`

---

## Installing a custom Home Menu UI (CIA)

⚠️ Make a NAND backup before proceeding! If you bricked your OS, see the restore section below.

⚠️ Never uninstall CFW while any modded system titles are installed. It will result in an unbootable state and you'll need the [ntrboot](https://www.flashcarts.net/ds-quick-start-guide) DS flashcart to recover.

1. Download a custom Home Menu title (`.cia`) from above.

2. Add it to the SD Card.

3. Launch GodMode9.

4. Browse and select the CIA file.

5. Select `CIA image options...` → `Install game image`. CIA files are already encrypted, so there's no need to.

6. Reboot a 3DS.

7. A custom Home Menu UI has been installed.

## Restoring a Home Menu UI (CIA)

1. Download the original Home Menu title: [EUR](/files/3DS/HomeMenu_EUR.cia) / [USA](/files/3DS/HomeMenu_USA.cia) / [JPN](/files/3DS/HomeMenu_JPN.cia)

2. Add the `HomeMenu_???.cia` file to the SD Card.

1. Launch GodMode9.

3. Browse and select the `HomeMenu_???.cia` file.

4. Select `CIA image options...` → `Install game image`.

5. Reboot a 3DS.

6. A Home Menu UI has been restored.
