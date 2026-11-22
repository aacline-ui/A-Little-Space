const button = document.getElementById('copy-link');
if(button) button.addEventListener('click', async () => {
 const status = document.getElementById('share-status');
 try { await navigator.clipboard.writeText(window.location.origin + window.location.pathname); status.textContent = 'Post link copied.'; }
 catch { status.textContent = 'Copy the address from your browser’s address bar.'; }
});