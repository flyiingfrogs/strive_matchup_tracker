import { Routes } from '@angular/router';
import { CharacterDetails } from './components/character-details/character-details';

export const routes: Routes = [
    {
        path: 'character/:id',
        component: CharacterDetails,
        title: 'Character Details'
    }, 
];
