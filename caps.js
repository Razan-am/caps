'use strict';

const events = require('./event');
const faker = require('faker');
require('dotenv').config();

require('./modular/vendor');
require('./modular/driver');


let obj ={
    storeName: process.env.STORE_NAME,
    orderId: faker.datatype.number(),
    customerName: faker.name.findName(),
    address:  faker.address.direction()
}

events.emit('pickup',obj);
setTimeout(()=>{
    events.emit('delivered',obj)
},8000)
