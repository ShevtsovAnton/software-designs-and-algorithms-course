import { Point } from './point';

export abstract class Shape {
  protected points: Point[];
  protected color: string;
  protected filled: boolean;

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);

  constructor(
    points: Point[],
    color: string = 'green',
    filled: boolean = true
  ) {
    if (points.length < 3) {
      throw new Error('At least 3 points are required.');
    } else {
      this.points = points;
      this.color = color;
      this.filled = filled;
    }
  }

  toString(): string {
    return `A Shape with color of ${this.color} and${
      this.filled ? '' : ' not'
    } filled. Points: ${this.points.join(', ')}.`;
  }

  getPerimeter(): number {
    const distances = this.points.map((point, index, points) => {
      let distance: number;
      if (index === 0) {
        distance = point.distance(points[points.length - 1]);
      } else {
        distance = point.distance(points[index - 1]);
      }
      return parseFloat(distance.toFixed(2));
    });

    return distances.reduce((prev, curr) => prev + curr);
  }

  abstract getType(): string;
}
