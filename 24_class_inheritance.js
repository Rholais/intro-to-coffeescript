// Generated by CoffeeScript 1.3.1
(function() {
  var MeanTaxCalculator, TaxCalculator, calc, total,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  TaxCalculator = (function() {

    TaxCalculator.name = 'TaxCalculator';

    function TaxCalculator(tax) {
      this.tax = tax != null ? tax : 10;
    }

    TaxCalculator.prototype.taxAmount = function(price) {
      return price * (this.tax / 100);
    };

    TaxCalculator.prototype.totalPrice = function(price) {
      return price + this.taxAmount(price);
    };

    return TaxCalculator;

  })();

  MeanTaxCalculator = (function(_super) {

    __extends(MeanTaxCalculator, _super);

    MeanTaxCalculator.name = 'MeanTaxCalculator';

    function MeanTaxCalculator() {
      return MeanTaxCalculator.__super__.constructor.apply(this, arguments);
    }

    MeanTaxCalculator.prototype.totalPrice = function(price) {
      return price + this.taxAmount(price) + 25;
    };

    MeanTaxCalculator.prototype.anotherMethod = function() {
      return "hello";
    };

    return MeanTaxCalculator;

  })(TaxCalculator);

  calc = new MeanTaxCalculator(10);

  total = calc.totalPrice(500);

  console.log(calc.anotherMethod());

  console.log("total $ " + total);

}).call(this);
