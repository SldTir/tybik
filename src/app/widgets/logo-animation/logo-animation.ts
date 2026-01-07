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
    this.tlm
      .from('.logo__y', 1, {
        y: -15,
      })
      .from('.logo__b', 1.5, { rotation: 60, transformOrigin: '100% 50%' }, '-=1')
      .from('.logo__i', 1, { y: '100%' }, '-=0.8')
      .from('.logo__k', 1.5, { y: -50 }, '-=1');
  }
}
