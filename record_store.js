var Record = function(artist, title, price){
  this.artist = artist;
  this.title = title;
  this.price = price;
};

var record1 = new Record('Friendly Fires', 'Pala', 10.99);
  // console.log(record1);

  module.exports = Record;
