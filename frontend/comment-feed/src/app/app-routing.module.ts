import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'comment-edit/:id', component: CommentEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
