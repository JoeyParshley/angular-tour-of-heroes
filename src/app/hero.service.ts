// HeroService is going to provide an injectable service and it can also have its own injected dependencies
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// mark the class as one that participates in the dependency injection system
// @injectable docorator accepts a metadata object for the service
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // add a getHeroes method
  getHeroes(): Hero[] {
    return HEROES;
  }
}
