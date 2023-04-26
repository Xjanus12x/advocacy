import { Component } from '@angular/core';
import { OtherProjectsService } from './other-projects/other-projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'advocacy';
  projects: any;
  constructor(private otherProjects: OtherProjectsService) {}

  ngOnInit() {
    this.otherProjects.getData().subscribe((data: any) => {
      this.projects = data;
      console.log(this.projects);
    });
  }
}
