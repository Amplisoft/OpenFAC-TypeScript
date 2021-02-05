/* 
[POR] Criado por Alexandre Henzen
Script para configuração e impressão da interface.
O Script chama os seguintes arquivos .ts:
OpenFac.KeyboardManager;
OpenFac.Keyboard.

[ENG] Created by Alexandre Henzen
Interface creation and printing script.
Script calls the following .ts files:
OpenFac.KeyboardManager;
OpenFac.Keyboard.

*/
import { OpenFacKeyboardManager } from './OpenFac.KeyboardManager';
import { OpenFacKeyboard } from './OpenFac.Keyboard';

export enum EngineScanType {
    ScanAuto,
    ScanManual
}

export interface IOpenFacConfig {
    GetKeyboardManager(): OpenFacKeyboardManager;
    GetCurrentKeyboard(): OpenFacKeyboard;
    GetScanType(): EngineScanType;
    GetActiveSensor(): string;
};