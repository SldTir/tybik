export class Mouse {
  public x: number = 0;
  public y: number = 0;
  constructor(cvs: HTMLCanvasElement) {
    const rect = cvs.getBoundingClientRect();
    cvs.onmousemove = (e) => {
      this.x = e.clientX - rect.left;
      this.y = e.clientY - rect.top;
    };
  }
}
