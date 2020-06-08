"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var electron = require('electron');
var win;
var Menu = electron.Menu;
electron_1.app.on('ready', function () {
    createWindow();
    var template = [{
            label: ''
        }];
    var menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
});
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/angular-electron/index.html"),
        protocol: 'file:',
        slashes: true
    }));
    // AMBIENTE DE DESENVOLVEDOR
    // win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
//# sourceMappingURL=main.js.map