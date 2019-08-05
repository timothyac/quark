import { ipcMain, Event as ElectronEvent, } from 'electron';

ipcMain.on('click', (_event: ElectronEvent,) => {
  console.log('Recieved click event from render process')
});