import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BlogComponent } from './blog/blog.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'help', component: HelpComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
