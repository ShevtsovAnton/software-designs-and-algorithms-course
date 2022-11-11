import { Shipment } from './Shipment';
import { ShipmentInfo } from './types';

export class Client {
    shipItem(item: ShipmentInfo) {
        const shipment = new Shipment(item);
        const shipmentMessage = shipment.ship();
        console.log(shipmentMessage);
    }
}
