import { ShipmentInfo } from '../types';
import { Letter } from './letter';
import { Package } from './package';
import { Oversized } from './oversized';
import { Shipment } from './shipment';
import { ShipmentDecorator } from './ShipmentDecorator';

export class ShipmentFactory {
    static createShipment(item: ShipmentInfo): Shipment | ShipmentDecorator {
        const { weight } = item;

        if (weight <= 15) {
            return new ShipmentDecorator(new Letter(item));
        }

        if (weight <= 160) {
            return new ShipmentDecorator(new Package(item));
        }

        return new ShipmentDecorator(new Oversized(item));
    }
}
