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
    setTimeout(()=>{

        console.log('Event',obj)
    },5000)
    setTimeout(()=>{
        console.log('DRIVER: picked up',obj.payload.orderId);
    },6000)
    setTimeout(()=>{
        events.emit('in-transit',payload)
    },7000)
}

function transiteORder(payload){
    let obj = {
        event:'in-transit',
        time:new Date().toLocaleDateString(),
        payload
    }
    console.log('Event',obj);
}