import { addDivider } from './add-divider.js';

const status = document.getElementById('status');

document.getElementById('add').addEventListener('click', async () => {
  try {
    await addDivider();
    status.textContent = 'Added at the far left of your bookmarks bar. Drag it where you want it.';
  } catch (e) {
    status.textContent = 'Could not add a divider: ' + e.message;
  }
});
