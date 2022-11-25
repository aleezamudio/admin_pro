import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), PagesRoutingModule,AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
