import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

const electron = require('electron');

let win: BrowserWindow;
let Menu = electron.Menu;

app.on('ready', () => {
    createWindow();
    const template = [{
        label: ''
    }];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
});


app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/angular-electron/index.html`),
            protocol: 'file:',
            slashes: true
        })
    );

    // AMBIENTE DE DESENVOLVEDOR
    // win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}
