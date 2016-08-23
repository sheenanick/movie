//Back-end
function FinalPrice(pick, show, age) {
  this.pick = pick;
  this.show = show;
  this.age = age;
  this.price = 10;
}

FinalPrice.prototype.costGen = function() {
  debugger;
  if (this.pick === "Don't Breathe") {
    this.price += 2;
  }
  if ((this.show == 1)||(this.show==2)) {
    this.price -= 2;
  }
  if ((this.age <=18)||(this.age>=65)) {
    this.price -=2;
  }
  return this.price

}
//Front-end
$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var movieSelection = $("#movie-name").val();
    var showtime = $("#time").val();
    var age = parseInt($("#age").val());
    var ticket1 = new FinalPrice(movieSelection, showtime, age);
    var ticket2 = ticket1.costGen();
    $("h1 p").remove();
    $(".result").append("<p>Your ticket to "+ ticket1.pick + " will cost: $" + ticket2 + ".</p>")

  });
});
