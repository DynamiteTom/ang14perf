import { Injectable } from '@angular/core';

export interface Perf{
      name: string;
      description: string;
}

const Perfs:Perf[] = [
  {name: 'AoT', description: 'Ahead of Time Compilation'},
  {name: 'Lazy Loading', description: 'Lazy Loading Modules or Components'},
  {name: 'Tree Shaking', description: 'Dead Code Elimination'},
  {name: 'OnPush', description: 'ChangeDetectionStrategy.OnPush()'}
];

@Injectable({
  providedIn: 'root'
})
export class PerfsService {
  perfs = Perfs;
  
  constructor() { }
}
