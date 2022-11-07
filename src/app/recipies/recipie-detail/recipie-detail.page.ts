import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipie } from '../recipie.model';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.page.html',
  styleUrls: ['./recipie-detail.page.scss'],
})
export class RecipieDetailPage implements OnInit {

  loadedrecipie: Recipie;
  constructor(
    private activateRoute: ActivatedRoute,
    private recipieService: RecipiesService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipieId')){
        //redirect to previous page
      }
      const rId = paramMap.get('recipieId');
      this.loadedrecipie = this.recipieService.getRecpie(rId);
    });
  }

  onDeleteRecipie() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this recipie?',
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipieService.deleteRecipie(this.loadedrecipie.id);
            this.router.navigate(['/']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
