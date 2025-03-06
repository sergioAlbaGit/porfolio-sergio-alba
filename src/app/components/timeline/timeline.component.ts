import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule, TranslateService } from '@ngx-translate/core';



interface Skills {

    title: string,
    description: string,
    details: string[]

}

@Component({
  selector: 'app-timeline',
  imports: [
    MatCardModule, MatExpansionModule, MatListModule, CommonModule, MatIconModule, TranslateModule
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})


export class TimelineComponent {

    constructor(private translate: TranslateService){
      this.translate.setDefaultLang('es');
      this.translate.use('es');
    }

  skillsTimeline: Skills[] = [
    {
      title: "Angular",
      description: "Version +16",
      details: ['skillsTimeline.angular.structures', 'skillsTimeline.angular.components', 'skillsTimeline.angular.services', 'skillsTimeline.angular.routing', 'skillsTimeline.angular.pages']
    },
    {
      title: "Typescript",
      description: "Superset de JS",
      details: ['skillsTimeline.ts.typing', 'skillsTimeline.ts.interfaces', 'skillsTimeline.ts.classes', 'skillsTimeline.ts.generics', 'skillsTimeline.ts.decorators'],
    },
    {
      title: "RxJS",
      description: "Programación reactiva",
      details: ['skillsTimeline.rxjs.observables', 'skillsTimeline.rxjs.subscriptions', 'skillsTimeline.rxjs.operators', 'skillsTimeline.rxjs.subjects', 'skillsTimeline.rxjs.signals'],
    },
  ];
}

