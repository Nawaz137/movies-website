import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component'
import { ShowsComponent } from './shows/shows.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import { SeasonComponent } from './season/season.component';
import { ShowdetailpeopleComponent } from './showdetailpeople/showdetailpeople.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [


      {path: '', redirectTo: '/shows', pathMatch: 'full' },
      {path: 'people', component: PeopleComponent},
      {path: 'shows', component: ShowsComponent},


      {path: 'showDetails/:id', component: ShowdetailComponent},
      {path: 'register', component: RegisterUserComponent},
      {path: 'persondetail', component: ShowdetailComponent},
      {path: 'season', component: SeasonComponent},
      {path: 'peopledetails/:id', component: ShowdetailpeopleComponent},
      // Wildcard route for a 404 page
      {path: '**', component: PagenotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
