---
layout: page
title: 3DS - System Font Customization Guide
permalink: /3DS-System-Font-Customization
---

A guide for customizing the system-wide font on the Nintendo 3DS.

<div align="center">
  <p class="image">
    <img src="/images/3DS/Pop-Happiness-Font.png">
    <br>
    Custom system font shown in this screenshot is "Pop Happiness".
    <br>
    <a href="/3DS-Custom-System-Fonts">
    Download the custom system fonts here</a>
    <br>
  </p>
</div>


## Getting Started

Luma3DS custom firmware is required to use the mod.
<a href="https://3ds.hacks.guide/" target="_blank">
Install CFW if you haven't already.</a>

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

### What You Need:

- <a href="https://fontforge.org/" target="_blank">
  FontForge</a>

- [3DS font](/files/3DS/nintendo_NTLG-DB_001.ttf)

- A font you want to install on a 3DS (TTF or OTF)

- [CTR Font Converter](/files/3DS/CTR_FontConverter.zip) (Legal Edition)

- <a href="https://www.python.org/" target="_blank">
  Python</a>
  (version 3+)

- [FontTool](/files/3DS/FontTool.zip) (tweaked to work with Python 3)

- <a href="https://lime3ds.github.io/" target="_blank">
  Lime3DS emulator</a>
  (for previewing the custom system font)

Recommended OS: Windows 10 or 11 - FontTool is not compatible with Linux


## Merging the Fonts

A 3DS font will be merged into a custom system font so the icon glyphs are preserved.

<div align="center">
  <p class="image">
    <img src="/images/3DS/3DS-System-Font-Customization_01.png">
  </p>
</div>

There are 2 ways to merge the fonts: CLI & GUI

The CLI method involves in using a Python script that calls the FontForge program to merge the fonts automatically,
while the GUI method involves in using FontForge itself to merge the fonts manually.

<p class="note-blue">
  The CLI method is faster than the GUI method.
  Pick the GUI method if the CLI method does not work for you.
</p>


#### Method 1: FontForge + Python script

The example custom system font used in this section is `PopHappiness.ttf`.

1.  Go to the
    <a href="https://github.com/dkosmari/System-Font-Replacer" target="_blank">
    Wii U System Font Replacer plugin repository</a>.

2.  Download a Python script: `merge-fonts.py`

    - <a href="https://github.com/dkosmari/System-Font-Replacer#missing-symbols" target="_blank">
      More info about how it works</a>

3.  Place those 3 files in a folder:

    - `merge-fonts.py`

    - 3DS font - `nintendo_NTLG-DB_001.ttf`

    - A custom font - `PopHappiness.ttf` (OTF also works)

4.  Launch the Terminal app by right-clicking on File Explorer's empty space and clicking `Open in Terminal`.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-System-Font-Customization-Python_1.png">
      </p>
    </div>

5.  Input this command:

    PowerShell:

    <p class="code-block-wrap">
      & 'C:\Program Files (x86)\FontForgeBuilds\bin\fontforge.exe'
      merge-fonts.py PopHappiness.ttf nintendo_NTLG-DB_001.ttf PopHappiness_Merged.ttf
    </p>

    Command Prompt (CMD):

    <p class="code-block-wrap">
      "C:\Program Files (x86)\FontForgeBuilds\bin\fontforge.exe"
      merge-fonts.py PopHappiness.ttf nintendo_NTLG-DB_001.ttf PopHappiness_Merged.ttf
    </p>

    Note: This is a single line command - it is wrapped so the whole command is displayed for easy copy without horizontally scrolling.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-System-Font-Customization-Python_2.png">
      </p>
    </div>

    The fonts have been merged as `PopHappiness_Merged.ttf`.

6.  On a File Explorer window, open the merged font file and install it.

<p class="note-blue">
  Continue to the
  <a href="#generating-the-custom-system-font">
  Generating the Custom System Font</a>
  section.
</p>


#### Method 2: FontForge only

1.  Launch FontForge.

2.  Open the custom font file (TTF/OTF).

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-System-Font-Customization_02.png">
      </p>
    </div>

3.  Go to `Element` → `Font Info...` → `General`.

4.  Set the `Em Size` value to `1000` and click `OK`.
    The custom font size will be adjusted so it matches the 3DS font size.
    Skip if em size is already 1,000.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-System-Font-Customization_03.png">
      </p>
    </div>

5.  Go to `View` → `Goto`, input `U+E000` into the text box to jump to the Private Use Area block.

6.  If the custom font contains any non-3DS glyphs in the PUA block, go to `File` → `Execute Script`, input this code into the text box:

    ```
    fontforge.activeFont().selection.select(("ranges", None), 0xE000, 0xE07E)
    fontforge.activeFont().clear()
    ```

    and click `OK`. This will clear out all the non-3DS glyphs in this block.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-System-Font-Customization_04.png">
      </p>
    </div>

7.  Go to `Element` → `Merge Fonts...` and select the 3DS font file.

8.  Click `Yes` when prompted to retain kerning info.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-System-Font-Customization_05.png">
      </p>
    </div>

9.  Go to `File` → `Generate Fonts...`.

10. Pick `TrueType` in the combo-box, uncheck `Validate Before Saving`, then click `Generate`.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-System-Font-Customization_06.png">
      </p>
    </div>

11. On a File Explorer window, open the merged font file and install it.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-System-Font-Customization_07.png">
      </p>
    </div>


## Generating the Custom System Font

1.  Launch CTR Font Converter.

    - A dialog will say that .NET Framework 3.5 isn't installed, click "Download and install this feature".

    - Wait for the download to complete, then relaunch that app.

2.  Go to the `Windows Font` tab and select a recently installed font.

3.  Set the font size - start with 20px.

    - If the font size is too big/small after installing to a 3DS,
      come back to it and try a different font size until you get it right.

4.  Set the bit depth to `16 levels (A4)`.

5.  Activate the `Use filter` check-box, click `Select file`, go to the `xllt` folder and select the `3ds_bitmap_font_std.xllt` file.

    - This will clear out all the glyphs not used in 3DS games/apps, reducing the font file size.
      Max file size for compressed BCFNT file (after running FontTool) is 1.5 MiB.

6.  Go to the `bcfnt / bcfna` tab.

7.  Save the font file as `SystemFont.bcfnt` to the `FontTool` folder.

8.  Click `Convert`.

    <div align="center">
      <p class="image">
        <a href="/images/3DS/3DS-System-Font-Customization_08.png">
          <img src="/images/3DS/3DS-System-Font-Customization_08.png">
        </a>
        <br>
        <small>
          Click the screenshot for full view.
        </small>
      </p>
    </div>

    Note: The preview section has a different result depending on where the font is installed:

    - The corresponding font is displayed if that font is installed to
    `C:\Windows\Fonts` (right-click on a TTF file → `Install for all users`)

    - Otherwise a Windows system font is displayed if that font is installed to
    `%LocalAppData%\Microsoft\Windows\Fonts` (click the `Install` button on Windows Font Viewer)

    This does not affect the custom font file generation, you can install a TTF font to whichever Fonts folder you want.

9.  Go to the `FontTool` folder.

10. Launch the Terminal app by right-clicking on File Explorer's empty space and clicking `Open in Terminal`.
    Input this command:

    ```
    python FontTool.py -font SystemFont.bcfnt
    ```

    or launch `convert-system-font.bat`.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-System-Font-Customization_09.png">
      </p>
    </div>

    The `SystemFont.cia` file has been generated.

    Rename `SystemFont` to match the actual font name, in this case: `PopHappinessFont.cia`.


## Previewing the Custom System Font on Lime3DS

You can preview the custom system font on Lime3DS emulator before installing it to a 3DS.

<p class="note-info">
  AES Keys are required to install encrypted contents to Lime3DS.
  <a href="https://github.com/Lime3DS/Lime3DS/tree/master/dist/dumpkeys" target="_blank">
  Read here for more info.</a>
  <br>
  If you have Citra emulator, the installation process works the same.
</p>

1.  Launch Lime3DS emulator.

2.  Go to `Emulation` → `Configure...` → `System`.

3.  Under the `3GX Plugins Loader` options, pick the system model and system region, then click `Download`.

4.  Wait for the system firmware download to complete.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-System-Font-Customization_10.png">
      </p>
    </div>

5.  Close the configuration window.

6.  Go to `File` → `Install CIA...`.

7.  Select the generated CIA file.

8.  Launch any of the system apps and see how the custom system font looks.

<p class="note-blue">
  If the font size is too big/small, repeat the
  <a href="#generating-the-custom-system-font">
  Generating the Custom System Font</a>
  section and try a different font size until you get it right.
</p>


## Installing the Custom System Font to 3DS

1.  Add the generated CIA file to the SD Card.

2.  Launch GodMode9.

3.  Browse and select the CIA file.

4.  Select `CIA image options...` → `Install game image`.

    - CIA files are encrypted by default, so there's no need to re-encrypt it.

5.  Reboot the console.

<p class="note-green">
  The custom system font has been installed!
</p>

<div align="center">
  <p class="image">
    <img src="/images/3DS/3DS-System-Font-Customization_11.png">
    <br>
    <small>
      The button glyphs should be preserved.
      <br>
      The ZL/ZR/C-Stick/Start glyphs are part of the game's digital manual, not the system font.
    </small>
  </p>
</div>


## Restoring the System Font

1.  Download the [original system font](/files/3DS/SystemFont.cia).

2.  Add the `SystemFont.cia` file to the SD Card.

3.  Launch GodMode9.

4.  Browse and select the `SystemFont.cia` file.

5.  Select `CIA image options...` → `Install game image`.

6.  Reboot the console.

<p class="note-green">
  The system font has been restored.
</p>

To restore the system font on Lime3DS, go to `File` → `Install CIA...` and select the `SystemFont.cia` file.


## Tools Used

<a href="https://github.com/astronautlevel2/FontTool" target="_blank">
FontTool</a>
by astronautlevel2 & ihaveamac

<a href="https://github.com/dnasdw/3dstool" target="_blank">
3dstool</a>
by dnasdw

<a href="https://github.com/Tiger21820/ctr_toolkit" target="_blank">
make_cia</a>
by Tiger21820 & 3DSGuy
