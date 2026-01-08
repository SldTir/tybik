import { Component, ElementRef, OnInit, viewChild } from '@angular/core';

@Component({
  selector: 'app-canvas-jelly-effect',
  imports: [],
  templateUrl: './canvas-jelly-effect.html',
  styleUrl: './canvas-jelly-effect.scss',
})
export class CanvasJellyEffect implements OnInit {
  private readonly cvs = viewChild.required<ElementRef<HTMLCanvasElement>>('cvs');
  private ctx: CanvasRenderingContext2D | null = null;

  ngOnInit(): void {
    this.ctx = this.cvs().nativeElement.getContext('2d');
    console.log(this.ctx);
  }
}
