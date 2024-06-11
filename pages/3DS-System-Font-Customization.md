---
layout: page
title: 3DS - System Font Customization
permalink: /3DS-System-Font-Customization
---

A guide for customizing a system font on the Nintendo 3DS.

---

<div align="center"><p><img src="/images/3DS/3DS-System-Font-Customization_01.png"/></p></div>

[Check out my custom system fonts here!](/3DS-Custom-System-Fonts)

---

⚠️ Make a NAND backup before proceeding! If you bricked your console OS, see the [restore](#restoring-an-original-font) section.

⚠️ Never uninstall CFW while any modded system titles are installed. It will result in an unbootable state and you'll need the [ntrboot](https://www.flashcarts.net/ds-quick-start-guide) DS flashcart to recover.

What you need:
- [Luma3DS custom firmware](https://3ds.hacks.guide/)
- [Python](https://www.python.org/)
- [FontForge](https://fontforge.org/)
- [FontTool](/files/3DS/FontTool.zip) (tweaked to work with Python 3)
- [CTR Font Converter](/files/3DS/CTR_FontConverter.zip) (legal edition)
- [3DS font](/files/3DS/nintendo_NTLG-DB_001.ttf) (extracted from the Internet Browser applet)
- A font you want to install on a 3DS (TTF or OTF)

---

## Preparing a custom font

1. Launch FontForge.

2. Open the custom font file (TTF/OTF).

    ![](/images/3DS/3DS-System-Font-Customization_02.png)

3. Click `File` → `Open`, select the 3DS font file. Do not launch another FontForge window from Start Menu or Desktop, both fonts need to be opened in the same FontForge instance.

    ![](/images/3DS/3DS-System-Font-Customization_03.png)

    - The 3DS font will be merged into the custom font in the process, this will preserve all the icon glyphs.

    ![](/images/3DS/3DS-System-Font-Customization_04.png)

4. Click `Elements` → `Merge Fonts...` and click `OK`.

    <div align="center"><p><img src="/images/3DS/3DS-System-Font-Customization_05.png"/></p></div>

    - If the 3DS font's glyphs appear to be small compared to the custom font's glyphs

    ![](/images/3DS/3DS-System-Font-Customization_06.png)

    - or big compared to the custom font's glyphs

    ![](/images/3DS/3DS-System-Font-Customization_07.png)

5. Click `File` → `Revert File` to undo the merge.

6. Switch to the second FontForge window (3DS font), select all the glyphs (`Ctrl`+`A`).

7. Click `Elements` → `Transformations` → `Transform...` or just press `Ctrl`+`\`.

8. On the Transform dialog
- Set `Origin` to `Glyph Origin`
- On the `Move...` combo-box, change it to `Scale Uniformly...`
- Set the value to resize the glyphs. 
  - To increase the glyphs scale by 25%, set it to 125%
  - To decrease the glyphs scale by 25%, set it to 75%

    <div align="center"><p><img src="/images/3DS/3DS-System-Font-Customization_08.png"/></p></div>

9. Switch back to the first FontForge window and merge the font again.
- Still not right? Revert again, switch to the second FontForge window and revert the font file to undo the scale.
- Keep messing around with the scale value until you get the scale right.
- The 3DS font's glyphs scale should be about the same as the custom font's glyphs.

    ![](/images/3DS/3DS-System-Font-Customization_09.png)

10. If you're happy with it, click `File` → `Generate Fonts...`.

11. Choose TrueType, uncheck "Validate Before Saving", then click Generate.
- Validating a font would take a while, so it's not needed.

    <div align="center"><p><img src="/images/3DS/3DS-System-Font-Customization_10.png"/></p></div>

12. On the File Explorer window, open the generated font file and install it.

    ![](/images/3DS/3DS-System-Font-Customization_11.png)

13. Launch CTR Font Converter.
- You'll be asked to install .NET Framework 3.5, click "Download and install this feature".
- This will take a while to download it.

14. On the CTR Font Converter window
- Go to the `Windows Font` tab and select a font that you installed earlier
- Set the font size value, start with 20px first. If the font size doesn't look right after installing to a 3DS, come back to it and keep messing around with the value until you get it right.
- Set the bit depth to `16 levels (A4)`
- Activate the `Use filter` check-box and select `3ds_bitmap_font_std.xllt` (located in the `xllt` folder).
  - This will filter out all the glyphs not used in the 3DS, and reduces the font file size (max is 1.5 MB for compressed BCFNT after running FontTool).
- Go to the `bcfnt / bcfna` tab.
- Save the font file as `SystemFont.bcfnt` to the `FontTool` folder.
- Click `Convert`.

    ![](/images/3DS/3DS-System-Font-Customization_12.png)

15. Go to the `FontTool` folder.

16. Open the Terminal window and enter:

    ```
    python FontTool.py -font SystemFont.bcfnt
    ```

    or launch `Convert_System_Font.bat`.

    ![](/images/3DS/3DS-System-Font-Customization_13.png)

17. You should have the `SystemFont.cia`, rename "SystemFont" to anything you want.

18. Add the CIA file to the SD Card.

## Installing a custom font

1. Launch GodMode9.

2. Browse and select the CIA file.

3. Select `CIA image options...` → `Install game image`. You don't need to encrypt it as `3dstool` (bundled in `FontTool`) already did that.

4. Reboot a 3DS.

5. A custom font has been installed!

<div align="center"><p><img src="/images/3DS/3DS-System-Font-Customization_14.png"/></p></div>

- The button glyphs should be preserved. The ZL/ZR/C-Stick/Start glyphs are part of the game's digital manual, not the font.

## Restoring an original font

1. Download the [original system font](/files/3DS/SystemFont.cia).

2. Add the `SystemFont.cia` file to the SD Card.

1. Launch GodMode9.

3. Browse and select the `SystemFont.cia` file.

4. Select `CIA image options...` → `Install game image`.

5. Reboot a 3DS.

6. A system font has been restored.

---

## Credits

[FontTool](https://github.com/astronautlevel2/FontTool) by astronautlevel2 & ihaveamac

[3dstool](https://github.com/dnasdw/3dstool) by dnasdw

[make_cia](https://github.com/Tiger21820/ctr_toolkit) by Tiger21820 & 3DSGuy
