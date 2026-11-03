import { addDivider, DIVIDER_URL } from './add-divider.js';

chrome.action.onClicked.addListener(() => addDivider());

// Open the divider page once on install. Loading it is what makes Chrome save
// its line icon, which every divider bookmark then shows.
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') chrome.tabs.create({ url: DIVIDER_URL });
});
