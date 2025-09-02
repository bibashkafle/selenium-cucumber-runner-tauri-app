import { Component, Input, OnInit } from '@angular/core';
import { AutomationClientService } from '../automation-client.service';
import { IJsonObject, IKeyValuePair } from 'src/domain/common';

@Component({
  selector: 'app-add-or-update-scenario',
  templateUrl: './add-or-update-scenario.component.html',
  styleUrls: ['./add-or-update-scenario.component.css']
})
export class AddOrUpdateScenarioComponent implements OnInit {
 @Input() fileName: string = ''
 scenarioData: IJsonObject = {};
 scenarioDataKey:string;
 scenarioDataValue:string;
//string[] = ["user open external url", "user open internal url", "user select {value} in {ddl} from dropdwon"];
 stepDefDescriptions: IJsonObject[] = [];
 selectedStepDefDescription:IJsonObject;
  
 constructor(private service: AutomationClientService){}

  ngOnInit(): void {
    this.scenarioData = this.getTestData();
    this.stepDefDescriptions.push({testStep: "user open external url"});
    this.stepDefDescriptions.push({testStep: "user open internal url"});
    this.stepDefDescriptions.push({testStep: "user select {value} in {ddl} from dropdwon"});
  }

  getKeysFromScenarioData(): string[]{
   return Object.keys(this.scenarioData);
  }

  updateScenarioData(){
   this.scenarioData[this.scenarioDataKey] = this.scenarioDataValue;
   this.scenarioDataKey = "";
   this.scenarioDataValue = "";
  }

  editScenarioData(itemKey: string){
    this.scenarioDataKey = itemKey;
    this.scenarioDataValue = this.scenarioData[itemKey];
  }

  deleteScenarioData(itemKey:string){
    delete this.scenarioData[itemKey]
  }


  addToTestSteps(){
    console.log(this.selectedStepDefDescription["stepDefDescription"]);
  }

 getTestData(){
   return {
           "officeDll":"dll01",
           "continueButton":"Continue"
         };
 }
}
