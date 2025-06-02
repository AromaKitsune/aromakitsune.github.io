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

<details class="expandable-details">
  <summary>
    <b>Table of Contents</b>
  </summary>
  <ul>
    <li>
      <p>
        <a href="#getting-started">
        Getting Started</a>
      </p>
    </li>
    <li>
      <p>
        <a href="#merging-the-fonts">
        Merging the Fonts</a>
      </p>
      <ul>
        <li>
          <p>
            <a href="#method-1-fontforge--python-script">
            Method 1: FontForge + Python script</a>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <p>
            <a href="#method-2-fontforge-only">
            Method 2: FontForge only</a>
          </p>
        </li>
      </ul>
    </li>
    <li>
      <p>
        <a href="#generating-the-custom-system-font">
        Generating the Custom System Font</a>
      </p>
    </li>
    <li>
      <p>
        <a href="#installing-the-custom-system-font">
        Installing the Custom System Font</a>
      </p>
    </li>
    <li>
      <p>
        <a href="#restoring-the-system-font">
        Restoring the System Font</a>
      </p>
    </li>
    <li>
      <p>
        <a href="#tools-used">
        Tools Used</a>
      </p>
    </li>
  </ul>
</details>


## Getting Started

Luma3DS custom firmware is required to use the mod.
<a href="https://3ds.hacks.guide/" target="_blank">
Install CFW if you haven't already.</a>

<p class="note-info">
  Create a NAND backup before modifying any system files!
  <br>
  Modifying the system font is safe and can be restored by re-installing the original system font, instead of restoring a NAND backup.
  <br>
  If you messed up and the Home Menu fails to launch, it is NOT "bricked",
  you can still access GodMode9 and install an original <code>.cia</code> file for system font to fix it.
  <br>
  To restore the system font, see the
  <a href="#restoring-the-system-font">
  restore section</a>.
</p>

<p class="note-warning">
  Never uninstall CFW while any modded system files are installed, doing so will <b>actually</b> brick the console!
  If you bricked your console that way, you'll need a
  <a href="https://www.flashcarts.net/ds-quick-start-guide" target="_blank">
  DS flashcart with ntrboot</a>
  to re-install Boot9Strap to unbrick your console.
  <br>
  Modified system files are not signed which they don't work on the original firmware, as the signature check fails.
  <br>
  To safely uninstall CFW, you must restore the system files first, then follow the
  <a href="https://3ds.hacks.guide/uninstall-cfw" target="_blank">
  CFW uninstallation instructions</a>.
  <br>
  Only uninstall CFW if you don't need it anymore and you wanna give/sell away your console.
</p>

<details class="expandable-details">
  <summary>
    <b>Why install patched CIA file instead of LayeredFS?</b>
  </summary>
  <p>
    The method to install a custom system font is installing a <code>.cia</code> file which replaces a system file.
    I tried a safer method; LayeredFS, a Luma3DS feature that redirects games assets to modded assets files in the SD Card without patching the ROMs directly,
    but it currently doesn't work with a system font, so we have to modify a system file instead.
  </p>
</details>


### What You Need:

- <a href="https://fontforge.org/" target="_blank">
  FontForge</a>

- [3DS font](/files/3DS/nintendo_NTLG-DB_001.ttf)

- A font you want to install on a 3DS (TTF or OTF)

- <a href="https://drive.google.com/file/d/1Uo7V5H0rQjGGMj-U4YoKX3J77f68kmKg/view?usp=sharing" target="_blank">
  CTR Font Converter</a>

- <a href="https://www.python.org/" target="_blank">
  Python</a>
  (version 3+)

- [FontTool](/files/3DS/FontTool.zip) (tweaked to work with Python 3)

- At least 1080p of screen resolution needed for CTR Font Converter

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

<p class="note-info">
  The CLI method process is shorter than the GUI method.
  If the CLI method does not work for you, go to the
  <a href="#method-2-fontforge-only">
  GUI method</a> section.
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

5.  Input this command (pick one):

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

    Those are single line commands - they are wrapped so the whole commands are displayed for easy copy without horizontally scrolling.

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

    - <p style="color:orange;">
        This option is not accessible if your screen resolution is lower than 1080p
        as the Input and Output sections do not have scroll bars.
      </p>

    - If you're on a laptop and the screen resolution is 1080p with high DPI scaling, launch Settings,
      go to `System` → `Display` → `Scale & layout`, and temporarily set the `Scaling` value to `100%`.

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

    or launch `convert-system-font.cmd`.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-System-Font-Customization_09.png">
      </p>
    </div>

    The `SystemFont.cia` file has been generated.

    Rename `SystemFont` to match the actual font name, in this case: `PopHappinessFont.cia`.

    If you want to install it to Azahar emulator, launch `compress-bcfnt-file.cmd`
    and the font file will be compressed as `SystemFont.bcfnt.lz`.


## Installing the Custom System Font

<!-- Tab links -->
<div class="tab_0">
  <button class="tablinks_0" onclick="openTab_0(event, '3DS_Install')" id="defaultOpen_0">3DS</button>
  <button class="tablinks_0" onclick="openTab_0(event, 'Azahar_Install')">Azahar</button>
</div>

<!-- Tab content -->
<div id="3DS_Install" class="tabcontent_0">
  <p>
    You must have GodMode9 v2.0.0 or higher to be able to install <code>.cia</code> files.
    Get the
    <a href="https://github.com/d0k3/GodMode9" target="_blank">
    latest version of GodMode9 here</a>.
  </p>

  <ol>
    <li>
      <p>Add the generated CIA file to the SD Card.</p>
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
</div>

<!-- Tab content -->
<div id="Azahar_Install" class="tabcontent_0">
  <p>
    You can also install the custom system font to
    <a href="https://azahar-emu.org/" target="_blank">
    Azahar emulator</a>.
  </p>

  <p class="note-info">
    The system files need to be installed to a virtual NAND before continuing.
    Follow the instructions for 
    <a href="https://github.com/azahar-emu/ArticSetupTool" target="_blank">
    setting up system files</a> on an emulator. A real 3DS is required.
  </p>

  <ol>
    <li>
      <p>Rename the compressed font file to <code>cbf_std.bcfnt.lz</code>.</p>
    </li>
    <li>
      <p>Launch Azahar.</p>
    </li>
    <li>
      <p>Go to <code>File</code> → <code>Open Azahar Folder</code>.</p>
    </li>
    <li>
      <p>Navigate to <code>/load/mods/0004009B00014002/romfs</code>. Create folders if those don’t exist.</p>
    </li>
    <li>
      <p>Add the <code>cbf_std.bcfnt.lz</code> file here.</p>
    </li>
    <li>
      <p>Launch the Home Menu by going to <code>File</code> → <code>Boot Home Menu</code> → <code>EUR</code>/<code>USA</code>/<code>JPN</code>.</p>
    </li>
  </ol>

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
</div>


## Restoring the System Font

<!-- Tab links -->
<div class="tab_1">
  <button class="tablinks_1" onclick="openTab_1(event, '3DS_Uninstall')" id="defaultOpen_1">3DS</button>
  <button class="tablinks_1" onclick="openTab_1(event, 'Azahar_Uninstall')">Azahar</button>
</div>

<!-- Tab content -->
<div id="3DS_Uninstall" class="tabcontent_1">
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
<div id="Azahar_Uninstall" class="tabcontent_1">
  <ol>
    <li>
      <p>Launch Azahar.</p>
    </li>
    <li>
      <p>Go to <code>File</code> → <code>Open Azahar Folder</code>.</p>
    </li>
    <li>
      <p>Navigate to <code>/load/mods/0004009B00014002/romfs</code>.</p>
    </li>
    <li>
      <p>Delete or rename the <code>cbf_std.bcfnt.lz</code> file.</p>
    </li>
    <li>
      <p>Launch the Home Menu by going to <code>File</code> → <code>Boot Home Menu</code> → <code>EUR</code>/<code>USA</code>/<code>JPN</code>.</p>
    </li>
  </ol>

  <p class="note-green">
    The system font has been restored.
  </p>
</div>


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

<script src="/assets/js/tabs_0.js"></script>
<script src="/assets/js/tabs_1.js"></script>
