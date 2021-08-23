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

setInterval(()=>{
    events.emit('pickup',obj);
},5000)



