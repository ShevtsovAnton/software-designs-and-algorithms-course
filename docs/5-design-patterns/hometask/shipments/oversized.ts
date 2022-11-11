import { Shipment } from './shipment';
import { ShipmentType } from '../types';

export class Oversized extends Shipment {
    protected postInitialize() {
        this.type = ShipmentType.OVERSIZED;
    }
}
