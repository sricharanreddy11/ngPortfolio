import { ProjectsComponent } from './projects/projects.component';
import { InterestsComponent } from './interests/interests.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'interests', component: InterestsComponent },
    { path: '**', redirectTo: '/' }
];
