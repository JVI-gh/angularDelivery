import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Hardware/create/create.component';
import { EditComponent } from './Hardware/edit/edit.component';
import { ShowComponent } from './Hardware/show/show.component';

const routes: Routes = [
  { path: 'show', component: ShowComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
