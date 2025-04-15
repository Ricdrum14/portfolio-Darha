import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';
import { SingleWorkComponent } from './works/works-list/single-work/single-work.component';
import { WorksPageComponent } from './works/works-page/works-page.component';
export const routes: Routes = [
    {path: 'works/:id',component:SingleWorkComponent},
    { path: 'works', component: WorksPageComponent},
    {path:'contact', component: ContactComponent},
    {path:'',component: HomePageComponent}
];