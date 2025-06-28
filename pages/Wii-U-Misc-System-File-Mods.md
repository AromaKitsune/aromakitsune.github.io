---
layout: page
title: Wii U - Misc System File Mods
permalink: /Wii-U-Misc-System-File-Mods
---

A variety of miscellaneous system file mods for the Wii U.

<p class="note-blue">
  Aroma custom firmware is required to use the mod.
  <a href="https://wiiu.hacks.guide/" target="_blank">
  Install CFW if you haven't already.</a>
</p>

<p class="note-yellow">
  You are about to modify system files in the MLC/SLC NAND! Proceed with caution.
</p>


## Custom Keyboard Layout

A custom keyboard layout made by RoGamer97, it contains additional glyphs/symbols that can be typed in.

### Download:

[from RoGamer97's YouTube video](https://youtu.be/Ddflr63MkSM)

Please watch this video carefuly! Ro tells you to backup your original keyboard so you can restore it if you dont want their keyboard anymore!


## Remove Profanity Filter

A mod that completely removes the profanity filter from the system, allowing you to type profanity words.

Based on a 3DS version of profanity filter removal mod by [SeanTheGleaming on r/3DSHacks Reddit](https://www.reddit.com/r/3dshacks/comments/w9vmtw).

### Download:

- [Disable filter](/files/Wii-U/DisableFilter.zip)

- [Enable filter](/files/Wii-U/EnableFilter.zip)

### Installation

This setup requires FTPiiU for Wii U, FTP client such as WinSCP for PC.

1. Open the Plugin menu (`L` + `D-Pad ↓` + `Select`).

2. Go to FTPiiU.

3. Allow access to system files.

4. Take a note of the Wii U console's IP address.

5. On PC, launch WinSCP.

6. Connect to the Wii U console with an IP address.

7. Navigate to `/storage_mlc/sys/title/0005001b/10053000/content`.

8. Unpack the downloaded archive file and copy the contents to the `content` folder, overwriting those.

9. Reboot the console.

<p class="note-yellow">
  Take care not to send something offensive on custom online services such as Pretendo Network.
  You may get banned from those services for doing so.
</p>
