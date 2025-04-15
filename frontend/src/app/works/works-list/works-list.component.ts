import { Component, OnInit } from '@angular/core';
import { WorksComponent } from '../works.component';
import { Work } from '../../models/work';
import { WorksService } from '../../services/works-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-works-list',
  standalone: true,
  imports: [ 
    WorksComponent,
    CommonModule],
  templateUrl: './works-list.component.html',
  styleUrl: './works-list.component.css'
})
export class WorksListComponent implements OnInit{

  works!: Work[];
  visibleCount = 4;
  isExpanded = false;

  constructor(private worksService: WorksService) {}

  ngOnInit(): void {
    this.works = this.worksService.getWorks();
  }

  toggleVisibility(): void {
    this.isExpanded = !this.isExpanded;
    this.visibleCount = this.isExpanded ? this.works.length : 4;
  }

}
