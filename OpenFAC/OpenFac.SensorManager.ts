/* 
[POR] Criado por Alexandre Henzen
Cria uma lista com os senores disponíveis
O Script chama os seguintes arquivos .ts:
OpenFac.Sensor.Interface;
OpenFac.SensorFactory.

[ENG] Created by Alexandre Henzen
Creates a list with the available sensors
Script calls the following .ts files:
OpenFac.Sensor.Interface;
OpenFac.SensorFactory.
*/

import { IOpenFacSensor } from "./OpenFac.Sensor.Interface";
import { OpenFacSensorFactory } from './OpenFac.SensorFactory';

export class OpenFacSensorManager {
    private sensorList: Map<string, IOpenFacSensor> = new  Map<string, IOpenFacSensor>();
    public Add(sensorName: string, sensor: IOpenFacSensor){
        this.sensorList.set(sensorName, sensor);        
    }
    public List(): Map<string, IOpenFacSensor>{
        return this.sensorList;
    };
    public Find(sensorName: string): IOpenFacSensor {
        let sensor: IOpenFacSensor;
        sensor = this.sensorList.get(sensorName);
        if(!sensor){
            sensor = OpenFacSensorFactory.Create(sensorName);
            if(sensor){
                this.Add(sensorName, sensor);
            }
        } 
        return sensor;
    };

};