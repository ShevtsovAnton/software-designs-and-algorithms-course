import { Shipment } from '../Shipment';
import { Shipper } from '../types';

export class ChicagoSprintShipper implements Shipper {
    private static rate = 0.42;

    public getCost(shipment: Shipment): number {
        return shipment.getWeight() * ChicagoSprintShipper.rate;
    }
}
