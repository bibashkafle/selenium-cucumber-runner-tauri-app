import { Component, OnInit } from '@angular/core';
import { AutomationClientService } from '../automation-client.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {

  constructor(private service: AutomationClientService){
    
  }
  greetingMessage = "";
  pageUrl = "https://ip-0a16b41d.ad.faa.gov:1443/#/login";
  
  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();
    
      this.service.greeting(name).then((text) => {
        this.greetingMessage = text;
      });

    // invoke<string>("greet", { name }).then((text) => {
    //   this.greetingMessage = text;
    // });    
  }
}
