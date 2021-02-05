/* 
[POR] Criado por Alexandre Henzen
Organiza e imprime os botões do teclado
O Script chama os seguintes arquivos .ts:
OpenFac.KeyboardButton.

[ENG] Created by Alexandre Henzen
Organize and print the keyboard buttons
Script calls the following .ts files:
OpenFac.KeyboardButton.

*/
import { OpenFacKeyboardButton } from "./OpenFac.KeyboardButton";

export class OpenFacKeyboardLine {
    
    public Items: Array<OpenFacKeyboardLine> = new Array<OpenFacKeyboardLine>();
    public Buttons: OpenFacKeyboardButton = new OpenFacKeyboardButton();

    constructor() {

    }

    public Add(): OpenFacKeyboardLine {
        let li = new OpenFacKeyboardLine();
        this.Items.push(li);
        return li;
    };

    public Count(): number {
        return this.Items.length;
    };

};