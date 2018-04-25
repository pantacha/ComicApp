import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];

  constructor(private activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService,
                  private router:Router) {

      this.activatedRoute.params.subscribe(params =>{
        this.heroes = this._heroesService.buscarHeroe(params['termino']);
      })

  }

  ngOnInit() {
  }

}
