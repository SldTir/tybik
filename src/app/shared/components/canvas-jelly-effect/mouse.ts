export class Mouse {
  private x: number = 0;
  private y: number = 0;
  constructor(cvs: HTMLCanvasElement) {
    const rect = cvs.getBoundingClientRect();
    cvs.onmousemove = (e) => {
      this.x = e.clientX - rect.left;
      this.y = e.clientY - rect.top;
      console.log(this.x, this.y);
    };
  }
}
