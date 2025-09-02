import { Component, OnInit } from '@angular/core';
import { AutomationClientService } from '../automation-client.service';
import { IJsonObject } from 'src/domain/common';

@Component({
  selector: 'app-global-map-data',
  templateUrl: './global-map-data.component.html',
  styleUrls: ['./global-map-data.component.css']
})
export class GlobalMapDataComponent implements OnInit {
  globalMapData: IJsonObject = {};
  globalMapDataKey:string;
  globalMapDataValue:string;
 
  constructor(private service: AutomationClientService){}
 
   ngOnInit(): void {
     this.globalMapData = this.getTestData();
   }

   getKeysFromglobalMapData(): string[]{
    return Object.keys(this.globalMapData);
   }
 
   updateScenarioData(){
    this.globalMapData[this.globalMapDataKey] = this.globalMapDataValue;
    this.globalMapDataKey = "";
    this.globalMapDataValue = "";
   }
 
   editScenarioData(itemKey: string){
     this.globalMapDataKey = itemKey;
     this.globalMapDataValue = this.globalMapData[itemKey];
   }
 
   deleteScenarioData(itemKey:string){
     delete this.globalMapData[itemKey]
   }
 
 
  getTestData(){
    return {
            "firstName":"John",
            "lastName":"Doe"
          };
  }
 }
 