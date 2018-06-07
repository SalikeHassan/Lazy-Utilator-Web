import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidenavComponent } from './component/sidenav/sidenav.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { NotesComponent } from './component/notes/notes.component';
import { TextComponent } from './component/text/text.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AlbumComponent } from './component/album/album.component';
import { BookComponent } from './component/book/book.component';
import { FeatureAppComponent } from './feature-app.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: FeatureAppComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'notes', component: NotesComponent
      },
      {
        path: 'text', component: TextComponent
      },
      {
        path: 'book', component: BookComponent
      },
      {
        path: 'photo', component: AlbumComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CKEditorModule,
    FormsModule
  ],
  declarations: [
    FeatureAppComponent,
    SidenavComponent,
    ToolbarComponent,
    NotesComponent,
    TextComponent,
    DashboardComponent,
    AlbumComponent,
    BookComponent
  ]
})
export class AppfeatureModule { }
