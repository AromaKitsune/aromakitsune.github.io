---
layout: page
title: Wii U - System Font Customisation Guide
permalink: /Wii-U-System-Font-Customization
---

A guide for customising the system-wide font on the Wii U.

<div align="center">
  <div class="image">
    <img src="/images/Wii-U/Pop-Happiness-Font.png">
    <br>
    System Settings with a custom system font &quot;Pop Happiness&quot;.
    <br>
    <a href="/Wii-U-Custom-System-Fonts">
    Download the custom system fonts here</a>
    <br>
  </div>
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

<div class="note-blue">
  <p>
    Aroma custom firmware is required to use the mod.
    <a href="https://wiiu.hacks.guide/" target="_blank">
    Install CFW if you haven't already.</a>
  </p>
</div>

<div class="note-blue">
  <p>
    No system files in the MLC NAND are modified in the process. The custom
    system font is loaded into RAM only, so it's safe to install a custom system
    font without worrying about bricking the console.
  </p>
</div>

### What You Need:

- <a href="https://fontforge.org/" target="_blank">
  FontForge</a>

- [Wii U font](/files/Wii-U/nintendo_NTLG-DB_002.ttf)

- A font you want to install on a Wii U (TTF or OTF)

- <a href="https://github.com/dkosmari/System-Font-Replacer" target="_blank">
  System Font Replacer plugin</a>

Recommended OS: Windows 10 or 11, Linux


## Merging the Fonts

A Wii U font will be merged into a custom system font so the icon glyphs are
preserved.

<div align="center">
  <div class="image">
    <img src="/images/Wii-U/Wii-U-System-Font-Customization_01.png">
  </div>
</div>

There are 2 ways to merge the fonts: CLI & GUI

The CLI method involves in using a Python script that calls the FontForge
program to merge the fonts automatically, while the GUI method involves in using
FontForge itself to merge the fonts manually.

<div class="note-blue">
  <p>
    The CLI method process is shorter than the GUI method.
    If the CLI method does not work for you, try the GUI method instead.
  </p>
</div>

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
          <p>Wii U font - <code>nintendo_NTLG-DB_002.ttf</code></p>
        </li>
        <li>
          <p>
            A custom font - In this case: <code>PopHappiness.ttf</code> (OTF
            also works)
          </p>
        </li>
      </ul>
    </li>
    <li>
      <p>
        Launch the Terminal app by right-clicking on File Explorer's empty space
        and clicking <code>Open in Terminal</code>.
      </p>
      <div align="center">
        <div class="image">
          <img src="/images/Wii-U/Wii-U-System-Font-Customization-Python_1.png">
        </div>
      </div>
    </li>
    <li>
      <p>Input this command (pick one):</p>
      <p>Windows - PowerShell:</p>
      <p class="code-block-wrap">
        &amp; 'C:\Program Files (x86)\FontForgeBuilds\bin\fontforge.exe'
        merge-fonts.py PopHappiness.ttf nintendo_NTLG-DB_002.ttf
        PopHappiness_Merged.ttf
      </p>
      <p>Windows - Command Prompt (CMD):</p>
      <p class="code-block-wrap">
        "C:\Program Files (x86)\FontForgeBuilds\bin\fontforge.exe"
        merge-fonts.py PopHappiness.ttf nintendo_NTLG-DB_002.ttf
        PopHappiness_Merged.ttf
      </p>
      <p>Linux:</p>
      <p class="code-block-wrap">
        fontforge merge-fonts.py PopHappiness.ttf nintendo_NTLG-DB_002.ttf
        PopHappiness_Merged.ttf
      </p>
      <p>
        Those are single line commands - they are wrapped so the whole commands
        are displayed for easy copy without horizontally scrolling.
      </p>
      <div align="center">
        <div class="image">
          <img src="/images/Wii-U/Wii-U-System-Font-Customization-Python_2.png">
        </div>
      </div>
      <p>The fonts have been merged as <code>PopHappiness_Merged.ttf</code>.</p>
      <div align="center">
        <div class="image">
          <img src="/images/Wii-U/Wii-U-System-Font-Customization_07.png">
        </div>
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
        <div class="image">
          <img src="/images/Wii-U/Wii-U-System-Font-Customization_02.png">
        </div>
      </div>
    </li>
    <li>
      <p>
        Go to <code>Element</code> → <code>Font Info...</code> →
        <code>General</code>.
      </p>
    </li>
    <li>
      <p>
        Set the <code>Em Size</code> value to <code>1000</code> and click
        <code>OK</code>. The custom font size will be adjusted so it matches the
        Wii U font size. Skip if the em size is already 1,000.
      </p>
      <div align="center">
        <div class="image">
          <img src="/images/Wii-U/Wii-U-System-Font-Customization_03.png">
        </div>
      </div>
    </li>
    <li>
      <p>
        Go to <code>View</code> → <code>Goto</code>, input <code>U+E000</code>
        into the text box to jump to the Private Use Area block.
      </p>
    </li>
    <li>
      <p>
        If the custom font contains any non-Wii U glyphs in the PUA block, go to
        <code>File</code> → <code>Execute Script</code>, input this code into
        the text box:
      </p>

<pre class="highlight"><code>fontforge.activeFont().selection.select(("ranges", None), 0xE000, 0xE099)
fontforge.activeFont().clear()
</code></pre>

      <p>
        and click <code>OK</code>. This will clear out all the non-Wii U glyphs
        in this block.
      </p>
      <div align="center">
        <div class="image">
          <img src="/images/Wii-U/Wii-U-System-Font-Customization_04.png">
        </div>
      </div>
    </li>
    <li>
      <p>
        Go to <code>Element</code> → <code>Merge Fonts...</code> and select a
        Wii U font file.
      </p>
    </li>
    <li>
      <p>Click <code>Yes</code> when prompted to retain kerning info.</p>
      <div align="center">
        <div class="image">
          <img src="/images/Wii-U/Wii-U-System-Font-Customization_05.png">
        </div>
      </div>
    </li>
    <li>
      <p>Go to <code>File</code> → <code>Generate Fonts...</code>.</p>
    </li>
    <li>
      <p>
        Pick <code>TrueType</code> in the combo-box, uncheck
        <code>Validate Before Saving</code>, then click <code>Generate</code>.
      </p>
      <div align="center">
        <div class="image">
          <img src="/images/Wii-U/Wii-U-System-Font-Customization_06.png">
        </div>
      </div>
    </li>
    <li>
      <p>On a File Explorer window, open the merged font file.</p>
      <ul>
        <li>
          <p>
            Make sure the outlines format is <code>TrueType Outlines</code>.
            The <code>PostScript Outlines</code> fonts won't work with Wii U,
            you must generate a font as TTF.
          </p>
        </li>
        <li>
          <p>
            <code>TrueType</code> or <code>OpenType</code> on the window title
            bar doesn't matter, as long as its outlines format is TrueType
            Outlines.
          </p>
        </li>
      </ul>
      <div align="center">
        <div class="image">
          <img src="/images/Wii-U/Wii-U-System-Font-Customization_07.png">
        </div>
      </div>
    </li>
  </ol>
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
      <p>Add a merged font file to <code>SDCARD:/wiiu/fonts</code>.</p>
    </li>
    <li>
      <p>
        Open the Plugin menu (<code>L</code> + <code>D-Pad ↓</code> +
        <code>Select</code>).
      </p>
    </li>
    <li>
      <p>Go to System Font Replacer.</p>
    </li>
    <li>
      <p>Activate this plugin.</p>
    </li>
    <li>
      <p>Select a merged font file for Standard font.</p>
    </li>
    <li>
      <p>
        Disable <code>Use custom fonts only for Wii U Menu</code> to apply the
        font system-wide.
      </p>
    </li>
    <li>
      <p>Reboot the console.</p>
    </li>
  </ol>

  <div class="note-green">
    <p>
      The custom system font has been installed!
    </p>
  </div>
</div>

<!-- Tab content -->
<div id="Cemu_Install" class="tabcontent_0">
  <p>
    You can also install the custom system font to
    <a href="https://cemu.info/" target="_blank">
    Cemu emulator</a>.
  </p>

  <div class="note-blue">
    <p>
      The font files in <code>/Cemu/resources/sharedFonts</code> are replacement
      system fonts which are used if the real system fonts don't exist in a
      virtual MLC NAND.
    </p>
    <p>
      Do not add the custom/real system fonts to this folder, as those added
      fonts will be overwritten with replacement ones after Cemu updates.
      <br>
      Instead, the custom/real system fonts should be added to a virtual MLC
      NAND.
    </p>
  </div>

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
      <p>
        Navigate to <code>/sys/title/0005001b/10042400/content</code>. Create
        folders if those don't exist.
      </p>
    </li>
    <li>
      <p>Add a <code>CafeStd.ttf</code> file here.</p>
    </li>
    <li>
      <p>
        Launch any of the system apps (if installed) and see how the custom
        system font looks.
      </p>
    </li>
  </ol>

  <div class="note-green">
    <p>
      The custom system font has been installed!
    </p>
  </div>
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
      <p>
        Open the Plugin menu (<code>L</code> + <code>D-Pad ↓</code> +
        <code>Select</code>).
      </p>
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

  <div class="note-green">
    <p>
      The system font has been restored.
    </p>
  </div>
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
      <p>
        Launch any of the system apps (if installed) and see how the original
        system font looks.
      </p>
    </li>
  </ol>

  <div class="note-green">
    <p>
      The system font has been restored.
    </p>
  </div>
</div>

<script src="/assets/js/tabs_0.js"></script>
<script src="/assets/js/tabs_1.js"></script>
<script src="/assets/js/tabs_fullwidth_0.js"></script>
