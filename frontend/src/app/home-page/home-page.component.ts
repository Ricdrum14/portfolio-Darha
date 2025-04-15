import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';
import { WorksListComponent } from "../works/works-list/works-list.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    WorksListComponent,
    WorksListComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
