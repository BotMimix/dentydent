const { app, BrowserWindow, ipcMain, globalShortcut } = require("electron");
const path = require("path");

class RegisterScreen {
  window;

  position = {
    width: 700,
    height: 600,
    maximized: true,
  };

  constructor() {
    this.window = new BrowserWindow({
      width: this.position.width,
      height: this.position.height,
      title: "Dentiva",
      show: false,
      autoHideMenuBar: true,
      fullscreen: true,
      icon: path.join(__dirname, "content/dentivaColor.ico"),
      acceptFirstMouse: true,
      webPreferences: {
        contextIsolation: true,
        preload: path.join(__dirname, "./registerPreload.js"),
      },
    });

    this.window.once("ready-to-show", () => {
      this.window.show();

      if (this.position.maximized) {
        this.window.maximize();
      }
    });

    this.handleMessages();

    // let wc = this.window.webContents;
    // wc.openDevTools({ mode: "undocked" });

    this.window.loadFile("./screens/register/register.html");
  }

  showMessage(message) {
    console.log("showMessage trapped");
    console.log(message);
    this.window.webContents.send("updateMessage", message);
  }

  close() {
    this.window.close();
    ipcMain.removeAllListeners();
  }

  hide() {
    this.window.hide();
  }

  handleMessages() {
    //Ipc functions go here.
  }
}

module.exports = RegisterScreen;
