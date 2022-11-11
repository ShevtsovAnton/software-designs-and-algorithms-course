import { Shipment } from './shipment';
import { ShipmentType } from '../types';

export class Letter extends Shipment {
    protected postInitialize() {
        this.type = ShipmentType.LETTER;
    }
}
