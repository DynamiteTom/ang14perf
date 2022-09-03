import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Perf, PerfsService } from './perfs.service';

@Component({
  selector: 'app-perf-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './perf-view.component.html',
  styleUrls: ['./perf-view.component.scss']
})
export class PerfViewComponent implements OnInit {

  perfObj$!: Observable<Perf | undefined>;

  inx = 0;

  constructor(private route: ActivatedRoute, private perfsService:PerfsService) { }

  ngOnInit(): void {
    this.perfObj$ = this.route.paramMap.pipe(map(params =>{
        this.inx = Number(params.get('index')); 
        return this.perfsService.perfs[Number(params.get('index'))];  
    }));  
  }
}
