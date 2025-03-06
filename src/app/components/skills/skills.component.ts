import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, TimelineComponent, TranslateModule]
})
export class SkillsComponent {

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }
}
