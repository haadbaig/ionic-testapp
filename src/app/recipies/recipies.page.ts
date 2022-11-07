import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie.model';
import { RecipiesService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {

  recipies: Recipie[];

  constructor(private recipieService: RecipiesService) { }

  ngOnInit() {
    this.recipies = this.recipieService.getAllRecipies();
  }

}
