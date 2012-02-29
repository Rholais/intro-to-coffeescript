(function() {
  var TaxCalculator, calc, price, tax, total;

  TaxCalculator = (function() {

    function TaxCalculator(tax) {
      if (tax == null) tax = 10;
      this.tax = tax;
    }

    TaxCalculator.prototype.taxAmount = function(price) {
      return price * (this.tax / 100);
    };

    TaxCalculator.prototype.totalPrice = function(price) {
      return price + (price * (this.tax / 100));
    };

    return TaxCalculator;

  })();

  calc = new TaxCalculator();

  price = 100;

  tax = calc.taxAmount(price);

  total = calc.totalPrice(price);

  console.log("price $" + price);

  console.log("tax $ " + tax);

  console.log("total $" + total);

}).call(this);
