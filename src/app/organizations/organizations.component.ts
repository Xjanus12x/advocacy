import { Component } from '@angular/core';
import { OrganizationsService } from './organizations.service';
@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css'],
})
export class OrganizationsComponent {
  orgs: any;
  constructor(private organizations: OrganizationsService) {}
  ngOnInit() {
    this.organizations.getData().subscribe((data: any) => {
      this.orgs = data;
    });
  }
}
