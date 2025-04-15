import { Component } from '@angular/core';
import { WorksListComponent } from '../works-list/works-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-works-page',
  standalone: true,
  imports: [
    WorksListComponent,
    RouterLink],
  templateUrl: './works-page.component.html',
  styleUrl: './works-page.component.css'
})
export class WorksPageComponent {

}
