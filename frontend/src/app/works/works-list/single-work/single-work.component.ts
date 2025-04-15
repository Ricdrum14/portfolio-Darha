import { Component } from '@angular/core';
import { Work } from '../../../models/work';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WorksService } from '../../../services/works-service';

@Component({
  selector: 'app-single-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-work.component.html',
  styleUrl: './single-work.component.css'
})
export class SingleWorkComponent {
  work!: Work;

  constructor(
    private route: ActivatedRoute,
    private worksService: WorksService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.work = this.worksService.getWorksById(id);
  }
}
