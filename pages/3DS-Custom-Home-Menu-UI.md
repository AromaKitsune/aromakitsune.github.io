---
layout: page
title: 3DS - Custom Home Menu UI
permalink: /3DS-Custom-Home-Menu-UI
---

Custom Home Menu UI for the Nintendo 3DS

[Home Menu Customization Guide (by derberg)](https://3ds.codeberg.page/homemenu/)

[Home Menu UI Layout Customization Guide (BCLYT edit)](/3DS-Home-Menu-UI-Layout-Customization)

---

## Kitsune's Custom Home Menu UI

<div align="center"><p><img src="/images/3DS/3DS-Custom-Home-Menu-UI_1.gif"/></p></div>

<div align="center"><p><img src="/images/3DS/3DS-Custom-Home-Menu-UI_2.png"/></p></div>

Target system firmware version: `11.17.0-50`

The system font is a separate system title. To install the custom system font, [go here](/3DS-Custom-System-Fonts).

Last updated: 2024-05-23

**Download mod:**

- [LayeredFS](/files/3DS/Kitsune-CustomHomeMenuUI.zip)

- [CIA - for EUR console](/files/3DS/Kitsune-CustomHomeMenuUI_EUR.cia)

- [CIA - for USA console](/files/3DS/Kitsune-CustomHomeMenuUI_USA.cia)

- [CIA - for JPN console](/files/3DS/Kitsune-CustomHomeMenuUI_JPN.cia)

---

## Installation Method 1: LayeredFS

## Adding the Home Menu Applet Patch

<p class="note">
LayeredFS patching is unstable for applets which causes Home Menu to randomly crash if Home Menu is opened several times 
(by suspending a game or exiting an applet).
<br/>
<a href="#installation-method-2-cia-file">Consider using the CIA file method for now.</a>
<br/>
LayeredFS method can be used on Citra emulator without any crashes.
<br/><br/>
You can add my RomFS assets to your Home Menu mod, be sure to credit me if you're gonna share your combined mod anywhere :)
</p>

1. Download the custom Home Menu UI (`.zip`) from above.

2. Extract the zip file and enter the `LayeredFS` folder.

3. Enter a folder matching your console region.

4. Copy the `luma` folder to the root of the SD Card.

    - For Citra: Copy the `romfs` folder to `Citra/load/mods/000400300000??02/`.

5. Launch the Luma3DS config by holding the `Select` button while booting.

6. Activate "Enable game patching".

7. Save and exit.

8. The custom Home Menu UI has been installed.

## Removing the Home Menu Applet Patch

1. Launch GodMode9.

2. Go to `SDCARD:/luma/titles` and delete the `000400300000??02` folder.

    - EUR: `0004003000009802`

    - JPN: `0004003000008202`

    - USA: `0004003000008F02`

3. Reboot the console.

4. The Home Menu UI has been restored.

5. (Optional) Launch the Luma3DS config and deactivate "game patching".

---

## Installation Method 2: CIA File

## Backing Up the Home Menu Applet

<p class="note">
It is <strong>recommended</strong> to backup your Home Menu applet
as you'll be able to restore it later on if the custom Home Menu applet is installed with the CIA file.
</p>

1. Launch GodMode9.

2. Press the `Home` button.

3. Select `Scripts...` → `GM9Megascript` → `Miscellaneous` → `Title Options` → `Dump HomeMenu to .cia`.

4. Proceed dumping this title.

5. Answer "No" if asked to decrypt the CIA file.

6. The `homemenu.cia` file is saved to `SDCARD:/gm9/out`. Copy that file to a safe place in your computer.

## Installing the Custom Home Menu Applet

<p class="note">
Make sure you have a backed up <code>homemenu.cia</code> file before proceeding.
<br/>
Create a NAND backup before modifying any system titles!
<br/>
Modifying the Home Menu applet is safe and can be restored without NAND backups, but you should make one anyways.
<br/>
If you bricked your console OS, see the restore section below.
<br/><br/>
System Update will fail if the custom Home Menu applet is installed.
To update your system, you must restore the Home Menu applet back to its original state.
<br/>
After a system update, backup the <code>homemenu.cia</code> file again in case the Home Menu is also updated.
<br/>
The current Home Menu mod is likely compatible with the future system firmware versions with a newer Home Menu version.
If this mod stops working, I will update the base Home Menu applet for this mod.
</p>

<p class="warning">
Never uninstall CFW while any modded system titles are installed,
doing so will brick the console! You'll need the
<a href="https://www.flashcarts.net/ds-quick-start-guide">ntrboot</a>
DS flashcart to re-install B9S.
<br/>
Modified system titles are not signed which they don't work on the original firmware, as the signature check fails.
<br/>
If you wanna uninstall CFW before selling your console, you must restore the system titles first, then follow the
<a href="https://3ds.hacks.guide/uninstall-cfw">CFW uninstallation instructions</a>.
</p>

1. Download the custom Home Menu applet (`.cia`) from above.

2. Add it to the SD Card.

3. Launch GodMode9.

4. Browse and select the CIA file.

5. Select `CIA image options...` → `Install game image`.

    - CIA files are already encrypted, so there's no need to.

6. Reboot the console.

7. The custom Home Menu applet has been installed.

## Restoring the Home Menu Applet - Method 1

<p class="note">If you've dumped the <code>homemenu.cia</code> file with GodMode9, follow this section.</p>

1. Launch GodMode9.

2. Go to `SDCARD:/gm9/out` and select the `homemenu.cia` file.

3. Select `CIA image options...` → `Install game image`.

4. Reboot the console.

5. The Home Menu applet has been restored.

## Restoring the Home Menu Applet - Method 2

<p class="note">
If you've lost the <code>homemenu.cia</code> file from your SD Card and computer, follow this section.
<br/>
The target system firmware version is <code>11.17.0-50</code>.
</p>

1. Download the original Home Menu applet:

    - [EUR](/files/3DS/HomeMenu_EUR.cia) \| [USA](/files/3DS/HomeMenu_USA.cia) \| [JPN](/files/3DS/HomeMenu_JPN.cia)

    - Obtained from [Darthsternie's Firmware Archive](https://darthsternie.net/3ds-firmwares/)

2. Add the `HomeMenu_???.cia` file to the SD Card.

3. Launch GodMode9.

4. Browse and select the `HomeMenu_???.cia` file.

5. Select `CIA image options...` → `Install game image`.

6. Reboot the console.

7. The Home Menu applet has been restored.

## Restoring the Home Menu Applet - Method 3

<p class="note">If you've installed the custom Home Menu applet to your system running on older firmware version without any backups, follow this section.</p>

1. Go to [Darthsternie's Firmware Archive](https://darthsternie.net/3ds-firmwares/).

2. Download the firmware archive matching your console region and current firmware version.

    - If you don't know your system's current firmware version and can't boot to Home Menu:

    - Launch GodMode9

    - Go to `CTRNAND:/title/000400db/00017?02/content`.

        - EUR: `00017102`

        - USA: `00017302`

        - JPN: `00017202`

    - Select the `.app` file.

    - Select `NCCH image options...` → `Mount image to drive`.

    - Answer "Yes" to browse inside the `.app` file.

    - Go to the `romfs` folder.

    - Open the `titleversion.txt` file with hex editor or text viewer.

    - Take a note of the firmware version.

3. Extract the firmware archive and find the `.cia` file for Home Menu inside the `updates` folder.

    - EUR: `0004003000009802.cia`

    - USA: `0004003000008F02.cia`

    - JPN: `0004003000008202.cia`

4. Rename the `000400300000??02.cia` file to `HomeMenu.cia`.

5. Place it in the SD Card.

6. Launch GodMode9.

7. Browse and select the `HomeMenu.cia` file.

8. Select `CIA image options...` → `Install game image`.

9. Reboot the console.

10. The Home Menu applet has been restored.

11. (Optional) Update the CFW and system firmware to the latest version.

## Restoring the Home Menu Applet - Method 4

<p class="note">If you have any issues downloading the firmware archive, follow this section.</p>

1. Download [3DNUS](https://github.com/wyatt8740/3DNUS).

2. Launch 3DNUS.

3. Input your system's current firmware version and region (ex: `11.17.0-50E`).

4. Click "New 3DS" or "Old 3DS" for your 3DS system model.

5. Click "Begin Download", and wait for the download to complete.

6. Enter the firmware folder and find the `.cia` file for Home Menu inside the `updates` folder.

    - EUR: `0004003000009802.cia`

    - USA: `0004003000008F02.cia`

    - JPN: `0004003000008202.cia`

7. Rename the `000400300000??02.cia` file to `HomeMenu.cia`.

8. Place it in the SD Card.

9. Launch GodMode9.

10. Browse and select the `HomeMenu.cia` file.

11. Select `CIA image options...` → `Install game image`.

12. Reboot the console.

13. The Home Menu applet has been restored.

## Restoring the Home Menu Applet - Last Resort

<p class="note">If none of those restoration methods work for you, give
<a href="https://3ds.hacks.guide/ctrtransfer">CTRTransfer</a>
a try.</p>

This will re-install all the system titles and temporarily downgrade the firmware version to `11.15.0`.
<br/>
Your games and their save data will not be lost in the process, so follow the instructions carefully.
