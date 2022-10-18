import { Shape } from './Shape';
import { Point } from './Point';

export class Triangle extends Shape {
  constructor(point1: Point, point2: Point, point3: Point);
  constructor(
    point1: Point,
    point2: Point,
    point3: Point,
    color: string,
    filled: boolean
  );
  constructor(
    point1: Point,
    point2: Point,
    point3: Point,
    color?: string,
    filled?: boolean
  ) {
    if (typeof color === 'string' && typeof filled === 'boolean') {
      super([point1, point2, point3], color, filled);
    } else {
      super([point1, point2, point3]);
    }
  }

  toString() {
    return `Triangle[${this.points
      .map((point, index) => `v${index + 1}=${point.toString()}`)
      .join(',')}]`;
  }

  getType(): string {
    const distances: number[] = this.getDistances();

    const equalSides = distances.filter(
      (distance) => Math.abs(distance - distances[0]) === 0
    ).length;

    if (equalSides === 3) {
      return 'equilateral triangle';
    } else if (equalSides === 2) {
      return 'isosceles triangle';
    } else {
      return 'scalene triangle';
    }
  }
}
