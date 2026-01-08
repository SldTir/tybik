import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { Mouse } from './mouse';
@Component({
  selector: 'app-canvas-jelly-effect',
  imports: [],
  templateUrl: './canvas-jelly-effect.html',
  styleUrl: './canvas-jelly-effect.scss',
})
export class CanvasJellyEffect implements OnInit {
  private readonly cvs = viewChild.required<ElementRef<HTMLCanvasElement>>('cvs');
  private ctx: CanvasRenderingContext2D | null = null;
  private mouse: Mouse | null = null;

  ngOnInit(): void {
    this.ctx = this.cvs().nativeElement.getContext('2d');
    if (!this.ctx) return;
    this.mouse = new Mouse(this.cvs().nativeElement);
    this.render();
  }

  private drawBall(x: number, y: number, r: number): void {
    if (!this.ctx) return;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#ff0000';
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }

  private render(): void {
    window.requestAnimationFrame(this.render.bind(this));
    if (!this.mouse || !this.ctx) return;
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    this.ctx.fillRect(0, 0, 600, 600);
    this.drawBall(this.mouse.x, this.mouse.y, 10);
  }
}
