import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  // Component receives a hero object through its hero property and displays it.

  // add a hero property preceded by the @input() decorator
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
