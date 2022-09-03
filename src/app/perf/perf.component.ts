import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { MyUpperCasePipe } from '../my-upper-case.pipe';
import { PerfListCardComponent } from '../perf-list-card.component';
import { PerfsService } from '../perfs.service';

interface Hero{
   id: number;
   name: string;
}

export const HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-perf',
  standalone: true,
  imports: [CommonModule, PerfListCardComponent, MyUpperCasePipe],
  templateUrl: './perf.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./perf.component.scss']
})
export class PerfComponent implements OnInit {
  heroes = HEROES; 
  @Input() data: Observable<string[]> = of(['']);

  aquaticCreatures = new BehaviorSubject(['shark','dolphins','whale','Minoe']);
  
  arrSeaCreatures: string[] = [''];

  constructor(private cd: ChangeDetectorRef, public perfsServ: PerfsService) {
  }

  ngOnInit(): void {
    this.data = this.aquaticCreatures.asObservable() as Observable<string[]>;
 
    this.data.subscribe(item => {
         this.arrSeaCreatures = [...this.arrSeaCreatures, ...item];
         this.cd.markForCheck();
     });
  }

  trackByIds(id: number, item: Hero){
       return item?.id;
       return id;
  }

  makeUpperCase(value: string){
        return value.toUpperCase();
  }

  addSeaCreature(val: string){
        this.aquaticCreatures.next([val]);
  }
}
