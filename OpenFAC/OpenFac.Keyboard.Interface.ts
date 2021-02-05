/* 
[POR] Criado por Alexandre Henzen
Script para executar os botões do teclado
O Script chama os seguintes arquivos .ts:
OpenFac.KeyboardButton.

[ENG] Created by Alexandre Henzen
Keyboard button execution Script
Script calls the following .ts files:
OpenFac.KeyboardButton.

*/
import { OpenFacKeyboardButton } from "./OpenFac.KeyboardButton";

export interface IOpenFacKeyboard {
    DoAction(button: OpenFacKeyboardButton): void;
}