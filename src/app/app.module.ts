import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from '../../src/app/header/header.component';
import { HomeComponent } from './home/home.component';
import { ToolComponent } from './tool/tool.component';
import { EarlyGameComponent } from './early-game/early-game.component';
import { MidGameComponent } from './mid-game/mid-game.component';
import { LateGameComponent } from './late-game/late-game.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ToolComponent,
    EarlyGameComponent,
    MidGameComponent,
    LateGameComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
