import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-logo-animation',
  imports: [],
  templateUrl: './logo-animation.html',
  styleUrl: './logo-animation.scss',
})
export class LogoAnimation implements OnInit {
  private readonly timeLineMax = new TimelineMax();
  
  ngOnInit(): void {
    console.log(this.timeLineMax)
  }
}
