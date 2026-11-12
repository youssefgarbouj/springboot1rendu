import { Routes } from '@angular/router';
import { Motos } from './motos/motos';
import { AddMoto } from './add-moto/add-moto';
import { UpdateMoto } from './update-moto/update-moto';
import { RechercheParCategorie } from './recherche-par-categorie/recherche-par-categorie';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { motoGuard } from './services/moto-guard';

export const routes: Routes = [
  { path: 'motos', component: Motos },
  { path: 'add-moto', component: AddMoto, canActivate: [motoGuard] },
  { path: '', redirectTo: 'motos', pathMatch: 'full' },
  { path: 'update-moto/:id', component: UpdateMoto, canActivate: [motoGuard] },
  { path: 'rechercheParCategorie', component: RechercheParCategorie },
  { path: 'rechercheParNom', component: RechercheParNom },
  { path: 'login', component: Login },
  { path: 'app-forbidden', component: Forbidden },
];
