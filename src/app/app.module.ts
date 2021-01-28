import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PeopleComponent } from './people/people.component';
import { ShowsComponent } from './shows/shows.component';
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
  import { MatTabsModule } from '@angular/material/tabs';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatInputModule } from '@angular/material/input';
  import { MatCheckboxModule } from '@angular/material/checkbox';
  import { MatIconModule } from '@angular/material/icon';
  import { MatCardModule } from '@angular/material/card'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TvshowsService } from './tvshows.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import { SeasonComponent } from './season/season.component';
import { ShowdetailpeopleComponent } from './showdetailpeople/showdetailpeople.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NetworkerrorComponent } from './networkerror/networkerror.component';
import { LableComponent } from './lable/lable.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleComponent,
    ShowsComponent,
    RegisterUserComponent,
    ShowdetailComponent,
    SeasonComponent,
    ShowdetailpeopleComponent,
    PagenotfoundComponent,
    NetworkerrorComponent,
    LableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [TvshowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
