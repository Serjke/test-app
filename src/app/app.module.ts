import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HelpComponent } from './help/help.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ToolsBarComponent } from './tools-bar/tools-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    HelpComponent,
    BlogComponent,
    ContactsComponent,
    ToolsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
