/* 
[POR] Criado por Alexandre Henzen
Implementa o teclado
O Script chama os seguintes arquivos .ts:
OpenFac.Keyboard.Interface;
OpenFac.KeyboardButton;
OpenFac.KeyboardLine.

[ENG] Created by Alexandre Henzen
Implements the keyboard
Script calls the following .ts files:
OpenFac.Keyboard.Interface;
OpenFac.KeyboardButton;
OpenFac.KeyboardLine.

*/
import { IOpenFacKeyboard } from "./OpenFac.Keyboard.Interface";
import { OpenFacKeyboardButton } from "./OpenFac.KeyboardButton";
import { OpenFacKeyboardLine } from "./OpenFac.KeyboardLine";

export class OpenFacKeyboard implements IOpenFacKeyboard {
    
    public Lines: OpenFacKeyboardLine = new OpenFacKeyboardLine();
    public OpenFacKeyboard()
    {

    }
    public DoAction(button: OpenFacKeyboardButton): void {
        
    }

}