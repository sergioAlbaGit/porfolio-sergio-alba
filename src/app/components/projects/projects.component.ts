import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  name: string;
  link: string;
  descriptionKey: string;
  technologies: string[];
  image: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule]
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: 'Country App',
      link: 'https://sergio-alba-netlify-country-app.netlify.app',
      descriptionKey: 'projects.countryApp.description',
      technologies: ['Angular', 'TypeScript', 'Bootstrap'],
      image: 'assets/images/Country-app.png'
    },
    {
      name: 'Dynamic list',
      link: 'https://sergio-alba-netlify-dynamic-list.netlify.app/',
      descriptionKey: 'projects.dynamicList.description',
      technologies: ['Angular', 'TypeScript', 'Bootstrap'],
      image: 'assets/images/Dynamic-list.png'
    },
    {
      name: 'Gifs App',
      link: 'https://sergio-alba-gifs-app-angular.netlify.app/',
      descriptionKey: 'projects.gifsApp.description',
      technologies: ['Angular', 'TypeScript', 'Tailwind', 'RxJS'],
      image: 'assets/images/Gifs-app.png'
    }
  ];
}

