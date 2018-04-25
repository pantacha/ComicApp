import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService,
                  private router:Router
              ) {

    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    })

   }

  backToHeroes(){
    this.router.navigate(['/heroes']);
  }

}
