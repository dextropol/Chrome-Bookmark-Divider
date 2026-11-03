# Bookmark Divider

A tiny Chrome extension that adds thin divider lines to the bookmarks bar, so
you can split your bookmarks into groups.

Each divider is a bookmark with no name, so Chrome shows only its icon: a
2 × 16 px line in `#181818`, the same as the separator Chrome already draws
after the Apps button on a dark theme.

## Install

1. Download this repository: green **Code** button → **Download ZIP**, then
   unzip it.
2. Open `chrome://extensions` and switch on **Developer mode** (top right).
3. Click **Load unpacked** and pick the unzipped folder (the one that has
   `manifest.json` in it).
4. A "Bookmark Divider" page opens. Click **Add a divider**.

## Use

- **Add:** the button on that page, or the Extensions menu (puzzle piece) →
  **Bookmark Divider**. New dividers appear at the far left of the bar.
- **Move:** drag a divider along the bookmarks bar.
- **Remove:** right-click it → **Delete**.

Clicking a divider just opens the Bookmark Divider page. Nothing else happens.

## Good to know

- **Permissions:** only `bookmarks`, to create the dividers. It runs nothing
  on websites, makes no network requests and collects no data.
- **Fixed ID:** the manifest carries a key, so the extension always has the
  ID `nbmeakfemjdgpikaedalhnjghpplmfog`, whichever folder or computer it is
  loaded from. Dividers synced to another PC still work there once the
  extension is installed on it too.
- **Keep the folder:** Chrome loads an unpacked extension from its folder
  every time it starts. If you move or delete the folder, load it again from
  the new place; your dividers keep working.
- **Light theme:** the line is dark, made for Chrome's dark theme. It still
  shows on a light theme, just with more contrast.
