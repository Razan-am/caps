'use strict';

const events = require('../event');

events.on('delivered',dileveredOrder);

function dileveredOrder(payload){

    let obj = {
        event:'delivered',
        time:new Date().toLocaleDateString(),
        payload
    }
    setTimeout(()=>{
        console.log('DRIVER: delivered up',obj.payload.orderId);
        console.log('VENDOR: Thank you for delivering',obj.payload.orderId);
        console.log('Event',obj);
    },3000)
}