import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule, MatButtonModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedSubmenu: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setSelectedSubmenu();
      }
    });

    this.setSelectedSubmenu(); // Para la primera carga
  }

  setSelectedSubmenu() {
    const currentRoute = this.router.url; // Obtiene la ruta actual
    if (currentRoute.includes('/introduccion/activity1')) {
      this.selectedSubmenu = 'activity1';
    } else if (currentRoute.includes('/introduccion/activity2')) {
      this.selectedSubmenu = 'activity2';
    }
  }

  isSelected(submenu: string): boolean {
    return this.selectedSubmenu === submenu;
  }

  isAnySubmenuSelected(): boolean {
    return this.selectedSubmenu !== '';
  }

  selectSubmenu(submenu: string) {
    this.selectedSubmenu = submenu;
  }
}
