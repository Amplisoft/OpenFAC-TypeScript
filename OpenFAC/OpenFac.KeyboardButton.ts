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
import { IOpenFacAction } from './OpenFac.Action.Interface';

export class OpenFacKeyboardButton {
    public Items: Array<OpenFacKeyboardButton> = new Array<OpenFacKeyboardButton>();
    public Caption: string;
    public Text: string;
    public Action: IOpenFacAction;

    constructor() {

    }

    public Add(): OpenFacKeyboardButton {
        var bt: OpenFacKeyboardButton = new OpenFacKeyboardButton();
        this.Items.push(bt);
        return bt;
    }
    public Count(): number {
        return this.Items.length;
    }

}