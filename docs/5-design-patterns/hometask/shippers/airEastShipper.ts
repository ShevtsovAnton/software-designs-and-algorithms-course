import { Shipment } from '../Shipment';
import { Shipper } from '../types';

export class AirEastShipper implements Shipper {
    private static rate = 0.39;

    public getCost(shipment: Shipment): number {
        return shipment.getWeight() * AirEastShipper.rate;
    }
}
