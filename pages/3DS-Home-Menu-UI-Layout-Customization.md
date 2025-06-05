---
layout: page
title: 3DS - Home Menu UI Layout Customization Guide
permalink: /3DS-Home-Menu-UI-Layout-Customization
---

A guide for customizing the Home Menu UI layout (BCLYT files) on the Nintendo 3DS.

<div align="center">
  <p class="image">
    <img src="/images/3DS/3DS-Custom-Home-Menu-UI_1.gif">
    <br>
    Custom Home Menu UI mod by me.
    <br>
    <a href="/3DS-Custom-Home-Menu-UI">
    Download this mod here</a>
    <br>
  </p>
</div>

<p class="note-blue">
  If this is your first time modding the 3DS Home Menu, follow
  <a href="https://3ds.codeberg.page/homemenu/" target="_blank">
  derberg's 3DS Home Menu Customization Guide</a>
  for setup and extraction before proceeding.
</p>

<p class="note-blue">
  We have a Discord server dedicated to 3DS system UI customizations:
  <a href="https://discord.gg/0z7IGZ5Sv3D0mEN0" target="_blank">
  Custom 3DS Assets</a>
  <br>
  Ask us or me (AromaKitsune) for help with UI customizations.
  <br>
  <small>
    Note: I don't run this Discord server.
  </small>
</p>

<details class="expandable-details">
  <summary>
    <b>BCLYT files info</b>
  </summary>
  <p>
    BCLYT files are the layout files used on the 3DS, they control how UI elements and HUD's are shown in games. It is similar to BRLYT files used on the Wii.
  </p>
  <p>
    BCLAN (Layout Animation) and BCLIM (Layout Image) editing are not covered in this guide.
    For BCLAN, check out
    <a href="https://menumod.chickenserver.org/animations/" target="_blank">
    lividhen's animations guide</a>,
    it covers only the spinning animation.
  </p>
  <p>
    We will be editing the BCLYT files with Switch-Toolbox, a tool that edits many game assets for the 3DS, Wii U, and Switch.
  </p>
  <p>
    This is not simple, Switch-Toolbox's layout editor has a bug that it corrupts the BCLYT files of Home Menu when editing them,
    resulting in broken UI elements or Home Menu crash. This is not the case with the other BCLYT files in some games such as Mario Kart 7.
  </p>
  <p>
    Let's fix the BCLYT file.
  </p>
</details>

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
        <a href="#preparing-for-ui-layout-customization">
        Preparing for UI Layout Customization</a>
      </p>
    </li>
    <li>
      <p>
        <a href="#editing-the-ui-layout">
        Editing the UI Layout</a>
      </p>
    </li>
    <li>
      <p>
        <a href="#fixing-the-ui-layout-file">
        Fixing the UI Layout File</a>
      </p>
    </li>
    <li>
      <p>
        <a href="#ui-element-colors">
        UI Element Colors</a>
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
  Modifying the Home Menu applet is safe since Boot9Strap provides brick protection,
  allowing recovery with GodMode9.
  If you messed up and the Home Menu fails to launch,
  use GodMode9 to restore the Home Menu applet.
</p>

<p class="note-red">
  Never uninstall CFW while any modded system files are installed,
  doing so will remove Boot9Strap and <b>fully</b> brick the console!
  If you fully bricked your console, you'll need a
  <a href="https://www.flashcarts.net/ds-quick-start-guide" target="_blank">
  DS flashcart with ntrboot</a>
  to re-install Boot9Strap to unbrick your console.
</p>

### What You Need:

- <a href="https://github.com/FanTranslatorsInternational/Kuriimu2" target="_blank">
  Kuriimu2</a>

- <a href="https://dotnet.microsoft.com/en-us/download/dotnet/3.1" target="_blank">
  .NET Desktop Runtime 3.1</a>
  for Kuriimu2 to launch

- <a href="https://mh-nexus.de/en/hxd/" target="_blank">
  HxD - Hex Editor</a>

- <a href="https://github.com/KillzXGaming/Switch-Toolbox" target="_blank">
  Switch-Toolbox</a>

- DARC files, can be either compressed (`*_LZ.bin`) or decompressed (`*.LZ`)


## Preparing for UI Layout Customization

Here's a list of known layout files for customization.

<table>
  <thead>
    <tr>
      <th>File</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p class="code-block-wrap">launcher.LZ/blyt/LncBase_U_00.bclyt</p></td>
      <td>
        Top screen layout - &quot;L+R&quot; caption, notification caption, suspended game info.
        For HUD's, those are stored in the <code>hud.LZ</code> file.
      </td>
    </tr>
    <tr>
      <td><p class="code-block-wrap">launcher.LZ/blyt/LncBase_D_01.bclyt</p></td>
      <td>
        Bottom screen layout - The UI elements whose colors are not customizable by Themes are the applets
      </td>
    </tr>
    <tr>
      <td><p class="code-block-wrap">hud.LZ/blyt/HudMenu_00.bclyt</p></td>
      <td>
        Top screen HUD's - date, time, battery, connection status, Play Coins & steps counter
      </td>
    </tr>
    <tr>
      <td><p class="code-block-wrap">sleep.LZ/blyt/Slp_U_00.bclyt</p></td>
      <td>
        Sleep/Shutdown screen (top)
      </td>
    </tr>
    <tr>
      <td><p class="code-block-wrap">sleep.LZ/blyt/Slp_D_00.bclyt</p></td>
      <td>
        Sleep/Shutdown screen (bottom)
      </td>
    </tr>
  </tbody>
</table>

To find other layouts:

1.  Launch Switch-Toolbox.

2.  Drag & drop the `*.LZ` file in the Switch-Toolbox window.

3.  Search for the `bclyt` files and open any of those to see what it looks like. You might know what those layouts are, based on their file names.

<p class="note-blue">
  Once you found what you're looking for, you can close Switch-Toolbox.
</p>

<p class="note-blue">
  If you're looking into editing the UI colors for <code>sleep.LZ</code> and applet icons (<code>launcher.LZ</code>),
  I suggest checking out
  <a href="https://3ds.codeberg.page/homemenu/" target="_blank">
  derberg's Home Menu customization guide</a>
  for those, as hex-editing the <code>*.LZ</code> files directly is easier.
  <br>
  Note: Once you import/replace any files into the <code>*.LZ</code> files, the color values are moved to different addresses.
  <a href="#ui-element-colors">
  See this section here.</a>
</p>


## Editing the UI Layout

1.  Launch Kuriimu2.

2.  Drag & drop the `*.LZ` file in the Kuriimu2 window.

    - If it asks for a plugin, Kuriimu2 doesn't support some archive files.
      [Try this version of Kuriimu2.](/files/3DS/Kuriimu2_1.2.1-2524747179.zip)

3.  On the left pane, click the `blyt` folder and the list of items should appear on the right pane.

4.  Extract the BCLYT file you want to edit.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_01.png">
      </p>
    </div>

5.  Make 3 copies of the extracted BCLYT file, prepend `A-`, `B-` and `C-` to each file name, for example:

    - `A-LncBase_D_01.bclyt` or `A.bclyt`

    - `B-LncBase_D_01.bclyt` or `B.bclyt`

    - `C-LncBase_D_01.bclyt` or `C.bclyt`

    - To make the setup easier, create a batch file that automatically does that:

      ```
      md bclyt
      copy %1 bclyt\A.bclyt
      copy %1 bclyt\B.bclyt
      copy %1 bclyt\C.bclyt
      ```

      Save it as `.bat`/`.cmd`, drag & drop the BCLYT file in the batch file, enter the created `bclyt` folder and move on to the next step.

6.  Launch Switch-Toolbox.

7.  Drag & drop the `B.bclyt` file in the Switch-Toolbox window.

8.  Do not edit anything, just save. `Ctrl`+`S` isn't coded to save in Layout Editor, so click the `💾` save button and the "saved" dialog should appear.

    - You should have the corrupted BCLYT file as its file size has been decreased. This is normal.

9.  Close the layout editor window.

10. Drag & drop the `C.bclyt` file in the Switch-Toolbox window.

11. Edit any UI elements however you like.

    <div align="center">
      <p class="image">
        <a href="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_02.png">
          <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_02.png">
        </a>
        <br>
        <small>
          Click the screenshot for full view.
        </small>
      </p>
    </div>

    - Refer to the
      <a href="https://docs.google.com/spreadsheets/d/1Q-Im3P5zSqNi6zYqaXtyS138hCdcIJDY7WxRt_FWdrg" target="_blank">
      Assets Documentation</a>
      for some lists of known panes to edit.

    - Each pane has its properties you can edit: positions (translate), size, colors, rotations, transparency, etc.
      You can even change the Picture Panes' size, allowing you to import the BCLIM (Layout Image) files with larger dimensions.

    - To hide the UI elements, untick the `Pane visible` checkbox and set the `Alpha` value to `0`.

    - If the UI elements don't actually move to your desired position, then the elements' position values are likely hardcoded in the BCLAN (Layout Animation) files
      and you have to edit them instead.

        - One example of this case is the applets on the bottom screen - the applets' horizontal position values are hardcoded in
      `launcher.LZ/anim/LncBase_D_01_MvsToggle.bclan`, this file is used for
      <a href="https://tcrf.net/Nintendo_3DS#Home_Menu_.2B_Revisions" target="_blank">
      removing the Miiverse applet from the Korean 3DS systems</a>.
      As a result, you can only move them vertically. To move them freely, edit the BCLAN file with Switch-Toolbox.
      Note: Hex editing isn't needed as Switch-Toolbox doesn't corrupt BCLAN files.

    - In order to keep the `C.bclyt`'s file size the same as `B.bclyt` file's, you should edit only the values in the Pane and Colors tabs.
      Adding or removing some items may change the file size which makes it more difficult to manually fix it with hex editor. Avoid doing the following edits:

        - Adding new Panes

        - Deleting the existing Panes - It will crash Home Menu, so make them invisible instead.

        - Adding/removing links to textures in the Texture Maps tab 

        - Editing the texts in the Text Pane - You should
          <a href="https://github.com/IcySon55/3DLandMSBTeditor" target="_blank">
          edit the MSBT files</a>
          instead.

12. When done editing, click the `💾` save button and you can close Switch-Toolbox.

    - You should have another corrupted BCLYT file. Again, this is normal. The file size of the edited BCLYT file has been decreased by 432 bytes.
      Make sure both the `B.bclyt`'s and `C.bclyt`'s file sizes are the same. We will be restoring them on the next steps.

    <div align="center">
      <p class="image">
        <a href="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_03.png">
          <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_03.png">
        </a>
        <br>
        <small>
          Click the screenshot for full view.
        </small>
      </p>
    </div>


## Fixing the UI Layout File

1.  Launch HxD hex editor.

2.  Drag those 3 BCLYT files in the HxD window. Make sure those tabs are in the correct order: `A.bclyt`, `B.bclyt`, `C.bclyt`.

3.  Click the `C.bclyt` tab, then the `B.bclyt` tab.

4.  Press `Ctrl`+`K` to compare between the `B.bclyt` & `C.bclyt` files, click `OK`.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_04.png">
      </p>
    </div>

5.  Click the Maximize button on one of the MDI windows.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_05.png">
      </p>
    </div>

6.  Go to the `B.bclyt` tab.

7.  Position the cursor before the selected byte (ex: `0x1567`).

8.  Select a few lines of bytes forward (ex: from `80` to `3F`).

9.  Copy.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_06.png">
      </p>
    </div>

10. Go to the `A.bclyt` tab.

11. Press `Ctrl`+`F` to find.

12. Go to the `Hex-values` tab.

13. Paste into the `Search for` box and click `OK`. Make sure that there is only 1 result by clicking `All` and `Search all`.
    If it yields multiple results, try selecting more bytes on the `B.bclyt` tab.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_07.png">
      </p>
    </div>

14. Position the cursor before the selected bytes (ex: `0x1717`).

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_08.png">
      </p>
    </div>

15. Click to deselect.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_09.png">
      </p>
    </div>

16. Select the bytes from here, all the way to `0x0` by pressing `Ctrl`+`Shift`+`Home`.

17. Copy.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_10.png">
      </p>
    </div>

18. Go to the `C.bclyt` tab.

19. Same as before: Position the cursor before the selected byte (ex: `0x1567`).

20. Click to deselect.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_11.png">
      </p>
    </div>

21. Select the bytes from here, all the way to `0x0` by pressing `Ctrl`+`Shift`+`Home`.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_12.png">
      </p>
    </div>

22. Paste with `Ctrl`+`V`. Don't paste-overwrite with `Ctrl`+`B`.

    - The bytes at the beginning of the edited BCLYT file are restored.

    <div align="center">
      <p class="image">
        <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_13.png">
      </p>
    </div>

23. If done correctly, save it and close HxD.

    - Now we have fixed the BCLYT file!

    - The `A.bclyt`, `B.bclyt` and `C.bclyt.bak` files can be deleted as they're not needed anymore.

    - To make another edit to the fixed BCLYT file, make 3 copies of the `C.bclyt` file and repeat
      step 5 of the [Editing the UI Layout](#editing-the-ui-layout) section.

    <div align="center">
      <p class="image">
        <a href="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_14.png">
          <img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_14.png">
        </a>
        <br>
        <small>
          Click the screenshot for full view.
        </small>
      </p>
    </div>

24. Go back to Kuriimu2.

25. Right-click the BCLYT file you extracted earlier.

26. Select `Replace` and pick the `C.bclyt` file (not `C.bclyt.bak`).

27. Save.

28. Compress the `*.LZ` file and that's it! You can now apply your edited UI to the Home Menu on your 3DS using LayeredFS or build the CIA file.


## UI Element Colors

After importing the BCLYT/BCLAN/BCLIM files into the `*.LZ` files with Kuriimu2, the offsets for the color values are no longer the same,
as these values have been moved to different addresses. If you did that already, you have to hex-edit the BCLYT files instead.

Each value consists of 4 bytes for color & alpha (`RR GG BB AA`). I suggest changing only the RGB values.

Applets - `launcher.LZ/blyt/LncBase_D_01.bclyt`

<table>
  <thead>
    <tr>
      <th>Applet icon</th>
      <th>Color 1</th>
      <th>Color 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Game Notes</td>
      <td style="background-color:#DBBD00; color:#000000">0x878<br>#DBBD00</td>
      <td style="background-color:#FFC600; color:#000000">0x87C<br>#FFC600</td>
    </tr>
    <tr>
      <td>Friend List</td>
      <td style="background-color:#FB7A18; color:#000000">0x79C<br>#FB7A18</td>
      <td style="background-color:#F39900; color:#000000">0x7A0<br>#F39900</td>
    </tr>
    <tr>
      <td>Notifications</td>
      <td style="background-color:#00B294; color:#000000">0x6C0<br>#00B294</td>
      <td style="background-color:#00DA9C; color:#000000">0x6C4<br>#00DA9C</td>
    </tr>
    <tr>
      <td>Internet Browser</td>
      <td style="background-color:#4575FA; color:#000000">0x5E4<br>#4575FA</td>
      <td style="background-color:#1290FF; color:#000000">0x5E8<br>#1290FF</td>
    </tr>
    <tr>
      <td>Miiverse</td>
      <td style="background-color:#30B70E; color:#000000">0x508<br>#30B70E</td>
      <td style="background-color:#49E415; color:#000000">0x50C<br>#49E415</td>
    </tr>
  </tbody>
</table>

HUD - `hud.LZ/blyt/HudMenu_00.bclyt`

<table>
  <thead>
    <tr>
      <th>HUD element</th>
      <th>Color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Battery - Normal?</td>
      <td style="background-color:#32FFFF; color:#000000">0x248<br>#32FFFF</td>
    </tr>
    <tr>
      <td>Battery - Normal</td>
      <td style="background-color:#23AAE6; color:#000000">0x724<br>#23AAE6</td>
    </tr>
    <tr>
      <td>Battery - Low</td>
      <td style="background-color:#F57D41; color:#000000">0x738<br>#F57D41</td>
    </tr>
    <tr>
      <td>Battery - Charging</td>
      <td style="background-color:#F57D41; color:#000000">0x7F4<br>#F57D41</td>
    </tr>
    <tr>
      <td>Battery - Charger icon</td>
      <td style="background-color:#323232; color:#FFFFFF">0x888<br>#323232</td>
    </tr>
    <tr>
      <td>Battery - Charger BG</td>
      <td style="background-color:#FF732E; color:#000000">0x8F8<br>#FF732E</td>
    </tr>
    <tr>
      <td>Battery - Fully charged</td>
      <td style="background-color:#23AFE6; color:#000000">0x8E4<br>#23AFE6</td>
    </tr>
  </tbody>
</table>
