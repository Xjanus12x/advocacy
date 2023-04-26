import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VideoComponent } from './video/video.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { TopDonorsComponent } from './top-donors/top-donors.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VideoComponent,
    AboutUsComponent,
    OtherProjectsComponent,
    OrganizationsComponent,
    TopDonorsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
