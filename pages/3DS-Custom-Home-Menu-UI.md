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

- Target system firmware version: `11.17.0-50`

- The system font is a separate system title. To install a custom font, [go here](/3DS-Custom-System-Fonts).

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

## Restoring the Home Menu UI (LayeredFS)

1. Launch the Luma3DS config by holding the `Select` button while booting.

2. Deactivate "Enable game patching".

3. Save and exit.

4. The Home Menu UI has been restored.

5. Go to `SD:\luma\titles` and delete the `000400300000??02` folder (optional).
- EUR: `0004003000009802`
- JPN: `0004003000008202`
- USA: `0004003000008F02`

---

## Backing up the Home Menu title (CIA)

ℹ️ Following this section is **recommended** as you'll be able to restore a Home Menu title if a custom Home Menu title is installed with the CIA file.

1. Launch GodMode9.

2. Press the `Home` button.

3. Select `Scripts...` → `GM9Megascript` → `Miscellaneous` → `Title Options` → `Dump HomeMenu to .cia`.

4. Proceed dumping this title.

5. Answer "No" when asked to decrypt the CIA file.

6. The `homemenu.cia` file is saved to `SD:\gm9\out`. Copy that file to your computer, keep it in a safe place.

## Installing a custom Home Menu title (CIA)

⚠️ Have a backed up `homemenu.cia` file before proceeding! If you bricked your OS, see the restore section below.

⚠️ Never uninstall CFW while any modded system titles are installed. It will result in an unbootable state and you'll need the [ntrboot](https://www.flashcarts.net/ds-quick-start-guide) DS flashcart to recover.

1. Download a custom Home Menu title (`.cia`) from above.

2. Add it to the SD Card.

3. Launch GodMode9.

4. Browse and select the CIA file.

5. Select `CIA image options...` → `Install game image`. CIA files are already encrypted, so there's no need to.

6. Reboot a 3DS.

7. A custom Home Menu UI has been installed.

## Restoring the Home Menu title (CIA) - Method 1

ℹ️ If you've dumped the `homemenu.cia` file with GodMode9, follow this section.

1. Launch GodMode9.

2. Go to `SDCARD/gm9/out` and select the `homemenu.cia` file.

3. Select `CIA image options...` → `Install game image`.

4. Reboot a 3DS.

5. The Home Menu UI has been restored.

## Restoring the Home Menu title (CIA) - Method 2

ℹ️ If you've lost the `homemenu.cia` file from your SD Card and computer, follow this section.

ℹ️ The target system firmware version is `11.17.0-50`.

1. Download an original Home Menu title: [EUR](/files/3DS/HomeMenu_EUR.cia) / [USA](/files/3DS/HomeMenu_USA.cia) / [JPN](/files/3DS/HomeMenu_JPN.cia)

2. Add the `HomeMenu_???.cia` file to the SD Card.

3. Launch GodMode9.

4. Browse and select the `HomeMenu_???.cia` file.

5. Select `CIA image options...` → `Install game image`.

6. Reboot a 3DS.

7. The Home Menu UI has been restored.

## Restoring the Home Menu title (CIA) - Method 3

ℹ️ If you've installed a custom Home Menu title to your system running on older/future firmware version without any backups, follow this section.

1. Go to [Darthsternie's Firmware Archive](https://darthsternie.net/3ds-firmwares/).

2. Download a firmware archive matching your system's region and current firmware version.
- If you don't know your system's current firmware version and can't boot to Home Menu:
- Launch GodMode9
- Go to `CTRNAND/title/000400db/????????/content`.
  - EUR: `00017102`
  - USA: `00017302`
  - JPN: `00017202`
- Select the `.app` file.
- Select `NCCH image options...` → `Mount image to drive`.
- Answer "Yes" to browse inside the `.app` file.
- Go to the `romfs` folder.
- Open the `titleversion.txt` file with hex editor or text viewer.
- Take a note of the firmware version.

3. Extract a firmware archive and find the `.cia` file for Home Menu inside the `updates` folder.
- EUR: `0004003000009802.cia`
- USA: `0004003000008F02.cia`
- JPN: `0004003000008202.cia`

4. Rename the `[TitleID].cia` file to `HomeMenu.cia`.

5. Place it in the SD Card.

6. Launch GodMode9.

7. Browse and select the `HomeMenu.cia` file.

8. Select `CIA image options...` → `Install game image`.

9. Reboot a 3DS.

10. The Home Menu UI has been restored.
