import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Work } from '../models/work';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-works',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  @Input() work!: Work;

  constructor( private router: Router ){}

  OnReadWork(){
    this.router.navigateByUrl(`works/${this.work.id}`)
  }
}
