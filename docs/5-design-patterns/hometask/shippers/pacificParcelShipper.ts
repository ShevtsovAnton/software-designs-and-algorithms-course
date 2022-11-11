import { Shipment } from '../shipments/shipment';
import { Shipper, ShipmentType } from '../types';

export class PacificParcelShipper implements Shipper {
    private static letterRate = 0.51;
    private static packageRate = 0.19;
    private static oversizeChargePerOunce = 0.02;

    public getCost(shipment: Shipment): number {
        const weight = shipment.getWeight();
        switch (shipment.getType()) {
            case ShipmentType.PACKAGE:
                return weight * PacificParcelShipper.packageRate;
            case ShipmentType.OVERSIZED:
                return (
                    weight *
                    (PacificParcelShipper.packageRate +
                        PacificParcelShipper.oversizeChargePerOunce)
                );
            default:
                return shipment.getWeight() * PacificParcelShipper.letterRate;
        }
    }
}
