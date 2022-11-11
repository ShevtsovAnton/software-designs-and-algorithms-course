import { ShipmentInfo } from '../types';
import { Letter } from './letter';
import { Package } from './package';
import { Oversized } from './oversized';
import { Shipment } from './shipment';

export class ShipmentFactory {
    static createShipment(item: ShipmentInfo): Shipment {
        const { weight } = item;

        if (weight <= 15) {
            return new Letter(item);
        }

        if (weight <= 160) {
            return new Package(item);
        }

        return new Oversized(item);
    }
}
