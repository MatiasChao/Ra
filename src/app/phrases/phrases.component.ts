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
    private _phrasesService: PhrasesService
  ) {}

  ngOnInit() {
    //console.log(this._phrasesService.getAllPhrases());
  }

}

