import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-logo-animation',
  imports: [],
  templateUrl: './logo-animation.html',
  styleUrl: './logo-animation.scss',
})
export class LogoAnimation implements OnInit {
  private readonly tlm = new TimelineMax();

  ngOnInit(): void {
    this.tlm.from('.logo__y', 1, {
      y: -15,
    });
  }
}
