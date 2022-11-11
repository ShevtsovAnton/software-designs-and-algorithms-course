import { Shipment } from './shipment';
import { ShipmentType } from '../types';

export class Package extends Shipment {
    protected postInitialize() {
        this.type = ShipmentType.PACKAGE;
    }
}
