var Counter = function() {
  this.value = 0;
  this.increment = function() {
    this.value++;
  };
  this.getValue = function() {
    return this.value;
  };
};
exports.Counter = Counter;
