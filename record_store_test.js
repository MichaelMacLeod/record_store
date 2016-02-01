var assert = require('assert');
var Record = require('./record');
var Store = require('./RecordStore');

// //RESETTER: 
// describe('store', function(){
//   beforeEach(function(){
//     testStore = new RecordStore('name', 'city');
//     testRecord = new Record('name', 'title', 0);
//   });


// - Create a constructor to create Record objects with artist, title, price

// Create a few records
describe("Record", function(){
  it('should tell us the name of the records in the store', function(){
    var record1 = new Record('Friendly Fires', 'Pala', 10.99);
    assert.equal('Friendly Fires', record1.artist);
  });
});


// - Create a RecordStore that has a name, city and multiple records in it's inventory
describe("Record Store", function(){
  it('should have a record store', function(){
    var store1 = new Store('Avalanche', 'Edinburgh');
    assert.equal('Avalanche', store1.name);
  });
});

// - Give the RecordStore a balance i.e. cash in bank.
// - Add some records to your RecordStore.
// - Create a method that lists the inventory.
// - Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold
// - Create a method that reports on the financial situation of the store. Cash and value of inventory.
// - Create a RecordCollector (or customer) constructor who can buy and sell records.