import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule]
})
export class HeaderComponent implements AfterViewInit {
  menuOpen = false; // Estado del menú

  constructor(private el: ElementRef, private translate: TranslateService) {
    this.translate.setDefaultLang('es'); // Establecer español como predeterminado
  }

  ngAfterViewInit() {
    // Animación inicial del header
    gsap.from(this.el.nativeElement.querySelector('nav'), {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const navLinks = this.el.nativeElement.querySelector('.nav-links');

    gsap.set(navLinks, { clearProps: "all" });

    gsap.to(navLinks, {
      y: this.menuOpen ? 0 : -200,
      opacity: this.menuOpen ? 1 : 0,
      pointerEvents: this.menuOpen ? 'auto' : 'none',
      duration: 0.3,
      ease: 'power2.out',
    });
  }

  closeMenu() {
    if (window.innerWidth <= 768) { // Solo cerrar si es móvil
      this.menuOpen = false;
      const navLinks = this.el.nativeElement.querySelector('.nav-links');

      gsap.to(navLinks, {
        y: -200,
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang); // Guardar selección del usuario
  }
}
