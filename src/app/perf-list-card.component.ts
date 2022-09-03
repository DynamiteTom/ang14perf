import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Perf } from './perfs.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perf-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './perf-list-card.component.html',
  styleUrls: ['./perf-list-card.component.scss']
})
export class PerfListCardComponent implements OnInit {
  @Input() perf!: Perf;
  @Input() index = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
