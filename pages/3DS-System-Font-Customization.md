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
    System Settings with a custom system font &quot;Pop Happiness&quot;.
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

<p class="note-blue">
  Luma3DS custom firmware is required to use the mod.
  <a href="https://3ds.hacks.guide/" target="_blank">
  Install CFW if you haven't already.</a>
</p>

<p class="note-blue">
  Create a NAND backup before modifying any system files!
  Modifying the system font is safe since Boot9Strap provides brick protection,
  allowing recovery with GodMode9.
  If you messed up and the Home Menu fails to launch, use GodMode9 to
  <a href="#restoring-the-system-font">
  restore the system font</a>.
</p>

<p class="note-red">
  Never uninstall CFW while any modded system files are installed,
  doing so will remove Boot9Strap and <b>fully</b> brick the console!
  If you fully bricked your console, you'll need a
  <a href="https://www.flashcarts.net/ds-quick-start-guide" target="_blank">
  DS flashcart with ntrboot</a>
  to re-install Boot9Strap to unbrick your console.
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

<p class="note-blue">
  The CLI method process is shorter than the GUI method.
  If the CLI method does not work for you, try the GUI method instead.
</p>

<!-- Tab links -->
<div class="tab_fullwidth_0">
  <button class="tablinks_fullwidth_0" onclick="openTab_fullwidth_0(event, 'CLI')" id="defaultOpen_fullwidth_0">CLI: FontForge + Python script</button>
  <button class="tablinks_fullwidth_0" onclick="openTab_fullwidth_0(event, 'GUI')">GUI: FontForge only</button>
</div>

<!-- Tab content -->
<div id="CLI" class="tabcontent_fullwidth_0">
  <ol>
    <li>
      <p>Go to the
        <a href="https://github.com/dkosmari/System-Font-Replacer" target="_blank">
        Wii U System Font Replacer plugin repository</a>.
      </p>
    </li>
    <li>
      <p>Download a Python script: <code>merge-fonts.py</code></p>
      <ul>
        <li>
          <p>
            <a href="https://github.com/dkosmari/System-Font-Replacer#missing-symbols" target="_blank">
            More info about how it works</a>
          </p>
        </li>
      </ul>
    </li>
    <li>
      <p>Place those 3 files in a folder:</p>
      <ul>
        <li>
          <p><code>merge-fonts.py</code></p>
        </li>
        <li>
          <p>3DS font - <code>nintendo_NTLG-DB_001.ttf</code></p>
        </li>
        <li>
          <p>A custom font - <code>PopHappiness.ttf</code> (OTF also works)</p>
        </li>
      </ul>
    </li>
    <li>
      <p>Launch the Terminal app by right-clicking on File Explorer's empty space and clicking <code>Open in Terminal</code>.</p>
      <div align="center">
        <p class="image">
          <img src="/images/3DS/3DS-System-Font-Customization-Python_1.png">
        </p>
      </div>
    </li>
    <li>
      <p>Input this command (pick one):</p>
      <p>PowerShell:</p>
      <p class="code-block-wrap">
        &amp; 'C:\Program Files (x86)\FontForgeBuilds\bin\fontforge.exe'
        merge-fonts.py PopHappiness.ttf nintendo_NTLG-DB_001.ttf PopHappiness_Merged.ttf
      </p>
      <p>Command Prompt (CMD):</p>
      <p class="code-block-wrap">
        "C:\Program Files (x86)\FontForgeBuilds\bin\fontforge.exe"
        merge-fonts.py PopHappiness.ttf nintendo_NTLG-DB_001.ttf PopHappiness_Merged.ttf
      </p>
      <p>Those are single line commands - they are wrapped so the whole commands are displayed for easy copy without horizontally scrolling.</p>
      <div align="center">
        <p class="image">
          <img src="/images/3DS/3DS-System-Font-Customization-Python_2.png">
        </p>
      </div>
      <p>The fonts have been merged as <code>PopHappiness_Merged.ttf</code>.</p>
    </li>
    <li>
      <p>On a File Explorer window, open the merged font file and install it.</p>
      <div align="center">
        <p class="image">
          <img src="/images/3DS/3DS-System-Font-Customization_07.png">
        </p>
      </div>
    </li>
  </ol>
</div>

<!-- Tab content -->
<div id="GUI" class="tabcontent_fullwidth_0">
  <ol>
    <li>
      <p>Launch FontForge.</p>
    </li>
    <li>
      <p>Open the custom font file (TTF/OTF).</p>
      <div align="center">
        <p class="image">
          <img src="/images/3DS/3DS-System-Font-Customization_02.png">
        </p>
      </div>
    </li>
    <li>
      <p>Go to <code>Element</code> → <code>Font Info...</code> → <code>General</code>.</p>
    </li>
    <li>
      <p>
        Set the <code>Em Size</code> value to <code>1000</code> and click <code>OK</code>.
        The custom font size will be adjusted so it matches the 3DS font size.
        Skip if the em size is already 1,000.
      </p>
      <div align="center">
        <p class="image">
          <img src="/images/3DS/3DS-System-Font-Customization_03.png">
        </p>
      </div>
    </li>
    <li>
      <p>Go to <code>View</code> → <code>Goto</code>, input <code>U+E000</code> into the text box to jump to the Private Use Area block.</p>
    </li>
    <li>
      <p>If the custom font contains any non-3DS glyphs in the PUA block, go to <code>File</code> → <code>Execute Script</code>, input this code into the text box:
      </p>

<pre class="highlight"><code>fontforge.activeFont().selection.select(("ranges", None), 0xE000, 0xE07E)
fontforge.activeFont().clear()
</code></pre>

      <p>and click <code>OK</code>. This will clear out all the non-3DS glyphs in this block.</p>
      <div align="center">
        <p class="image">
          <img src="/images/3DS/3DS-System-Font-Customization_04.png">
        </p>
      </div>
    </li>
    <li>
      <p>Go to <code>Element</code> → <code>Merge Fonts...</code> and select the 3DS font file.</p>
    </li>
    <li>
      <p>Click <code>Yes</code> when prompted to retain kerning info.</p>
      <div align="center">
        <p class="image">
          <img src="/images/3DS/3DS-System-Font-Customization_05.png">
        </p>
      </div>
    </li>
    <li>
      <p>Go to <code>File</code> → <code>Generate Fonts...</code>.</p>
    </li>
    <li>
      <p>Pick <code>TrueType</code> in the combo-box, uncheck <code>Validate Before Saving</code>, then click <code>Generate</code>.
      </p>
      <div align="center">
        <p class="image">
          <img src="/images/3DS/3DS-System-Font-Customization_06.png">
        </p>
      </div>
    </li>
    <li>
      <p>On a File Explorer window, open the merged font file and install it.</p>
      <div align="center">
        <p class="image">
          <img src="/images/3DS/3DS-System-Font-Customization_07.png">
        </p>
      </div>
    </li>
  </ol>
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
  <p class="note-blue">
    GodMode9 v2.0.0 or higher is required to install <code>.cia</code> files.
    Get the
    <a href="https://github.com/d0k3/GodMode9" target="_blank">
    latest version of GodMode9 here</a>.
  </p>

  <ol>
    <li>
      <p>Add the generated CIA file to the SD Card.</p>
    </li>
    <li>
      <p>Boot the console while holding the <code>Start</code> button to launch GodMode9.</p>
    </li>
    <li>
      <p>Browse and select the CIA file.</p>
    </li>
    <li>
      <p>Select <code>CIA image options...</code> → <code>Install game image</code>.</p>
      <ul>
        <li>
          <p>CIA files generated by FontTool are already encrypted, so there's no need to re-encrypt it.</p>
        </li>
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

  <p class="note-blue">
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
      <p>Navigate to <code>/load/mods/0004009B00014002/romfs</code>. Create folders if those don't exist.</p>
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
      <p>Boot the console while holding the <code>Start</code> button to launch GodMode9.</p>
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
<script src="/assets/js/tabs_fullwidth_0.js"></script>
