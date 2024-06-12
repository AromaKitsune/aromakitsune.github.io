---
layout: page
title: 3DS - Home Menu UI Layout Customization
permalink: /3DS-Home-Menu-UI-Layout-Customization
---

A guide for customizing a Home Menu UI layout on the Nintendo 3DS.

---

<div align="center"><p><img src="/images/3DS/3DS-Home-Menu-UI-Layout-Customization_01.gif"/></p></div>


[Check out my custom Home Menu UI here!](/3DS-Custom-Home-Menu-UI)

---

I recommend following [derberg's 3DS Home Menu Customization Guide](https://3ds.codeberg.page/homemenu/) for setup and extraction before proceeding.

If you have any questions, please ask us or me (aromakitsune) on the [Custom 3DS Assets Discord](https://discord.gg/0z7IGZ5Sv3D0mEN0).

The layout file we will be editing is BCLYT. BCLAN (Layout Animation) & BCLIM (Layout Image) editing are not covered in this guide. For BCLAN, check out [lividhen's animations guide](https://menumod.chickenserver.org/animations/).

While Switch-Toolbox can edit many game assets for the 3DS/WiiU/Switch, there is an issue that it corrupts the BCLYT files of Home Menu when editing them, causing Home Menu to crash on startup. This is not the case with the other BCLYT files in some games such as Mario Kart 7.

Let's fix the BCLYT file.

---

**What you need:**
- [Kuriimu2](https://github.com/FanTranslatorsInternational/Kuriimu2)
- [HxD hex editor](https://mh-nexus.de/en/hxd/)
- [Switch-Toolbox](https://github.com/KillzXGaming/Switch-Toolbox)
- Decompressed DARC files (`*.LZ`, not `*_LZ.bin`)

---

**Common layout files**

- `launcher.LZ/blyt/LncBase_U_00.bclyt`
  - The elements such as "L+R" that are displayed on the top screen of the Home Menu, the rest of them are displayed when the running game is suspended. HUD's don't count, as they're stored in the other layout file in `hud.LZ`.

- `launcher.LZ/blyt/LncBase_D_01.bclyt`
  - The elements such as applets that are displayed on the bottom screen.

- `hud.LZ/blyt/HudMenu_00.bclyt`
  - Top screen's HUD's such as date, time, battery, connection status.

- `sleep.LZ/blyt/Slp_U_00.bclyt`
  - The elements that are displayed on the sleep/shutdown screen (top).

- `sleep.LZ/blyt/Slp_D_00.bclyt`
  - The elements that are displayed on the sleep/shutdown screen (bottom).

ℹ️ If you're looking into editing the colors of known UI elements, I suggest checking out derberg's guide, as hex-editing the `*.LZ` files directly is easier.

⚠️ Editing the colors using this method cannot be done again after following this guide. [See this section here.](#ui-element-colors)

---

## Editing the layout

1. Launch Kuriimu2.

2. Drag & drop the `*.LZ` file in the Kuriimu2 window.

3. On the left pane, click the `blyt` folder and the list of items should appear on the right pane.

4. Extract the BCLYT file you want to edit.

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_02.png)

5. Make 3 copies of the extracted BCLYT file, rename each file to prepend with a prefix `A-` / `B-` / `C-`, for example:
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
        Save it as `.bat`, drag & drop the BCLYT file in the batch file, enter the created `bclyt` folder and move on to the next step.

6. Launch Switch-Toolbox

7. Drag & drop the `B.bclyt` file in the Switch-Toolbox window.

8. Do not edit anything, just save. `Ctrl+S` doesn’t have any effect, so click the Save button.
    - You should have the corrupted BCLYT as its file size has been decreased. This is normal.

9. Close the layout editor window.

10. Drag & drop the `C.bclyt` file in the Switch-Toolbox window.

11.	Edit any UI elements however you'd like. There are a few limits of what you can edit
- Refer to the [Assets Documentation](https://docs.google.com/spreadsheets/d/1Q-Im3P5zSqNi6zYqaXtyS138hCdcIJDY7WxRt_FWdrg) for some lists of known panes to edit.
- Each pane has its properties you can edit: positions (translate), size, colors, rotations, transparency, etc.
- To hide the UI elements, untick the `Pane visible` checkbox and set the `Alpha` value to `0`.
- If the UI elements don't actually move to your desired position, then the elements' position values are likely hardcoded in the BCLAN (Layout Animation) files and you have to edit them instead. In this case, the applets' X position values are hardcoded in `launcher.LZ/anim/LncBase_D_01_MvsToggle.bclan` (removes the Miiverse applet from the Korean 3DS system), in which you can only move them vertically. Switch-Toolbox can edit BCLAN files without any issues, so hex editing isn't needed.
- In order to keep the `C.bclyt`'s file size the same as `B.bclyt`'s, you should edit only the values in the Pane and Colors tabs. Adding or removing some items may change the file size which makes it harder to manually fix it with hex editor. Avoid doing the following edits:
  - Adding new Panes
  - Deleting the existing Panes (it may crash on a 3DS, so make them invisible instead)
  - Adding/removing links to textures in the Texture Maps tab 
  - Editing the texts in the Text Pane. You should edit the MSBT files instead

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_03.png)

12.	When done editing, click the Save button and you can close Switch-Toolbox.

    - You should have another corrupted BCLYT file. (Again, this is normal.) The file size of the edited BCLYT has been decreased by 432 bytes. Make sure both the `B.bclyt`'s and `C.bclyt`'s file sizes are the same. We will be restoring them on the next steps.

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_04.png)

13.	Launch HxD hex editor.

14.	Drag those 3 BCLYT files in the HxD window. Make sure those tabs are in the correct order: `A.bclyt`, `B.bclyt`, `C.bclyt`.

15.	Click the `C.bclyt` tab, then the `B.bclyt` tab.

16.	Press `Ctrl+K` to compare between the `B.bclyt` & `C.bclyt` files, click `OK`.

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_05.png)

17.	Click the Maximize button on one of the MDI windows.

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_06.png)

18.	Go to the `B.bclyt` tab.

19.	Position a cursor before the selected byte (ex: 0x1567).

20.	Select a few lines of bytes forward (ex: from `80` to `3F`).

21.	Copy

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_07.png)

22.	Go to the `A.bclyt` tab.

23.	Press `Ctrl+F` to find.

24.	Go to the `Hex-values` tab.

25.	Paste into the `Search for` box and click `OK`. Make sure that there is only 1 result by clicking `All` and `Search all`. If it yields multiple results, try selecting more bytes on the `B.bclyt` tab.

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_08.png)

26.	Position a cursor before the selected bytes (ex: 0x1717).

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_09.png)

27.	Click to deselect.

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_10.png)

28.	Select the bytes from here, all the way to 0x0 by pressing `Ctrl+Shift+Home`.

29.	Copy.

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_11.png)

30.	Go to the `C.bclyt` tab.

31.	Position a cursor before the selected byte (ex: 0x1567).

32.	Click to deselect.

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_12.png)

33.	Select the bytes from here, all the way to 0x0 by pressing `Ctrl+Shift+Home`.

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_13.png)

34.	Paste with `Ctrl+V`. Don't paste-overwrite with `Ctrl+B`.

    - The bytes at the beginning of the edited BCLYT are restored.

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_14.png)

35.	If done correctly, save it and close HxD.

    - Now we have fixed the BCLYT file! `A.bclyt`, `B.bclyt` and `C.bclyt.bak` can be deleted as they're not needed anymore. To make another edit to a fixed BCLYT, make 3 copies of the `C.bclyt` file and repeat step 5.

    ![](/images/3DS/3DS-Home-Menu-UI-Layout-Customization_15.png)

36.	Go back to Kuriimu2.

37.	Right-click the BCLYT file you extracted earlier.

38.	Select Replace and pick the `C.bclyt` file (not `C.bclyt.bak` that HxD created).

39.	Save.

40.	Compress the `*.LZ` file and that's it! You can now apply your edited UI to the Home Menu on your 3DS using LayeredFS or build a CIA file.

---

## UI element colors

⚠️ After importing the BCLYT/BCLAN/BCLIM files into the `*.LZ` files with Kuriimu2, the offsets for the color values are no longer the same, as these values have been moved to different addresses. If you did that already, you have to hex-edit the BCLYT files instead.

- Each value consists of 4 bytes for color & alpha (`RR GG BB AA`). I suggest changing only the RGB values.

Applets - `launcher.LZ/blyt/LncBase_D_01.bclyt`

Icon             | Color 1 | Color 2
---------------- | ------- | -------
Game Notes       | 0x878   | 0x87C
Friend List      | 0x79C   | 0x7A0
Notifications    | 0x6C0   | 0x6C4
Internet Browser | 0x5E4   | 0x5E8
Miiverse         | 0x508   | 0x50C
