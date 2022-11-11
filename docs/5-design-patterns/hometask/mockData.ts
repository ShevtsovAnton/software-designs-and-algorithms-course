import { ShipmentInfo } from './types';

export const item1: ShipmentInfo = {
    shipmentId: 0,
    weight: 10,
    fromAddress: '12345 6th Ave WE, Park Avenue, OH',
    fromZipCode: '12345',
    toAddress: '54321 New Street, New York, NY',
    toZipCode: '54321',
    isFragile: false,
    doNotLeave: true,
    isReturnReceiptRequested: true,
};

export const item2: ShipmentInfo = {
    shipmentId: 0,
    weight: 100,
    fromAddress: '45678 7th Ave WE, Park Avenue, OH',
    fromZipCode: '45678',
    toAddress: '87654 New Street, New York, NY',
    toZipCode: '87654',
    isFragile: true,
    doNotLeave: true,
    isReturnReceiptRequested: true,
};

export const item3: ShipmentInfo = {
    shipmentId: 0,
    weight: 400,
    fromAddress: '78901 8th Ave WE, Park Avenue, OH',
    fromZipCode: '78901',
    toAddress: '10987 New Street, New York, NY',
    toZipCode: '10987',
    isFragile: true,
    doNotLeave: false,
    isReturnReceiptRequested: false,
};
