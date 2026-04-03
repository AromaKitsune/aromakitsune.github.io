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
    You are about to modify system files in the MLC/SLC NAND! Be careful not to
    randomly delete any system files.
  </p>
</div>


## Custom Software Keyboard Layout

A custom software keyboard layout made by RoGamer97, it contains additional
glyphs/symbols that can be typed in.

### Download from:

<a href="https://youtu.be/Ddflr63MkSM" target="_blank">
RoGamer97's YouTube video</a>

Please watch this video carefully! Ro tells you to backup your original keyboard
so you can restore it if you dont want their keyboard anymore!


## Remove Profanity Filter

A mod that completely removes the profanity filter from the system, allowing you
to type profanity words.

Based on a 3DS version of profanity filter removal mod by
<a href="https://www.reddit.com/r/3dshacks/comments/w9vmtw/" target="_blank">
SeanTheGleaming on r/3DSHacks Reddit</a>.

### Download:

<a href="/files/Wii-U/DisableProfanityFilter.zip">
  <button class="download-button">
    <i class="fa fa-download"></i> Disable profanity filter
  </button> 
</a>

- [Enable profanity filter](/files/Wii-U/EnableProfanityFilter.zip)

<details class="expandable-details">
  <summary>
    <b>Installation</b>
  </summary>
  <div class="note-blue-nested">
    <p>This setup requires:</p>
    <ul>
      <li>
        <p>
          FTPiiU plugin for Wii U - Download this plugin from the Aroma Updater
          app
        </p>
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

  <ol>
    <li>
      <p>
        Open the Plugin menu (<code>L</code> + <code>D-Pad ↓</code> +
        <code>Select</code>).
      </p>
    </li>
    <li>
      <p>Go to FTPiiU.</p>
    </li>
    <li>
      <p>Allow access to system files.</p>
    </li>
    <li>
      <p>Take a note of the Wii U console’s IP address.</p>
    </li>
    <li>
      <p>On PC, launch the FTP client app.</p>
    </li>
    <li>
      <p>Connect to the Wii U console with an IP address.</p>
    </li>
    <li>
      <p>
        Navigate to
        <code>/storage_mlc/sys/title/0005001b/10053000/content</code>.
      </p>
    </li>
    <li>
      <p>Unpack the downloaded archive file.</p>
    </li>
    <li>
      <p>
        Copy the contents (<code>*.txt</code> files) to the <code>content</code>
        folder, overwriting those.
      </p>
    </li>
    <li>
      <p>Reboot the console.</p>
    </li>
  </ol>
</details>

<div class="note-yellow">
  <p>
    Do not send something offensive on Pretendo Network. You may get banned from
    this service for doing so.
  </p>
</div>
