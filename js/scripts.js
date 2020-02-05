function Even() { 
    this.arr = [0,1]
    this.prev1 = this.arr[this.arr.length-2]
    this.prev2 = this.arr[this.arr.length-1]
}

var fibb = new Even()
var value = fibb.Fib(10)
var = [0,1,1,2,3,5,8]


Even.prototype.fib = function(input) {
  while(this.arr[-1] < input) {
    var next = this.prev1 + this.prev2;
    var.arr.push(next);
    this.prev1 = this.arr[this.arr.length-2];
    this.prev2 = this.arr[this.arr.length-1];
    return this.arr;
  }
}