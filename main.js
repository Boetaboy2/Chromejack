const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 1180, height: 860, minWidth: 380, minHeight: 600,
    backgroundColor: "#08050f", title: "Chromejack",
    autoHideMenuBar: true,
    webPreferences: { autoplayPolicy: "no-user-gesture-required" }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, "index.html"));
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
