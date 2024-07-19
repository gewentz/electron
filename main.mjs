import { app, BrowserWindow } from 'electron';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1240,
    height: 860,
    icon: join(__dirname, 'assets', 'icon.png'),
    title: 'Sell.er',
    webPreferences: {
      preload: join(__dirname, 'preload.mjs'),
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile(join(__dirname, 'src', 'index.html'));
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
