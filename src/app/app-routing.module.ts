import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './components/home/home.component';
import { RegionComponent }   from './components/region/region.component';
import { NewsComponent }   from './components/news/news.component';
import { SponsorsComponent }   from './components/sponsors/sponsors.component';
import { AboutComponent }   from './components/about/about.component';
import { PrivacyComponent }   from './components/privacy/privacy.component';
import { ContactComponent }   from './components/contact/contact.component';

//import { HeroDetailComponent }  from './about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'region',     component: RegionComponent },
  { path: 'news',     component: NewsComponent },
  { path: 'sponsors',     component: SponsorsComponent },
  { path: 'privacy',     component: PrivacyComponent },
  { path: 'contact',     component: ContactComponent },
  { path: 'about',     component: AboutComponent },
 // { path: 'region',     component: RegionComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
