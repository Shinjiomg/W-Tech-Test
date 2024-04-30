import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
@Component({
  selector: 'app-activity2',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, MatIconModule, MatRadioModule],
  templateUrl: './activity2.component.html',
  styleUrl: './activity2.component.css'
})
export class Activity2Component {
  argumentSelected = false;
  aspectSelected = false;

  // Esta función se ejecutará cuando se seleccione una opción en los radio groups
  onSelectionChange() {
    this.argumentSelected = this.isRadioGroupSelected('argumentos');
    this.aspectSelected = this.isRadioGroupSelected('aspectos');
  }

  isRadioGroupSelected(groupName: string): boolean {
    const selected = document.querySelector(`mat-radio-group[name="${groupName}"] mat-radio-button input:checked`);
    return selected !== null;
  }

  isButtonEnabled(): boolean {
    return this.argumentSelected && this.aspectSelected;
  }
}
