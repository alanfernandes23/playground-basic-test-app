import { Component } from '@angular/core';
import {MenuItem} from '../../node_modules/primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'smilecdr';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {
          label: 'Generate Questionnaire',
          routerLink: ['/home']
        },
        {
            label: 'Patient',
            routerLink: ['/patient']
        }
    ];
}

}
