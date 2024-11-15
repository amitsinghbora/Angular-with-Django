import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Default component

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }, // Default route to '/tasks'
  { path: 'tasks', component: AppComponent }             // Use AppComponent for '/tasks' route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
