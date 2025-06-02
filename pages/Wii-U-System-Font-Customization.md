---
layout: page
title: Wii U - System Font Customization Guide
permalink: /Wii-U-System-Font-Customization
---

A guide for customizing the system-wide font on the Wii U.

<div align="center">
  <p class="image">
    <img src="/images/Wii-U/Pop-Happiness-Font.png">
    <br>
    Custom system font shown in this screenshot is "Pop Happiness".
    <br>
    <a href="/Wii-U-Custom-System-Fonts">
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
  </ul>
</details>


## Getting Started

Aroma custom firmware is required to use the mod.
<a href="https://wiiu.hacks.guide/" target="_blank">
Install CFW if you haven't already.</a>

<p class="note-info">
  No system files in the MLC NAND are modified in the process. The custom system font is loaded into RAM only,
  so it's safe to install a custom system font without worrying about bricking the console.
</p>

### What You Need:

- <a href="https://fontforge.org/" target="_blank">
  FontForge</a>

- [Wii U font](/files/Wii-U/nintendo_NTLG-DB_002.ttf)

- A font you want to install on a Wii U (TTF or OTF)

- <a href="https://github.com/dkosmari/System-Font-Replacer" target="_blank">
  System Font Replacer plugin</a>

Recommended OS: Windows 10 or 11, Linux


## Merging the Fonts

A Wii U font will be merged into a custom system font so the icon glyphs are preserved.

<div align="center">
  <p class="image">
    <img src="/images/Wii-U/Wii-U-System-Font-Customization_01.png">
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

    - Wii U font - `nintendo_NTLG-DB_002.ttf`

    - A custom font - `PopHappiness.ttf` (OTF also works)

4.  Launch the Terminal app by right-clicking on File Explorer's empty space and clicking `Open in Terminal`.

    <div align="center">
      <p class="image">
        <img src="/images/Wii-U/Wii-U-System-Font-Customization-Python_1.png">
      </p>
    </div>

5.  Input this command (pick one):

    Windows - PowerShell:

    <p class="code-block-wrap">
      & 'C:\Program Files (x86)\FontForgeBuilds\bin\fontforge.exe'
      merge-fonts.py PopHappiness.ttf nintendo_NTLG-DB_002.ttf PopHappiness_Merged.ttf
    </p>

    Windows - Command Prompt (CMD):

    <p class="code-block-wrap">
      "C:\Program Files (x86)\FontForgeBuilds\bin\fontforge.exe"
      merge-fonts.py PopHappiness.ttf nintendo_NTLG-DB_002.ttf PopHappiness_Merged.ttf
    </p>

    Linux:

    <p class="code-block-wrap">
      fontforge merge-fonts.py PopHappiness.ttf nintendo_NTLG-DB_002.ttf PopHappiness_Merged.ttf
    </p>

    Those are single line commands - they are wrapped so the whole commands are displayed for easy copy without horizontally scrolling.

    <div align="center">
      <p class="image">
        <img src="/images/Wii-U/Wii-U-System-Font-Customization-Python_2.png">
      </p>
    </div>

    The fonts have been merged as `PopHappiness_Merged.ttf`.

<p class="note-blue">
  Continue to the
  <a href="#installing-the-custom-system-font">
  Installing the Custom System Font</a>
  section.
</p>


#### Method 2: FontForge only

1.  Launch FontForge.

2.  Open the custom font file (TTF/OTF).

    <div align="center">
      <p class="image">
        <img src="/images/Wii-U/Wii-U-System-Font-Customization_02.png">
      </p>
    </div>

3.  Go to `Element` → `Font Info...` → `General`.

4.  Set the `Em Size` value to `1000` and click `OK`.
    The custom font size will be adjusted so it matches the Wii U font size.
    Skip if em size is already 1,000.

    <div align="center">
      <p class="image">
        <img src="/images/Wii-U/Wii-U-System-Font-Customization_03.png">
      </p>
    </div>

5.  Go to `View` → `Goto`, input `U+E000` into the text box to jump to the Private Use Area block.

6.  If the custom font contains any non-Wii U glyphs in the PUA block, go to `File` → `Execute Script`, input this code into the text box:

    ```
    fontforge.activeFont().selection.select(("ranges", None), 0xE000, 0xE099)
    fontforge.activeFont().clear()
    ```

    and click `OK`. This will clear out all the non-Wii U glyphs in this block.

    <div align="center">
      <p class="image">
        <img src="/images/Wii-U/Wii-U-System-Font-Customization_04.png">
      </p>
    </div>

7.  Go to `Element` → `Merge Fonts...` and select the Wii U font file.

8.  Click `Yes` when prompted to retain kerning info.

    <div align="center">
      <p class="image">
        <img src="/images/Wii-U/Wii-U-System-Font-Customization_05.png">
      </p>
    </div>

9.  Go to `File` → `Generate Fonts...`.

10. Pick `TrueType` in the combo-box, uncheck `Validate Before Saving`, then click `Generate`.

    <div align="center">
      <p class="image">
        <img src="/images/Wii-U/Wii-U-System-Font-Customization_06.png">
      </p>
    </div>

11. On a File Explorer window, open the merged font file.

    - Make sure the outlines format is `TrueType Outlines`.
      If it's `PostScript Outlines`, you must generate a font as TTF.

    - `TrueType` or `OpenType` on the window title bar doesn't matter, as long as its outlines format is TrueType Outlines.

    <div align="center">
      <p class="image">
        <img src="/images/Wii-U/Wii-U-System-Font-Customization_07.png">
      </p>
    </div>


## Installing the Custom System Font

<!-- Tab links -->
<div class="tab_0">
  <button class="tablinks_0" onclick="openTab_0(event, 'Wii-U_Install')" id="defaultOpen_0">Wii U</button>
  <button class="tablinks_0" onclick="openTab_0(event, 'Cemu_Install')">Cemu</button>
</div>

<!-- Tab content -->
<div id="Wii-U_Install" class="tabcontent_0">
  <ol>
    <li>
      <p>Add the merged font file to <code>SDCARD:/wiiu/fonts</code>.</p>
    </li>
    <li>
      <p>Open the Plugin menu (<code>L + D-Pad ↓ + Select</code>).</p>
    </li>
    <li>
      <p>Go to System Font Replacer.</p>
    </li>
    <li>
      <p>Activate this plugin.</p>
    </li>
    <li>
      <p>Select the merged font file for Standard font.</p>
    </li>
    <li>
      <p>Disable <code>Use custom fonts only for Wii U Menu</code> to apply the font system-wide.</p>
    </li>
    <li>
      <p>Reboot the console.</p>
    </li>
  </ol>

  <p class="note-green">
    The custom system font has been installed!
  </p>
</div>

<!-- Tab content -->
<div id="Cemu_Install" class="tabcontent_0">
  <p>
    You can also install the custom system font to
    <a href="https://cemu.info/" target="_blank">
    Cemu emulator</a>.
  </p>

  <p class="note-info">
    The font files in <code>/Cemu/resources/sharedFonts</code> are replacement system fonts
    which are used if the real system fonts don't exist in a virtual MLC NAND.
    <br>
    Do not add the custom/real system fonts to this folder,
    as those added fonts will be overwritten with replacement ones after Cemu updates.
    <br>
    Instead, the custom/real system fonts should be added to a virtual MLC NAND.
  </p>

  <ol>
    <li>
      <p>Rename the merged font file to <code>CafeStd.ttf</code>.</p>
    </li>
    <li>
      <p>Launch Cemu.</p>
    </li>
    <li>
      <p>Go to <code>File</code> → <code>Open MLC folder</code>.</p>
    </li>
    <li>
      <p>Navigate to <code>/sys/title/0005001b/10042400/content</code>. Create folders if those don’t exist.</p>
    </li>
    <li>
      <p>Add the <code>CafeStd.ttf</code> file here.</p>
    </li>
    <li>
      <p>Launch any of the system apps (if installed) and see how the custom system font looks.</p>
    </li>
  </ol>

  <p class="note-green">
    The custom system font has been installed!
  </p>
</div>


## Restoring the System Font

<!-- Tab links -->
<div class="tab_1">
  <button class="tablinks_1" onclick="openTab_1(event, 'Wii-U_Uninstall')" id="defaultOpen_1">Wii U</button>
  <button class="tablinks_1" onclick="openTab_1(event, 'Cemu_Uninstall')">Cemu</button>
</div>

<!-- Tab content -->
<div id="Wii-U_Uninstall" class="tabcontent_1">
  <ol>
    <li>
      <p>Open the Plugin menu (<code>L + D-Pad ↓ + Select</code>).</p>
    </li>
    <li>
      <p>Go to System Font Replacer.</p>
    </li>
    <li>
      <p>Turn off this plugin.</p>
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
<div id="Cemu_Uninstall" class="tabcontent_1">
  <ol>
    <li>
      <p>Launch Cemu.</p>
    </li>
    <li>
      <p>Go to <code>File</code> → <code>Open MLC folder</code>.</p>
    </li>
    <li>
      <p>Navigate to <code>/sys/title/0005001b/10042400/content</code>.</p>
    </li>
    <li>
      <p>Delete or rename the <code>CafeStd.ttf</code> file.</p>
    </li>
    <li>
      <p>Launch any of the system apps (if installed) and see how the original system font looks.</p>
    </li>
  </ol>

  <p class="note-green">
    The system font has been restored.
  </p>
</div>

<script src="/assets/js/tabs_0.js"></script>
<script src="/assets/js/tabs_1.js"></script>
