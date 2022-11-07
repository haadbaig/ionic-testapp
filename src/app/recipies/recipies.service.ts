import { Injectable } from '@angular/core';
import { Recipie } from './recipie.model';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {
  private recipies: Recipie[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      ingredients: ['French fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Speghitti',
      ingredients: ['spaghetti', 'Meat', 'Tomatoes']
    }
  ];
  constructor() { }

  getAllRecipies() {
    return [...this.recipies];
  }

  getRecpie(recipieId) {
    return {...this.recipies.find(recipie => recipie.id === recipieId)};
  }

  deleteRecipie (recipieId) {
    this.recipies = this.recipies.filter(r => r.id !== recipieId)
  }
}
