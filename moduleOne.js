module.exports = {
  number: 8,
  numberWord: function () {
    console.log("I am eight" + this.number);
    privateNumber()
  }

};







 function privateNumber() {
    console.log("dont look at me");
  };
  // privateNumber();