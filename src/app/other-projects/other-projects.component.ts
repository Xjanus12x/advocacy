import { Component } from '@angular/core';
import { OtherProjectsService } from './other-projects.service';
@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.css'],
})
export class OtherProjectsComponent {
  projects: any;
  constructor(private otherProjects: OtherProjectsService) {}

  ngOnInit() {
    this.otherProjects.getData().subscribe((data: any) => {
      this.projects = data;
      console.log(this.projects);
    });
  }
}
