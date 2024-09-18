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


## Getting Started

Aroma custom firmware is required to use the mod.
<a href="https://wiiu.hacks.guide/" target="_blank">
Install CFW if you haven't already.</a>

No system files are modified in the process. The custom system font is loaded into RAM only.

**What you need:**

- <a href="https://fontforge.org/" target="_blank">
  FontForge</a>

- [Wii U font](/files/Wii-U/nintendo_NTLG-DB_002.ttf)

- A font you want to install on a Wii U (TTF or OTF)

- <a href="https://github.com/dkosmari/System-Font-Replacer" target="_blank">
  System Font Replacer plugin</a>


## Merging the Fonts

A Wii U font will be merged into a custom system font so the icon glyphs are preserved.

<div align="center">
  <p class="image">
    <img src="/images/Wii-U/Wii-U-System-Font-Customization_01.png">
  </p>
</div>

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

11. On a File Explorer window, open the generated font file.

    - Make sure the outlines format is `TrueType Outlines`.
      If it's `PostScript Outlines`, you must generate a font as TTF.

    - `TrueType` or `OpenType` on the window title bar doesn't matter, as long as its outlines format is TrueType Outlines.

    <div align="center">
      <p class="image">
        <img src="/images/Wii-U/Wii-U-System-Font-Customization_07.png">
      </p>
    </div>


## Installing the Custom System Font to Wii U

1.  Add the merged font file to `SDCARD:/wiiu/fonts`.

2.  Open the Plugin menu (`L + D-Pad ↓ + Select`).

3.  Go to System Font Replacer.

4.  Select the merged font file for Standard font.

5.  Disable `Use custom fonts only for Wii U Menu` to apply the font system-wide.

6.  Reboot the console.

7.  The custom system font has been installed!


## Installing the Custom System Font to Cemu

You can also install the custom system font to <a href="https://cemu.info/" target="_blank">
Cemu emulator</a>.

1.  Rename the merged font file to `CafeStd.ttf`.

2.  Launch Cemu.

3.  Go to `File` → `Open MLC folder`.

4.  Navigate to `/sys/title/0005001b/10042400/content`. Create folders if those don't exist.

5.  Add the `CafeStd.ttf` file here.

6.  Launch any of the system apps (if installed) and see how the custom system font looks.

<p class="note">
  Do not add the <code>CafeStd.ttf</code> file to <code>/Cemu/resources/sharedFonts</code>,
  those are replacement system fonts which are used if the real system fonts don't exist.
  <br>
  Any custom/real system font files placed in this folder will be overwritten with replacement ones after Cemu updates.
</p>
