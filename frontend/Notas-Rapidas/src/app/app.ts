import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Notas } from './notas/notas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Notas],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Notas-Rapidas');
}
