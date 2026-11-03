// Every divider is a bookmark to divider.html with an empty title, so the bar
// shows only that page's favicon: a thin vertical line.
export const DIVIDER_URL = chrome.runtime.getURL('divider.html');

// Newer Chrome can hold two bookmarks bars (local and account). Use the one
// with the most bookmarks, which is the one you are looking at.
async function bookmarksBarId() {
  const [root] = await chrome.bookmarks.getTree();
  const bars = root.children.filter(n => n.folderType === 'bookmarks-bar');
  if (!bars.length) return '1';
  bars.sort((a, b) => (b.children?.length ?? 0) - (a.children?.length ?? 0));
  return bars[0].id;
}

// New dividers go at the far left, where they are always visible, ready to drag.
export async function addDivider() {
  return chrome.bookmarks.create({
    parentId: await bookmarksBarId(),
    index: 0,
    title: '',
    url: DIVIDER_URL,
  });
}
