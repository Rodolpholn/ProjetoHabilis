import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notas.html',
  styleUrl: './notas.css',
})
export class Notas implements OnInit {
  @Input() clientId: string = '';
  public notes: any[] = [];
  public newNoteText: string = '';
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    if (!this.clientId) return;
    this.http.get<any[]>(`${this.API_URL}/clients/${this.clientId}/notes`).subscribe(
      (notes) => {
        this.notes = notes;
      },
      (error) => {
        console.error('Erro ao buscar notas:', error);
      }
    );
  }

  addNote(): void {
    if (!this.newNoteText.trim()) {
      alert('A nota não pode ser vazia.');
      return;
    }

    const body = { text: this.newNoteText };

    this.http.post<any>(`${this.API_URL}/clients/${this.clientId}/notes`, body).subscribe(
      (note) => {
        this.newNoteText = '';

        this.getNotes();
      },
      (error) => {
        console.error('Erro ao adicionar nota:', error);
        alert('Ocorreu um erro ao adicionar a nota. Tente novamente.');
      }
    );
  }
}
