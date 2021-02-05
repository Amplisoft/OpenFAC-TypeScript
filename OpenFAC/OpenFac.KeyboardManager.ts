/* 
[POR] Criado por Alexandre Henzen
Script para administração do teclado e criação de teclados virtuais
O Script chama os seguintes arquivos .ts:
OpenFac.Keyboard.Interface;
OpenFac.KeyboardFactory.

[ENG] Created by Alexandre Henzen
Keyboard management and creation script.
Script calls the following .ts files:
OpenFac.Keyboard.Interface;
OpenFac.KeyboardFactory.

*/
import { IOpenFacKeyboard } from './OpenFac.Keyboard.Interface';
import { OpenFacKeyboardFactory } from './OpenFac.KeyboardFactory';

export class OpenFacKeyboardManager {
    private keyboardList: Map<string, IOpenFacKeyboard> = new Map<string, IOpenFacKeyboard>();
    public Add(keyboardName: string, IKeyboard: IOpenFacKeyboard): void {
        this.keyboardList.set(keyboardName, IKeyboard);
    }
    public List(): Map<string, IOpenFacKeyboard> {
        return this.keyboardList;
    }
    public Find(keyboardName: string): IOpenFacKeyboard {
        let keyboard: IOpenFacKeyboard;
        keyboard = this.keyboardList.get(keyboardName);
        if(!keyboard){
            keyboard = OpenFacKeyboardFactory.Create(keyboardName);
            if(keyboard){
                this.Add(keyboardName, keyboard);
            }
        } 
        return keyboard;
    }
}