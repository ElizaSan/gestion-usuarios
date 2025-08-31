import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
  standalone: true,
})

export class Usuarios implements OnInit {

  usuarios: Usuarios[] = [];
  cargando: boolean = true;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener usuarios', err);
        this.cargando = false;
      },
    });
  }

}
