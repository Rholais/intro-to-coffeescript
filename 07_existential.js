(function() {
  var billTo, label, shipTo;

  billTo = {};

  billTo.street = "111 Accounting St.";

  billTo.city = "State College";

  shipTo = {};

  shipTo.street = "222 Warehouse Blvd.";

  shipTo.city = "Bellefonte";

  label = shipTo != null ? shipTo : billTo;

  console.log("" + label.street);

}).call(this);
