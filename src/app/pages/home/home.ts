import { Component } from '@angular/core';
import { LogoAnimation } from '../../shared/components/logo-animation/logo-animation';
import { CanvasJellyEffect } from '../../shared/components/canvas-jelly-effect/canvas-jelly-effect';

@Component({
  selector: 'app-home',
  imports: [LogoAnimation, CanvasJellyEffect],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
