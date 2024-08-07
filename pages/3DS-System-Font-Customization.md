---
layout: page
title: 3DS - System Font Customization
permalink: /3DS-System-Font-Customization
---

A guide for customizing the system-wide font on the Nintendo 3DS.

---

<div align="center"><p><img src="/images/3DS/3DS-System-Font-Customization_01.png"/></p></div>

[My custom system fonts](/3DS-Custom-System-Fonts)

---

<p class="note">
Create a NAND backup before modifying any system titles!
<br/>
Modifying the system font is safe and can be restored without NAND backups, but you should make one anyways.
<br/>
If you bricked your console OS, see the
<a href="#restoring-the-system-font">restore</a>
section.
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

**What you need:**

- [Luma3DS custom firmware](https://3ds.hacks.guide/)

- [Python](https://www.python.org/) (version 3+)

- [FontForge](https://fontforge.org/)

- [FontTool](/files/3DS/FontTool.zip) (tweaked to work with Python 3)

- [CTR Font Converter](/files/3DS/CTR_FontConverter.zip) (Legal Edition)

- [3DS font](/files/3DS/nintendo_NTLG-DB_001.ttf) (extracted from the Internet Browser applet)

- A font you want to install on a 3DS (TTF or OTF)

---

## Generating the Custom System Font

1. Launch FontForge.

2. Open the custom font file (TTF/OTF).

    ![](/images/3DS/3DS-System-Font-Customization_02.png)

3. Click `File` → `Open`, select the 3DS font file. Do not launch another FontForge window from Start Menu or Desktop,
   both fonts need to be opened in the same FontForge instance.

    - You should have two FontForge windows:

        - Custom font (FontForge window A)

        - 3DS font (FontForge window B)

    ![](/images/3DS/3DS-System-Font-Customization_03.png)

    - A 3DS font will be merged into a custom font in the process, this will preserve all the icon glyphs.

    ![](/images/3DS/3DS-System-Font-Customization_04.png)

4. Switch to FontForge window A, click `Elements` → `Merge Fonts...` and click `OK`.

    <div align="center"><p><img src="/images/3DS/3DS-System-Font-Customization_05.png"/></p></div>

    - If the 3DS font's glyphs appear to be small compared to the custom font's glyphs

    ![](/images/3DS/3DS-System-Font-Customization_06.png)

    - or big compared to the custom font's glyphs

    ![](/images/3DS/3DS-System-Font-Customization_07.png)

5. Click `File` → `Revert File` to undo the merge action.

6. Switch to FontForge window B, select all the glyphs (`Ctrl`+`A`).

7. Click `Elements` → `Transformations` → `Transform...` or just press `Ctrl`+`\`.

8. On the Transform dialog, set `Origin` to `Glyph Origin`

9. Click the `Move...` combo-box and change it to `Scale Uniformly...`

10. Set the value to resize the glyphs. 

    - To increase the glyphs scale by 25%, set it to 125%

    - To decrease the glyphs scale by 25%, set it to 75%

    <div align="center"><p><img src="/images/3DS/3DS-System-Font-Customization_08.png"/></p></div>

11. Switch back to FontForge window A and merge the font again.

    - Still not right? Revert again, switch to FontForge window B and revert the font file to undo the scale action.

    - Try a different scale value until you get it right.

    - The 3DS font's glyphs scale should be about the same as the custom font's glyphs.

    ![](/images/3DS/3DS-System-Font-Customization_09.png)

12. If you're happy with it, click `File` → `Generate Fonts...`.

13. Choose TrueType, uncheck "Validate Before Saving", then click Generate.

    - Validating a font would take a while, so it's not needed.

    <div align="center"><p><img src="/images/3DS/3DS-System-Font-Customization_10.png"/></p></div>

14. On the File Explorer window, open the generated font file and install it.

    ![](/images/3DS/3DS-System-Font-Customization_11.png)

15. Launch CTR Font Converter.

    - You'll be asked to install .NET Framework 3.5, click "Download and install this feature".

    - This will take a while to download it.

16. Go to the `Windows Font` tab and select a font that you installed earlier.

17. Set the font size value, start with 20px.

    - If the font size is too big/small after installing to a 3DS,
      come back to it and try a different value until you get it right.

18. Set the bit depth to `16 levels (A4)`.

19. Activate the `Use filter` check-box, click `Select file`, go to the `xllt` folder and select the `3ds_bitmap_font_std.xllt` file.

    - This will filter out all the glyphs not used in the 3DS, and reduces the font file size
      (max is 1.5 MB for compressed BCFNT file after running FontTool).

20. Go to the `bcfnt / bcfna` tab.

21. Save the font file as `SystemFont.bcfnt` to the `FontTool` folder.

22. Click `Convert`.

    ![](/images/3DS/3DS-System-Font-Customization_12.png)

23. Go to the `FontTool` folder.

24. Launch the Terminal window and input this command:

    ```
    python FontTool.py -font SystemFont.bcfnt
    ```

    or launch `Convert_System_Font.bat`.

    ![](/images/3DS/3DS-System-Font-Customization_13.png)

25. The `SystemFont.cia` file has been generated, rename "SystemFont" to anything you want.

26. Add the CIA file to the SD Card.

## Installing the Custom System Font

1. Launch GodMode9.

2. Browse and select the CIA file.

3. Select `CIA image options...` → `Install game image`.

    - You don't need to encrypt it as `3dstool` (bundled in `FontTool`) already did that.

4. Reboot the console.

5. The custom system font has been installed!

<div align="center"><p><img src="/images/3DS/3DS-System-Font-Customization_14.png"/></p></div>

<p class="note">The button glyphs should be preserved. The ZL/ZR/C-Stick/Start glyphs are part of the game's digital manual, not the system font.</p>

## Restoring the System Font

1. Download the [original system font](/files/3DS/SystemFont.cia).

2. Add the `SystemFont.cia` file to the SD Card.

3. Launch GodMode9.

4. Browse and select the `SystemFont.cia` file.

5. Select `CIA image options...` → `Install game image`.

6. Reboot the console.

7. The system font has been restored.

---

## Credits

[FontTool](https://github.com/astronautlevel2/FontTool) by astronautlevel2 & ihaveamac

[3dstool](https://github.com/dnasdw/3dstool) by dnasdw

[make_cia](https://github.com/Tiger21820/ctr_toolkit) by Tiger21820 & 3DSGuy
