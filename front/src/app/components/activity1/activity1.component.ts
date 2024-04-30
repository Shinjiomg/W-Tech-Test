import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCard, MatCardModule,  } from '@angular/material/card';

@Component({
  selector: 'app-activity1',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule],
  templateUrl: './activity1.component.html',
  styleUrl: './activity1.component.css'
})
export class Activity1Component {

}
