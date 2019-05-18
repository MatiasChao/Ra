import { Component, OnInit } from '@angular/core';
import { PhrasesService } from './phrases.service';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.scss'],
  providers: [PhrasesService]
})
export class PhrasesComponent implements OnInit {

  constructor(
    private _phrasesService: PhrasesService,
  ) {}

  public list_prhases = [];

  ngOnInit() {
    this.listPrhases();
  }

  listPrhases() {
   // this.prhases = this._phrasesService.getAllPhrases();

   this._phrasesService.searchProducts().subscribe(
    data => this.list_prhases = data
  );

    console.log(this.list_prhases);
    console.log(this._phrasesService.getAllPhrases() + "xD");
/*
   for (let i = 0; i <= this.prhases.length-1; i++) {
      console.log(this.prhases[i]);
      console.log(i + 1);
   }
   */
  }

  validateForm = () => {
    console.log("VALIDADO");
  }

}

