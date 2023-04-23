import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './landingpage/header/header.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { HeroComponent } from './landingpage/hero/hero.component';
import { AboutComponent } from './landingpage/about/about.component';
import { ContactComponent } from './landingpage/contact/contact.component';
import { ServiceComponent } from './landingpage/service/service.component';
import { MoreServiceComponent } from './landingpage/more-service/more-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    MoreServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
