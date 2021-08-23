'use strict';

const events = require('../event');
const faker = require('faker');

events.on('pickup',orderDetails);
events.on('in-transit',transiteORder);


function orderDetails(payload){
    let obj={
        event:'pickup',
        time: new Date().toLocaleDateString(),
        payload
    }
   console.log('Event',obj)

    setTimeout(()=>{
        console.log('DRIVER: picked up',obj.payload.orderId);
        events.emit('in-transit',payload);
    },1000)
}


function transiteORder(payload){
    let obj = {
        event:'in-transit',
        time:new Date().toLocaleDateString(),
        payload
    }
    console.log('Event',obj);
    events.emit('delivered',payload)
}