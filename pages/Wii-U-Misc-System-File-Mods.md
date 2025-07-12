---
layout: page
title: Wii U - Misc System File Mods
permalink: /Wii-U-Misc-System-File-Mods
---

A variety of miscellaneous system file mods for the Wii U.

<div class="note-blue">
  <p>
    Aroma custom firmware is required to use the mod.
    <a href="https://wiiu.hacks.guide/" target="_blank">
    Install CFW if you haven't already.</a>
  </p>
</div>

<div class="note-yellow">
  <p>
    You are about to modify system files in the MLC/SLC NAND!
    Be careful not to randomly delete any system files.
  </p>
</div>


## Custom Keyboard Layout

A custom keyboard layout made by RoGamer97, it contains additional glyphs/symbols that can be typed in.

### Download from:

<a href="https://youtu.be/Ddflr63MkSM" target="_blank">
RoGamer97's YouTube video</a>

Please watch this video carefuly! Ro tells you to backup your original keyboard so you can restore it if you dont want their keyboard anymore!


## Remove Profanity Filter

A mod that completely removes the profanity filter from the system, allowing you to type profanity words.

Based on a 3DS version of profanity filter removal mod by
<a href="https://www.reddit.com/r/3dshacks/comments/w9vmtw" target="_blank">
SeanTheGleaming on r/3DSHacks Reddit</a>.

### Download:

- [Disable filter](/files/Wii-U/DisableFilter.zip)

- [Enable filter](/files/Wii-U/EnableFilter.zip)

### Installation

<div class="note-blue">
  <p>This setup requires:</p>
  <ul>
    <li>
      <p>FTPiiU plugin for Wii U - Download this plugin from the Aroma Updater app</p>
    </li>
    <li>
      <p>
        FTP client for PC - Download
        <a href="https://winscp.net/" target="_blank">
        WinSCP</a> for Windows, or FileZilla for Linux or macOS
      </p>
    </li>
  </ul>
</div>

1. Open the Plugin menu (`L` + `D-Pad ↓` + `Select`).

2. Go to FTPiiU.

3. Allow access to system files.

4. Take a note of the Wii U console's IP address.

5. On PC, launch the FTP client app.

6. Connect to the Wii U console with an IP address.

7. Navigate to `/storage_mlc/sys/title/0005001b/10053000/content`.

8. Unpack the downloaded archive file.

9. Copy the contents (`*.txt` files) to the `content` folder, overwriting those.

10. Reboot the console.

<div class="note-yellow">
  <p>
    Do not send something offensive on Pretendo Network.
    You may get banned from this service for doing so.
  </p>
</div>
