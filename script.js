// Hide progress bar when loaded
const modelViewer = document.querySelector('model-viewer');
const progressBar = document.querySelector('.progress-bar');
const updateBar = document.querySelector('.update-bar');

modelViewer.addEventListener('progress', (event) => {
  updateBar.style.width = `${event.detail.totalProgress * 100}%`;
});

modelViewer.addEventListener('load', () => {
  progressBar.classList.add('hide');
});

// Fade out hint after interaction
modelViewer.addEventListener('interaction-prompt', () => {
  document.querySelector('.controls-hint').style.opacity = '0';
});

modelViewer.addEventListener('camera-change', () => {
  document.querySelector('.controls-hint').style.opacity = '0';
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Check saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');

root.setAttribute('data-theme', initialTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
