import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-nom.html',
  styles: ``,
})
export class RechercheParNom implements OnInit {
  nomMoto: string = '';
  motos: Moto[] = [];

  constructor(private motoService: MotoService) {}

  ngOnInit(): void {
    this.motos = this.motoService.listeMotos();
  }

  rechercherMotos() {
    this.motos = this.motoService.rechercherParNom(this.nomMoto);
  }
}
