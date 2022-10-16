export class Point {
  private x: number;
  private y: number;

  private calculateDistanceTo(x: number, y: number): number {
    const distance: number = Math.sqrt(
      Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2)
    );

    return parseFloat(distance.toFixed(2));
  }

  constructor();
  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number;
  distance(other: Point): number;
  distance(x: number, y: number): number;

  distance(other?: Point | number, y?: number): number {
    if (typeof other === 'number' && y !== undefined) {
      return this.calculateDistanceTo(other, y);
    }
    if (other === undefined && y === undefined) {
      return this.calculateDistanceTo(0, 0);
    } else {
      const point = other as Point;
      const { x, y } = point;
      return this.calculateDistanceTo(x, y);
    }
  }
}
