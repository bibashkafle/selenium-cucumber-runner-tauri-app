import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomePageComponent } from './home-page/home-page.component';
import { AppSettingComponent } from './app-setting/app-setting.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import {SidebarModule} from 'primeng/sidebar';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AutomationClientService } from "./automation-client.service";
import { MenubarComponent } from './menubar/menubar.component';
import { RunnersComponent } from './runners/runners.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { AddOrUpdateScenarioComponent } from './add-or-update-scenario/add-or-update-scenario.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { GlobalMapDataComponent } from './global-map-data/global-map-data.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [AppComponent, HomePageComponent, AppSettingComponent, MenubarComponent, RunnersComponent, ScenariosComponent, AddOrUpdateScenarioComponent, GlobalMapDataComponent],
  imports: [BrowserModule,
     CommonModule,
     BrowserAnimationsModule,
     FormsModule,
     ReactiveFormsModule,
     AppRoutingModule,
     MultiSelectModule,
     DropdownModule,
     ToastModule,
     SidebarModule,
     RippleModule,
     MessagesModule,
     ConfirmDialogModule,
     ConfirmPopupModule,
     DialogModule,
     ButtonModule,
     PanelModule,
     TableModule,
     InputTextareaModule,
     InputTextModule],
  providers: [ConfirmationService, MessageService, AutomationClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
