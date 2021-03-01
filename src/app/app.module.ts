import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { MyDataService } from './services/myData.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
