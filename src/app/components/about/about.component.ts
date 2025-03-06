import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import gsap from 'gsap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule]
})
export class AboutComponent implements AfterViewInit {

  constructor(private el: ElementRef, private translate: TranslateService) {
    this.translate.setDefaultLang('es'); // Español por defecto
    this.translate.use('es'); // 👈 Asegura que el idioma se cargue
  }


  ngAfterViewInit() {
    gsap.from(this.el.nativeElement.querySelector('.about-text'), {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from(this.el.nativeElement.querySelector('.about-image'), {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 0.3,
    });

  }


}
