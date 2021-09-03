import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { NavBarMenuComponent } from './components/nav-bar-menu/nav-bar-menu.component';
import { ProfileComponent } from './pages/profile/profile.component';

const appRoutes :Routes=[
  {path:'', component:HomeComponent},
  {path:'profile',component:ProfileComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ChatBoxComponent,
    NavBarMenuComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
