import { Component, OnInit } from '@angular/core';
import {Word} from '../word';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  word: Word;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const word = this.activatedRoute.snapshot.params.word;
    this.word = this.dictionaryService.findById(word);
  }
}
