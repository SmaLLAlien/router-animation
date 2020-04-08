import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'two', component: AboutComponent, data: {animation: 'AboutPage'} },
  { path: 'three', component: ContactComponent, data: { animation: 'ContactPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
