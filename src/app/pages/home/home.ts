import { Component } from '@angular/core';
import { LogoAnimation } from '../../shared/components/logo-animation/logo-animation';

@Component({
  selector: 'app-home',
  imports: [LogoAnimation],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
