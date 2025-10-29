import { Component } from '@angular/core';
import { ComprasComponent } from "./compras/compras.component";

@Component({
  selector: 'app-root',
  imports: [ComprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lista-compras-basico';
}
